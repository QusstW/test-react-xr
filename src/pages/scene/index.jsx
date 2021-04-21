import React, { useEffect, useState } from 'react'
import { Canvas, useResource } from 'react-three-fiber'

import Camera from '../../components/Camera'
import Computer from './extra/Computer'
import ElementsModal from '../../components/modals/ElementsModal'

import useComputer from '../../hooks/useComputer'
import CategoryMenu from './extra/CategoryMenu'

export default function SceneScreen() {
  const camera = useResource()

  const { selectedBox, selectedElements } = useComputer()
  const [computerPosition, setComputerPosition] = useState([0, 0, 0])

  const [modal, setModal] = useState(false)
  const [hasBoxMode, setBoxMode] = useState(!selectedBox)
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleCloseModal = () => {
    if (hasBoxMode) setBoxMode(false)
    if (selectedCategory) setSelectedCategory(null)
    setModal(false)
  }

  const handleSelectCategory = (category) => {
    setSelectedCategory(category)
    setModal(true)
  }

  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 2e3)
  }, [])

  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <Camera ref={camera} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Computer
          position={computerPosition}
          elements={selectedElements}
          box={selectedBox}
          onComputerPress={() => setModal(true)}
        />
      </Canvas>
      <ElementsModal
        isOpen={modal}
        onClose={handleCloseModal}
        hasBox={hasBoxMode}
        selectedCategory={selectedCategory}
      />
      <CategoryMenu onSelect={handleSelectCategory} />
    </>
  )
}
