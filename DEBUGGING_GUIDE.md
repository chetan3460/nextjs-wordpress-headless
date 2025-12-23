# Debugging Missing Blocks: A Step-by-Step Guide

This guide documents the exact process used to diagnose and fix the "No content blocks found" issue on the Contact Us page. Follow these steps if you encounter similar issues with other pages.

## 1. Identify the Problem

**Symptom:** The page loads, but displays a message like "No content blocks found" even though you added content in WordPress.
**Likely Cause:** The Next.js code is looking for a specific field name (e.g., `contact_page_blocks`) that doesn't match what WordPress is sending.

## 2. Inspect the Data (The "X-Ray")

To see what WordPress is _actually_ returning, add temporary logs to your page file (`src/app/contact-us/page.js`):

```javascript
export default async function Page() {
  const pageData = await fetchPageWithACF("contact-us");

  // ADD THIS:
  console.log("ACF Data:", pageData.acf);

  // ... rest of code
}
```

**Check Terminal Output:**

- If `acf` is `null` or empty: Use `sync-acf-blocks` to ensure your JSON is up to date.
- If `acf` has data but with a different name (e.g., `contact_panels` instead of `contact_page_blocks`), that's your mismatch!

## 3. Sync the Definitions

Often, the local code is outdated compared to the WordPress database.

- **Run:** `npm run sync-acf-blocks`
- **Verify:** Check `acf-json/` folder. Do you see the new group file from your theme?

## 4. Fix the Mismatch

Once you know the _real_ field name from Step 2 or by reading the JSON file:

1.  **Open** the page component (e.g., `src/app/contact-us/page.js`).
2.  **Update** the variable to match the JSON.

    ```javascript
    // Old (Wrong)
    const blocks = acf?.contact_page_blocks || [];

    // New (Right)
    const blocks = acf?.contact_panels || [];
    ```

## 5. Verify Component Mapping

Finally, ensure the Block itself is registered.

1.  Open `src/components/common/BlockRenderer.jsx`.
2.  Look for the layout name (e.g., `get_in_touch_block`).
3.  Ensure it maps to a valid component import.

```javascript
const BLOCK_COMPONENTS = {
  get_in_touch_block: GetInTouchBlock,
  // ...
};
```

## Summary Checklist

- [ ] **Sync**: Run `npm run sync-acf-blocks`.
- [ ] **Inspect**: Check `acf-json` or logs for the correct Flexible Content field name.
- [ ] **Update**: Change the page code to use that exact field name.
- [ ] **Render**: Ensure `BlockRenderer` knows about the block layout.
