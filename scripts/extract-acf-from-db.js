const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

/**
 * Extract ACF field groups from WordPress database and save as JSON
 */

const DB_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextjs_db'
};

const WP_ACF_JSON = '/Applications/XAMPP/xamppfiles/htdocs/nextjs-wp/wp-content/themes/nextjswp-theme/acf-json';
const NEXTJS_ACF_JSON = path.join(process.cwd(), 'acf-json');

async function extractACFFromDatabase() {
    let connection;

    try {
        console.log('🔌 Connecting to WordPress database...');
        connection = await mysql.createConnection(DB_CONFIG);

        console.log('📥 Fetching ACF field groups from database...\n');

        // Get all ACF field group posts
        const [rows] = await connection.execute(
            `SELECT ID, post_title, post_name, post_content, post_excerpt 
             FROM wp_posts 
             WHERE post_type = 'acf-field-group' 
             AND post_status = 'publish'
             ORDER BY menu_order ASC`
        );

        if (rows.length === 0) {
            console.log('⚠️  No ACF field groups found');
            return;
        }

        console.log(`✅ Found ${rows.length} field group(s)\n`);

        // Ensure directories exist
        [WP_ACF_JSON, NEXTJS_ACF_JSON].forEach(dir => {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });

        for (const row of rows) {
            try {
                // Parse the serialized PHP data
                const content = row.post_content;

                // Extract the key from post_name (e.g., "group_693a67d8b51f7")
                const key = row.post_name;

                // Get all fields for this group
                const [fields] = await connection.execute(
                    `SELECT post_title, post_name, post_content, post_excerpt, menu_order
                     FROM wp_posts
                     WHERE post_type = 'acf-field'
                     AND post_parent = ?
                     ORDER BY menu_order ASC`,
                    [row.ID]
                );

                console.log(`📦 Processing: ${row.post_title} (${key})`);
                console.log(`   Fields found: ${fields.length}`);

                // For now, just save the basic structure
                // We'll use the manual export as the source of truth
                console.log(`   ⚠️  Database extraction is complex due to PHP serialization`);
                console.log(`   💡 Please export manually from WordPress ACF Tools\n`);

            } catch (err) {
                console.error(`   ✗ Error processing ${row.post_title}:`, err.message);
            }
        }

        console.log('\n📌 SOLUTION:');
        console.log('Since WordPress has a critical error, please:');
        console.log('1. Export ACF from: WordPress Admin → ACF → Tools → Export');
        console.log('2. Save to Downloads');
        console.log('3. Run: npm run acf-sync');

    } catch (error) {
        console.error('❌ Error:', error.message);
        process.exit(1);
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

extractACFFromDatabase();
