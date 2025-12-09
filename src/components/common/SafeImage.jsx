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

  const isLocal = src?.includes("localhost") || src?.includes("127.0.0.1");

  return <Image src={src} alt={alt || ""} unoptimized={isLocal} {...props} />;
}
