const fs = require('fs');
const path = require('path');

/**
 * Import ACF JSON export from Downloads and sync
 * Usage: npm run import-acf
 */

const DOWNLOADS_PATH = '/Users/chetandhargalkar/Downloads';
const ACF_JSON_DIR = path.join(process.cwd(), 'acf-json');

function importACFExport() {
    console.log('📥 Looking for ACF export in Downloads...\n');

    // Find the most recent ACF export file
    const files = fs.readdirSync(DOWNLOADS_PATH)
        .filter(f => f.startsWith('acf-export-') && f.endsWith('.json'))
        .map(f => ({
            name: f,
            path: path.join(DOWNLOADS_PATH, f),
            mtime: fs.statSync(path.join(DOWNLOADS_PATH, f)).mtime
        }))
        .sort((a, b) => b.mtime - a.mtime);

    if (files.length === 0) {
        console.error('❌ No ACF export files found in Downloads');
        console.error('💡 Export from WordPress: ACF → Tools → Export Field Groups');
        process.exit(1);
    }

    const latestFile = files[0];
    console.log(`✓ Found: ${latestFile.name}`);
    console.log(`  Modified: ${latestFile.mtime.toLocaleString()}\n`);

    try {
        // Read and parse the export
        const content = fs.readFileSync(latestFile.path, 'utf8');
        const data = JSON.parse(content);

        // Check if it's an array (WordPress export format)
        const fieldGroups = Array.isArray(data) ? data : [data];

        // Ensure acf-json directory exists
        if (!fs.existsSync(ACF_JSON_DIR)) {
            fs.mkdirSync(ACF_JSON_DIR, { recursive: true });
        }

        console.log(`📦 Processing ${fieldGroups.length} field group(s):\n`);

        // Save each field group
        fieldGroups.forEach(group => {
            const fileName = `${group.key}.json`;
            const filePath = path.join(ACF_JSON_DIR, fileName);

            fs.writeFileSync(filePath, JSON.stringify(group, null, 2));
            console.log(`  ✓ ${fileName} (${group.title})`);
        });

        console.log('\n✅ Import complete!');
        console.log('💡 Components will be generated automatically...\n');

    } catch (err) {
        console.error('❌ Error:', err.message);
        process.exit(1);
    }
}

importACFExport();
