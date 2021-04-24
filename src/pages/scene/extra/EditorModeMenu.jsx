import React from 'react'

import { Dropdown } from 'react-bootstrap'

import { EDIT_MODES } from '../../../constants'

export default function EditorModeMenu({ setEditMode }) {
  return (
    <Dropdown style={{ position: 'fixed', top: 80, left: 20 }}>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        Режим редактирования
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {EDIT_MODES.map((m, index) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              setEditMode(m.value)
            }}
          >
            {m.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}
