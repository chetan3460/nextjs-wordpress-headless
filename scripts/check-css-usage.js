const fs = require('fs');
const path = require('path');

// Configuration
const cssDir = 'src/app/css';
const srcDir = 'src';

// Helper to recursively get all CSS files
function getAllFiles(dirPath, ext, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, ext, arrayOfFiles);
        } else {
            if (file.endsWith(ext)) {
                arrayOfFiles.push(path.join(dirPath, file));
            }
        }
    });

    return arrayOfFiles;
}

// Helper to recursively search content in files
function searchInDir(dir, pattern, excludeFile) {
    if (!fs.existsSync(dir)) return false;

    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            if (searchInDir(filePath, pattern, excludeFile)) return true;
        } else {
            // Skip the file itself
            if (filePath === excludeFile) continue;

            // Only check JS/JSX/TS/TSX/CSS files for imports/usage
            if (/\.(js|jsx|ts|tsx|css|scss)$/.test(file)) {
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    // Check for full filename match or partial match for imports
                    // e.g. 'custom/pages/_contact.css' might be imported as just '_contact.css' or 'contact.css' if path is relative

                    // Simple check: does the filename exist in the content?
                    const filename = path.basename(excludeFile);
                    if (content.includes(filename)) return true;

                    // Also check for import path without extension if it's not starting with _ (often imported directly)
                    // But usually CSS imports include extension in Next.js
                } catch (err) {
                    // ignore read errors
                }
            }
        }
    }
    return false;
}

const cssFiles = getAllFiles(cssDir, '.css');

console.log(`Found ${cssFiles.length} CSS files. Checking usage...\n`);

const unusedFiles = [];
const usedFiles = [];

cssFiles.forEach(file => {
    const isUsed = searchInDir(srcDir, path.basename(file), file);
    if (isUsed) {
        usedFiles.push(file);
    } else {
        unusedFiles.push(file);
    }
});

console.log('--- POTENTIALLY UNUSED FILES (' + unusedFiles.length + ') ---');
unusedFiles.forEach(f => console.log(f));

console.log('\n--- USED FILES (' + usedFiles.length + ') ---');
usedFiles.forEach(f => console.log(f));
