/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatUserAnswer(type: string, raw: any): string | string[] {
  if (type === 'multiple_choice' || type === 'single_choice') {
    return Array.isArray(raw) ? raw.map(String) : [String(raw)]
  }
  return typeof raw === 'string' ? raw : String(raw)
}
