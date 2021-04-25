import React, { useMemo } from 'react'
import { CATEGORIES } from '../constants'

export default function useElementsCategory(category) {
  return useMemo(() => {
    if (category) {
      return CATEGORIES.find((c) => c.id === category)
    }

    return null
  }, [category])
}
