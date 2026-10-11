/**
 * Input validation helpers for Techmiya assessment and certification
 */

export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(email.trim());
}

export function isValidName(name: string): boolean {
  if (!name || typeof name !== "string") return false;
  return name.trim().length >= 2 && name.trim().length <= 70;
}

export function sanitizeText(text: string): string {
  if (!text) return "";
  // Strip tabs, newlines, and null bytes for safe TSV exports
  return text.replace(/[\t\r\n\0]/g, " ").trim();
}
