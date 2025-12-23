# ACF Flexible Content Workflow: The Golden Rules

Follow this guide every time you create a new page with flexible blocks. This standard prevents mismatches and missing content.

## 1. WordPress Admin: Naming Convention

When creating a Field Group for a page (e.g., "Services Page"), follow this strict pattern:

1.  **Field Group Title:** `Services Page Blocks`
2.  **Field Name (The Container):**

    - **Label:** `Page Panels` (or `Services Panels`)
    - **Name:** `services_panels` (Use `_panels` suffix!)
    - **Type:** `Flexible Content`

    > **Why `_panels`?** It clearly distinguishes the _container_ of blocks from the blocks themselves.

3.  **Layouts (The Blocks):**
    - Name them descriptively: `services_hero_block`, `pricing_block`.
    - **Do not** use generic names like "text" or "image".

## 2. Syncing: The Bridge

After saving in WordPress:

1.  **Run Sync:**
    ```bash
    npm run sync-acf-blocks
    ```
    - This copies the JSON from the theme to your Next.js project.
    - It auto-generates the React component (e.g., `PricingBlock.jsx`) if it doesn't exist.
    - It updates `BlockRenderer.jsx`.

## 3. Next.js Page Setup

Create your page file (e.g., `src/app/services/page.js`) using this template. Notice how the variable matches your field name from Step 1!

```javascript
import { fetchPageWithACF } from "@/lib/wordpress/client";
import BlockRenderer from "@/components/common/BlockRenderer";

export default async function ServicesPage() {
  const pageData = await fetchPageWithACF("services");
  if (!pageData) return null;

  // MATCH THIS NAME TO YOUR ACF FIELD NAME:
  const blocks = pageData.acf?.services_panels || [];

  return (
    <main>
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </main>
  );
}
```

## 4. Verification Checklist

Before finishing, ask these 3 questions:

1.  [ ] Did I use `Flexible Content` type? (Not Group or Repeater)
2.  [ ] Does my page code variable (`services_panels`) match the ACF field name exactly?
3.  [ ] Did I run `npm run sync-acf-blocks`?

If all 3 are YES, your page will work perfectly every time.
