/**
 * SafeHTML Component
 * Handles rendering of HTML content from WordPress with specific features:
 * 1. Safe rendering (dangerouslySetInnerHTML equivalent)
 * 2. Auto-Paragraphs: Wraps plain text lines in <p> tags if missing
 * 3. Applies styling to generated paragraphs
 */
export default function SafeHTML({ html, className = "", as = "div" }) {
  if (!html) return null;

  // Process the HTML content
  const processedHTML = html.includes("<p>")
    ? html
    : html
        .split(/\r\n|\r|\n/g) // Split by any newline char
        .filter((line) => line.trim() !== "") // Remove empty lines
        .map((line) => `<p>${line}</p>`) // Wrap each line in <p>
        .join(""); // Join back together

  const Wrapper = as;

  return (
    <Wrapper
      className={`safe-html-content ${className}`}
      dangerouslySetInnerHTML={{ __html: processedHTML }}
    />
  );
}
