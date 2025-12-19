# ACF Block Development Guide

## Overview

This document explains how ACF (Advanced Custom Fields) blocks are synchronized between WordPress and Next.js, and how to customize auto-generated components.

---

## Workflow Summary

### 1. **Create/Edit Blocks in WordPress**

- Go to **ACF → Field Groups** in WordPress Admin
- Edit the "Home Page Blocks" field group (or create new ones)
- Add/modify flexible content layouts (blocks)
- Each layout becomes a React component in Next.js

### 2. **Export ACF Field Groups**

- Go to **ACF → Tools → Export Field Groups**
- Select the field group(s) you modified
- **Uncheck "Generate PHP"**
- Click **"Export File"** (saves to Downloads folder)

### 3. **Sync to Next.js**

```bash
npm run acf-sync
```

This command:

- ✅ Finds the latest ACF export in your Downloads
- ✅ Converts it to individual JSON files in `acf-json/`
- ✅ Generates React components in `src/components/blocks/`
- ✅ Updates `BlockRenderer.jsx` to register new blocks

---

## Auto-Generated Components

When you run `npm run acf-sync`, the script automatically generates React components based on your ACF field definitions.

### Default Component Structure

Auto-generated components follow this pattern:

```jsx
"use client";

import Image from "next/image";

export default function BlockName({ data }) {
  const { field_name_1, field_name_2 } = data || {};

  if (data?.hide_block) return null;

  return (
    <section className="block_name py-12 lg:py-24">
      <div className="container-fluid mx-auto px-4">
        {/* Placeholder: JSON dump of data */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}
```

### ⚠️ Important: Auto-Generated Components Are Placeholders

**The auto-generated components display raw JSON data by default.** This is intentional - they serve as starting points that you must customize with proper UI implementation.

---

## Customizing Auto-Generated Components

### Example: HomeSliderBlock

**ACF Field Structure:**

```json
{
  "name": "home_slider_block",
  "sub_fields": [
    {
      "name": "slider_items",
      "type": "repeater",
      "sub_fields": [
        {
          "name": "title",
          "type": "text"
        }
      ]
    }
  ]
}
```

**Auto-Generated (Placeholder):**

```jsx
export default function HomeSliderBlock({ data }) {
  const { slider_items } = data || {};

  return (
    <section>
      <pre>{JSON.stringify(slider_items, null, 2)}</pre>
    </section>
  );
}
```

**Customized (Proper UI):**

```jsx
export default function HomeSliderBlock({ data }) {
  const { slider_items } = data || {};

  if (data?.hide_block) return null;
  if (!slider_items || slider_items.length === 0) return null;

  return (
    <section className="home_slider_block py-12 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-fluid mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {slider_items.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-100 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-1 h-16 bg-gradient-to-b from-red-600 to-red-400 rounded-tl-2xl rounded-bl-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {item.title || `Slide ${index + 1}`}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Common ACF Field Types & How to Handle Them

### Text Field

```jsx
const { title } = data || {};
<h2>{title}</h2>;
```

### WYSIWYG Field

```jsx
const { description } = data || {};
<div dangerouslySetInnerHTML={{ __html: description }} />;
```

### Image Field (Array Format)

```jsx
const { image } = data || {};
{
  image?.url && (
    <Image
      src={image.url}
      alt={image.alt || ""}
      width={image.width}
      height={image.height}
    />
  );
}
```

### Repeater Field

```jsx
const { items } = data || {};
{
  items?.map((item, index) => (
    <div key={index}>
      <h3>{item.title}</h3>
    </div>
  ));
}
```

### Link Field

```jsx
const { cta } = data || {};
{
  cta?.url && (
    <a href={cta.url} target={cta.target || "_self"}>
      {cta.title}
    </a>
  );
}
```

---

## File Locations

### WordPress

- **ACF Field Groups**: `wp-admin/edit.php?post_type=acf-field-group`
- **Theme ACF JSON**: `/wp-content/themes/nextjswp-theme/acf-json/` (not auto-populated with ACF Free)
- **Functions**: `/wp-content/themes/nextjswp-theme/functions.php`

### Next.js

- **ACF JSON Files**: `/acf-json/`
- **Block Components**: `/src/components/blocks/common/` or `/src/components/blocks/home/`
- **Block Renderer**: `/src/components/common/BlockRenderer.jsx`
- **Sync Scripts**: `/scripts/`
  - `import-acf-export.js` - Imports from Downloads
  - `sync-acf-blocks.js` - Generates components
- **Documentation**:
  - `ACF_SYNC.md` - Quick sync workflow
  - `ACF_BLOCK_DEVELOPMENT.md` - This file

---

## Troubleshooting

### "Unknown Block Type" Error

**Cause**: The page content references a block that doesn't exist in the field group or hasn't been synced.

**Solution**:

1. Check if the block exists in WordPress ACF field group
2. If you deleted the block from the field group, also remove it from the page content in WordPress
3. Run `npm run acf-sync` to update Next.js

### Raw JSON Displaying Instead of UI

**Cause**: The auto-generated component hasn't been customized yet.

**Solution**:

1. Open the component file in `/src/components/blocks/`
2. Replace the `<pre>{JSON.stringify(...)}</pre>` with proper JSX/UI
3. Refer to the field structure in `/acf-json/group_*.json` to understand available data

### ACF JSON Not Auto-Saving in WordPress

**Cause**: ACF Free doesn't reliably auto-save JSON files to the theme folder.

**Solution**: Use the manual export workflow (documented in `ACF_SYNC.md`)

---

## Best Practices

### 1. **Always Sync After WordPress Changes**

```bash
# After exporting from WordPress
npm run acf-sync
```

### 2. **Customize Components Immediately**

Don't leave auto-generated placeholders in production. Replace JSON dumps with proper UI.

### 3. **Use Consistent Naming**

- ACF layout name: `home_slider_block`
- Component file: `HomeSliderBlock.jsx`
- Component name: `HomeSliderBlock`

### 4. **Handle Empty States**

```jsx
if (!data || !items?.length) return null;
```

### 5. **Add Fallback Content**

```jsx
{
  item.title || "Untitled";
}
{
  image?.alt || "Image";
}
```

### 6. **Respect hide_block Flag**

```jsx
if (data?.hide_block) return null;
```

---

## Component Styling Guidelines

### Use Tailwind CSS Classes

```jsx
className = "py-12 lg:py-24 bg-gray-50";
```

### Add Hover Effects

```jsx
className = "hover:shadow-xl transition-all duration-300";
```

### Use Brand Colors

- Primary Red: `text-red-600`, `bg-red-600`
- Gradients: `from-red-600 to-red-400`

### Responsive Design

```jsx
className = "grid gap-6 md:grid-cols-2 lg:grid-cols-3";
```

---

## Quick Reference Commands

```bash
# Full sync (import from Downloads + generate components)
npm run acf-sync

# Only generate components from existing JSON
npm run sync-acf-blocks

# Import from Downloads without generating
npm run import-acf
```

---

## Related Documentation

- [ACF_SYNC.md](./ACF_SYNC.md) - Quick sync workflow
- [WordPress ACF Documentation](https://www.advancedcustomfields.com/resources/)
- [Next.js Image Component](https://nextjs.org/docs/api-reference/next/image)
