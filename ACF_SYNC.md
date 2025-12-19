# ACF Sync Workflow

## Quick Start

Whenever you add or modify ACF blocks in WordPress:

1. **Export from WordPress:**

   - Go to: **ACF → Tools → Export Field Groups**
   - Select the field groups you want
   - Uncheck "Generate PHP"
   - Click "Export File" (saves to Downloads)

2. **Sync to Next.js:**
   ```bash
   npm run acf-sync
   ```

That's it! The script will:

- ✅ Find the latest ACF export in your Downloads
- ✅ Convert it to the correct format
- ✅ Generate React components
- ✅ Register them in BlockRenderer

## Available Commands

- `npm run acf-sync` - Full sync (import + generate components)
- `npm run import-acf` - Import ACF JSON from Downloads
- `npm run sync-acf-blocks` - Generate components from existing JSON

## Troubleshooting

**"No ACF export files found"**

- Make sure you've exported from WordPress ACF Tools
- Check that the file is in your Downloads folder
- File should be named like `acf-export-2025-12-19.json`

**"Unknown Block Type" error**

- Run `npm run acf-sync` to sync the latest changes
- Make sure you exported the correct field group
- Check that the block name matches in WordPress

## How It Works

1. WordPress ACF exports field groups as JSON
2. `import-acf-export.js` finds and processes the export
3. `sync-acf-blocks.js` generates React components
4. `BlockRenderer.jsx` is updated with new block mappings
