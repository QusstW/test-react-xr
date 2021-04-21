import React from 'react'

import { ComputerContext } from '../providers/ComputerProvider'

export default function useComputerHoook() {
  return React.useContext(ComputerContext)
}
