/**
 * Safe Image component wrapper
 * Only renders if src is valid (not empty, null, or undefined)
 */
import Image from "next/image";

export default function SafeImage({ src, alt, ...props }) {
  // Don't render if src is invalid
  if (!src || src === "" || src === null || src === undefined) {
    return null;
  }

  return <Image src={src} alt={alt || ""} {...props} />;
}
