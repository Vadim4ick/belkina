export const RUS_LETTERS = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('')

export function getSymbolLabel(count: number): string {
  const plural = new Intl.PluralRules('ru-RU').select(count)

  switch (plural) {
    case 'one':
      return `${count} символ`
    case 'few':
      return `${count} символа`
    default:
      return `${count} символов`
  }
}
