import { useMemo } from 'react'
import { CATEGORIES } from '../constants'

/**
 * Принимает id выбранной категории
 * Ищет объект в масииве константы CATEGORIES с id === id который пришёл в пропсах
 * возвращает этот объект
 * Вызывается каждый раз, когда меняется получаенная category в пропсах(id текущей категории)
 */
export default function useElementsCategory(category) {
  return useMemo(() => {
    if (category) {
      return CATEGORIES.find((c) => c.id === category)
    }

    return null
  }, [category])
}
