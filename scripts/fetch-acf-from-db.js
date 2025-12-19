const fs = require('fs');
const path = require('path');

/**
 * Sync ACF JSON files from WordPress theme to Next.js project
 * Simple file copy approach - most reliable method
 */

const WORDPRESS_ACF_JSON = '/Applications/XAMPP/xamppfiles/htdocs/nextjs-wp/wp-content/themes/nextjswp-theme/acf-json';
const NEXTJS_ACF_JSON = path.join(process.cwd(), 'acf-json');

function syncACFJSON() {
    console.log('🔄 Syncing ACF JSON files from WordPress theme...');
    console.log(`📂 Source: ${WORDPRESS_ACF_JSON}`);
    console.log(`📂 Target: ${NEXTJS_ACF_JSON}\n`);

    // Check if WordPress ACF JSON folder exists
    if (!fs.existsSync(WORDPRESS_ACF_JSON)) {
        console.error('❌ WordPress ACF JSON folder not found!');
        console.error(`💡 Expected location: ${WORDPRESS_ACF_JSON}`);
        console.error('💡 Make sure ACF is saving JSON files in your WordPress theme');
        process.exit(1);
    }

    // Create Next.js ACF JSON folder if it doesn't exist
    if (!fs.existsSync(NEXTJS_ACF_JSON)) {
        fs.mkdirSync(NEXTJS_ACF_JSON, { recursive: true });
        console.log('✓ Created acf-json directory\n');
    }

    // Get all JSON files from WordPress
    const files = fs.readdirSync(WORDPRESS_ACF_JSON).filter(f => f.endsWith('.json'));

    if (files.length === 0) {
        console.log('⚠️  No ACF JSON files found in WordPress theme');
        console.log('💡 Add or update a field group in WordPress to generate JSON files');
        return;
    }

    console.log(`📦 Found ${files.length} ACF JSON file(s):\n`);

    // Copy each file
    let copied = 0;
    let skipped = 0;

    files.forEach(file => {
        const sourcePath = path.join(WORDPRESS_ACF_JSON, file);
        const targetPath = path.join(NEXTJS_ACF_JSON, file);

        try {
            const sourceContent = fs.readFileSync(sourcePath, 'utf8');
            const sourceData = JSON.parse(sourceContent);

            // Check if file exists and is identical
            if (fs.existsSync(targetPath)) {
                const targetContent = fs.readFileSync(targetPath, 'utf8');
                if (sourceContent === targetContent) {
                    console.log(`  ⏭️  ${file} (no changes)`);
                    skipped++;
                    return;
                }
            }

            // Copy file
            fs.copyFileSync(sourcePath, targetPath);
            console.log(`  ✓ ${file} (${sourceData.title || 'Unknown'})`);
            copied++;
        } catch (err) {
            console.error(`  ✗ ${file}: ${err.message}`);
        }
    });

    console.log(`\n✅ Sync complete! ${copied} copied, ${skipped} skipped`);

    if (copied > 0) {
        console.log('💡 Run "npm run sync-acf-blocks" to generate React components');
    }
}

syncACFJSON();
