/* eslint-disable @typescript-eslint/no-explicit-any */
export function formatUserAnswer(
  type: 'single_choice' | 'multiple_choice' | 'text_input' | 'matching',
  raw: any,
): string | string[] {
  if (type === 'multiple_choice' || type === 'single_choice' || type === 'text_input') {
    return Array.isArray(raw) ? raw.map(String) : [String(raw)]
  }

  if (type === 'matching') {
    // допустим, raw — объект вроде { A: '1', B: '3' }
    // ты можешь сохранить это как JSON-строку или как строку формата "A1 B3"
    return JSON.stringify(raw)
  }

  // single_choice и text_input → строка
  return typeof raw === 'string' ? raw : String(raw)
}
