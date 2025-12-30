/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

/**
 * Next.js ACF Component Generator & Sync
 * Automatically generates React components and a BlockRenderer from ACF JSON definitions.
 * SMARTER VERSION: Detects existing custom blocks, uses folder prioritization, and supports --watch mode.
 */

// --- CONFIGURATION ---
const WORDPRESS_THEME_PATH =
  '/Applications/XAMPP/xamppfiles/htdocs/nextjs-wp/wp-content/themes/nextjswp-theme';
const ACF_JSON_DIR = path.join(process.cwd(), 'acf-json'); // Use local acf-json folder
const NEXTJS_COMPONENTS_DIR = path.join(process.cwd(), 'src/components/blocks');
const REGISTRY_FILE = path.join(process.cwd(), 'src/components/common/BlockRenderer.jsx');

// Mapping for standard folders based on ACF group name patterns
const FOLDER_MAPPING = {
  home: 'home',
  about: 'about',
  global: 'common',
  privacy: 'common',
  careers: 'careers',
  news: 'news',
  leadership: 'our-company',
  leader: 'our-company',
  team: 'our-company',
};

// Priority folders (when multiple copies of a component exist, prefer these)
const PRIORITY_FOLDERS = ['our-company', 'home', 'common', 'about', 'news', 'careers'];

// --- UTILITIES ---
const toPascalCase = str => {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .filter(x => x.length > 0)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

function ensureDirectoryExists(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Recursively find all versions of a component file in the components/blocks directory
 */
function findAllVersions(componentName) {
  const results = [];
  const findInDir = dir => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        findInDir(fullPath);
      } else if (file === `${componentName}.jsx` || file === `${componentName}.js`) {
        const relativePath = path.relative(NEXTJS_COMPONENTS_DIR, fullPath);
        results.push({
          fullPath,
          relativePath,
          folder: path.dirname(relativePath),
        });
      }
    }
  };

  if (fs.existsSync(NEXTJS_COMPONENTS_DIR)) {
    findInDir(NEXTJS_COMPONENTS_DIR);
  }
  return results;
}

/**
 * Find the best version based on folder priority
 */
function findExistingComponent(componentName) {
  const versions = findAllVersions(componentName);
  if (versions.length === 0) return null;
  if (versions.length === 1) return versions[0];

  // More than one version? Prioritize.
  for (const priorityFolder of PRIORITY_FOLDERS) {
    const match = versions.find(v => v.folder === priorityFolder);
    if (match) return match;
  }

  return versions[0];
}

// --- GENERATION LOGIC ---

function generateComponentTemplate(layout) {
  const componentName = toPascalCase(layout.name);
  const fields = layout.sub_fields || [];
  const destructuring = fields.map(f => f.name).join(',\n    ');

  let output = `"use client";\n\n`;
  output += `import Image from "next/image";\n\n`;
  output += `/**\n * ${layout.label} Block\n`;
  output += ` * Auto-generated from ACF Layout: ${layout.name}\n */\n`;
  output += `export default function ${componentName}({ data }) {\n`;
  output += `  const {\n    ${destructuring}\n  } = data || {};\n\n`;
  output += `  if (data?.hide_block) return null;\n\n`;
  output += `  return (\n`;
  output += `    <section className="${layout.name} py-12 lg:py-24 relative overflow-hidden">\n`;
  output += `      <div className="container-fluid mx-auto px-4">\n`;
  output += `        {/* Block content starts here */}\n`;

  fields.forEach(field => {
    if (field.name === 'hide_block') return;
    const name = field.name;
    const label = field.label;

    if (name.includes('title') || name.includes('heading')) {
      output += `        {${name} && (\n`;
      output += `          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-black">\n`;
      output += `            {${name}}\n`;
      output += `          </h2>\n`;
      output += `        )}\n`;
    } else if (field.type === 'wysiwyg') {
      output += `        {${name} && (\n`;
      output += `          <div \n`;
      output += `            className="prose prose-lg max-w-none mb-8"\n`;
      output += `            dangerouslySetInnerHTML={{ __html: ${name} }}\n`;
      output += `          />\n`;
      output += `        )}\n`;
    } else if (field.type === 'image') {
      output += `        {${name}?.url && (\n`;
      output += `          <div className="relative aspect-video mb-8 overflow-hidden rounded-2xl shadow-xl">\n`;
      output += `            <Image\n`;
      output += `              src={${name}.url}\n`;
      output += `              alt={${name}.alt || "${label}"}\n`;
      output += `              fill\n`;
      output += `              className="object-cover"\n`;
      output += `              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"\n`;
      output += `            />\n`;
      output += `          </div>\n`;
      output += `        )}\n`;
    } else if (field.type === 'repeater') {
      const subFields = field.sub_fields || [];
      const firstTextField = subFields.find(sf => sf.type === 'text' || sf.type === 'textarea');

      if (firstTextField) {
        // Generate a simple list if there's a text field
        output += `        {${name} && ${name}.length > 0 && (\n`;
        output += `          <ul className="space-y-3 mt-6">\n`;
        output += `            {${name}.map((item, index) => (\n`;
        output += `              <li key={index} className="flex items-start gap-3">\n`;
        output += `                <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>\n`;
        output += `                <span className="text-gray-700">{item.${firstTextField.name}}</span>\n`;
        output += `              </li>\n`;
        output += `            ))}\n`;
        output += `          </ul>\n`;
        output += `        )}\n`;
      } else {
        // Fallback for complex repeaters
        output += `        {${name} && ${name}.length > 0 && (\n`;
        output += `          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">\n`;
        output += `            {${name}.map((item, index) => (\n`;
        output += `              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">\n`;
        output += `                {/* TODO: Customize ${name} item rendering */}\n`;
        output += `                <p className="text-sm text-gray-600">Item {index + 1}</p>\n`;
        output += `              </div>\n`;
        output += `            ))}\n`;
        output += `          </div>\n`;
        output += `        )}\n`;
      }
    } else if (field.type === 'link') {
      output += `        {${name}?.url && (\n`;
      output += `          <a \n`;
      output += `            href={${name}.url} \n`;
      output += `            target={${name}.target} \n`;
      output += `            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"\n`;
      output += `          >\n`;
      output += `            {${name}.title || "Discover More"}\n`;
      output += `            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>\n`;
      output += `          </a>\n`;
      output += `        )}\n`;
    }
  });

  output += `      </div>\n`;
  output += `    </section>\n`;
  output += `  );\n`;
  output += `}\n`;

  return output;
}

function generateBlockRenderer(blocks) {
  let imports = `"use client";\n\nimport dynamic from "next/dynamic";\nimport BlockErrorBoundary from "@/components/common/BlockErrorBoundary";\n\n`;
  let mapping = `const BLOCK_COMPONENTS = {\n`;

  // Deduplicate by layout name
  const uniqueBlocks = [];
  const seenLayouts = new Set();

  blocks
    .sort((a, b) => a.layout.localeCompare(b.layout))
    .forEach(block => {
      if (seenLayouts.has(block.layout)) return;
      seenLayouts.add(block.layout);
      uniqueBlocks.push(block);
    });

  uniqueBlocks.forEach(block => {
    const basename = path.basename(block.name, path.extname(block.name));
    const importPath = `@/components/blocks/${block.folder}/${basename}`;
    imports += `const ${basename} = dynamic(() => import("${importPath}"), { \n  loading: () => <div className="py-20 text-center animate-pulse bg-gray-50 rounded-xl m-4 border-2 border-dashed border-gray-200 text-gray-400 font-medium">Loading ${basename}...</div>\n});\n`;
    mapping += `  "${block.layout}": ${basename},\n`;
  });

  mapping += `};\n\n`;

  let component = `export default function BlockRenderer({ block, index }) {\n`;
  component += `  if (!block || block.hide_block) return null;\n\n`;
  component += `  const Component = BLOCK_COMPONENTS[block.acf_fc_layout];\n\n`;
  component += `  if (!Component) {\n`;
  component += `    if (process.env.NODE_ENV === "development") {\n`;
  component += `      return (\n`;
  component += `        <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 p-8 text-center m-4 rounded-xl">\n`;
  component += `          <p className="text-yellow-700 font-mono text-sm">Unknown Block Type: <strong>{block.acf_fc_layout}</strong></p>\n`;
  component += `          <p className="text-yellow-600 text-xs mt-2">Run <code>npm run sync-acf-blocks</code> to generate this component.</p>\n`;
  component += `        </div>\n`;
  component += `      );\n`;
  component += `    }\n`;
  component += `    return null;\n`;
  component += `  }\n\n`;
  component += `  return (\n`;
  component += `    <BlockErrorBoundary blockName={block.acf_fc_layout}>\n`;
  component += `      <Component data={block} key={block.id || index} />\n`;
  component += `    </BlockErrorBoundary>\n`;
  component += `  );\n`;
  component += `}\n`;

  return imports + '\n' + mapping + component;
}

// --- RUN SCRIPT ---

function sync() {
  console.log('🔄 Syncing ACF Components...');

  if (!fs.existsSync(ACF_JSON_DIR)) {
    ensureDirectoryExists(ACF_JSON_DIR);
  }

  // --- AUTO-SYNC FROM WORDPRESS THEME ---
  // If the WordPress theme path is valid, copy JSON files locally first
  const themeAcfPath = path.join(WORDPRESS_THEME_PATH, 'acf-json');
  if (fs.existsSync(themeAcfPath)) {
    console.log(`📂 Syncing JSON files from theme: ${themeAcfPath}`);
    const themeFiles = fs.readdirSync(themeAcfPath).filter(f => f.endsWith('.json'));
    themeFiles.forEach(file => {
      const src = path.join(themeAcfPath, file);
      const dest = path.join(ACF_JSON_DIR, file);
      fs.copyFileSync(src, dest);
    });
    console.log(`✓ Copied ${themeFiles.length} files.\n`);
  } else {
    console.warn(`⚠️ WORDPRESS_THEME_PATH not found or no acf-json folder: ${themeAcfPath}`);
  }

  const files = fs.readdirSync(ACF_JSON_DIR).filter(f => f.endsWith('.json'));
  const registeredBlocks = [];

  files.forEach(file => {
    try {
      const filePath = path.join(ACF_JSON_DIR, file);
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      if (!data.fields) return;

      data.fields.forEach(field => {
        if (field.type === 'flexible_content' && field.layouts) {
          const layouts = Object.values(field.layouts);

          layouts.forEach(layout => {
            const componentName = toPascalCase(layout.name);

            // 1. Check if component already exists anywhere in src/components/blocks
            const existing = findExistingComponent(componentName);

            if (existing) {
              registeredBlocks.push({
                layout: layout.name,
                name: componentName,
                folder: existing.folder,
              });
            } else {
              // 2. If not found, determine target folder and generate
              let targetFolder = 'common';
              const fileName = file.toLowerCase();
              const layoutName = layout.name.toLowerCase();

              for (const [key, folder] of Object.entries(FOLDER_MAPPING)) {
                if (fileName.includes(key) || layoutName.includes(key)) {
                  targetFolder = folder;
                  break;
                }
              }

              console.log(`+ Generating ${componentName} in ${targetFolder}...`);
              const content = generateComponentTemplate(layout);
              const targetPath = path.join(
                NEXTJS_COMPONENTS_DIR,
                targetFolder,
                `${componentName}.jsx`
              );

              ensureDirectoryExists(path.dirname(targetPath));
              fs.writeFileSync(targetPath, content);

              registeredBlocks.push({
                layout: layout.name,
                name: componentName,
                folder: targetFolder,
              });
            }
          });
        }
      });
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err.message);
    }
  });

  // Generate the BlockRenderer
  ensureDirectoryExists(path.dirname(REGISTRY_FILE));
  fs.writeFileSync(REGISTRY_FILE, generateBlockRenderer(registeredBlocks));

  console.log('✅ Sync complete!');
}

function run() {
  const isWatch = process.argv.includes('--watch');

  if (isWatch) {
    console.log('👀 Watch Mode Active: Listening for ACF JSON changes...');
    sync(); // Initial sync

    let timeout;
    fs.watch(ACF_JSON_DIR, { recursive: true }, (eventType, filename) => {
      if (filename && filename.endsWith('.json')) {
        // Debounce to prevent rapid multiple syncs
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          console.log(`\n📄 Detected change in ${filename}...`);
          sync();
        }, 100);
      }
    });
  } else {
    sync();
  }
}

run();
