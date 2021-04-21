import React, { useEffect, useState, useMemo } from 'react'
import Modal from 'react-bootstrap/Modal'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

import useComputer from '../../hooks/useComputer'

import { CATEGORIES, ELEMENTS, BOXES } from '../../constants'

const ElementsModal = ({
  isOpen,
  onClose,
  hasBox = true,
  selectedCategory = 'processor'
}) => {
  const { selectedElements, toggleElement, selectedBox, setBox } = useComputer()

  const [show, setShow] = useState(false)

  const selectedCategoryObj = useMemo(() => {
    if (selectedCategory) {
      return CATEGORIES.find((c) => c.id === selectedCategory)
    }

    return null
  }, [selectedCategory])

  useEffect(() => {
    if (isOpen) setShow(true)
  }, [isOpen])

  const handleClose = () => {
    setShow(false)
    onClose()
  }

  const renderBoxes = () => {
    return (
      <Row>
        {BOXES.map((box, index) => {
          const isSelectedBox = selectedBox && box.id === selectedBox.id
          return (
            <Col
              key={`col${index}`}
              xs={6}
              md={4}
              onClick={() => setBox(box.id)}
              style={{ backgroundColor: isSelectedBox && 'green' }}
            >
              <Image src={box.image} rounded style={{ width: '150px' }} />
              <div>{box.name}</div>
            </Col>
          )
        })}
      </Row>
    )
  }

  const renderCategoryElements = (category) => {
    const categoryElements = ELEMENTS.filter(
      (model) => model.type === category.id
    )

    return categoryElements.map((el, index) => {
      const isSelectedElement =
        selectedElements.map((v) => v.type).indexOf(el.type) !== -1
      return (
        <Col
          key={`col${index}`}
          xs={6}
          md={4}
          onClick={() => toggleElement(el.id)}
          style={{ backgroundColor: isSelectedElement && 'green' }}
        >
          <Image src={el.image} rounded style={{ width: '150px' }} />
          <div>{el.name}</div>
        </Col>
      )
    })
  }

  const renderCategories = () => {
    return CATEGORIES.map((category, index) => {
      if (
        (selectedCategory && selectedCategory === category.id) ||
        !selectedCategory
      ) {
        return (
          <div key={`block${index}`}>
            {!selectedCategory && <h5>{category.name}</h5>}
            <Row>{renderCategoryElements(category)}</Row>
          </div>
        )
      }
      return null
    })
  }

  const title = () => {
    if (hasBox) return 'Выбор коробки'
    if (selectedCategory) return selectedCategoryObj.name
    return 'Выберите комплектующие'
  }

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        backdrop={(hasBox && selectedBox) || !hasBox}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title()}</Modal.Title>
        </Modal.Header>
        {isOpen && (
          <Modal.Body>
            <Container>{hasBox ? renderBoxes() : renderCategories()}</Container>
          </Modal.Body>
        )}
      </Modal>
    </>
  )
}

export default ElementsModal
