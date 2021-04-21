import React from 'react'

import { Dropdown } from 'react-bootstrap'

import { CATEGORIES } from '../../../constants'

export default function CategoryMenu({ onSelect }) {
  return (
    <Dropdown style={{ position: 'fixed', bottom: 20, left: 20 }}>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Элементы
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {CATEGORIES.map((c, index) => (
          <Dropdown.Item key={index} onClick={() => onSelect(c.id)}>
            {c.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
