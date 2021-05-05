import { useThree } from 'react-three-fiber'
import { useDrag } from 'react-use-gesture'

export default function useCustonDrag({ hasDragMode, usePosition }) {
  console.log('here')
  const { size, viewport } = useThree()
  const aspect = size.width / viewport.width
  const [position, setPosition] = usePosition

  return useDrag(
    ({ offset: [x, y] }) => {
      if (hasDragMode) {
        const [, , z] = position
        setPosition([x / aspect, -y / aspect, z])
      }
    },
    { pointerEvents: true }
  )
}
