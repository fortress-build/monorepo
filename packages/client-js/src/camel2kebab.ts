export function camelToKebab(str: string): string {
  return (
    str
      // Add hyphen before capital letters
      .replace(/([A-Z])/g, '-$1')
      // Convert to lowercase
      .toLowerCase()
      // Remove hyphen from start if present
      .replace(/^-/, '')
  );
}
