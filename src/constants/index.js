import categories from './categories'
import elements from './elements'
import boxes from './boxes'
import editModes from './editModes'
import notify from './notify'

export { hasViewMode, hasDragMode, hasScaleMode } from './editModes'
export const CATEGORIES = categories
export const ELEMENTS = elements
export const BOXES = boxes
export const EDIT_MODES = editModes
export const NOTIFY = notify

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  CATEGORIES,
  ELEMENTS,
  BOXES,
  EDIT_MODES,
  NOTIFY
}
