import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

const COMPUTER_CASES = [
  {
    id: 1,
    name: "Корпус Аквамарин",
    image: "./assets/images/ComputerCases/1.jpeg",
    data: {
      object: "./assets/models/MainCase.glb",
    },
  },
  {
    id: 2,
    name: "Корпус Изумруд",
    image: "./assets/images/ComputerCases/asd.jpg",
    data: {
      object: "./assets/models/TesTTT.glb",
    },
  },
  {
    id: 3,
    name: "Корпус Бриллиант",
    image: "./assets/images/ComputerCases/dsa.jpg",
  },
];

const ComputerCaseModal = ({ clicked, useModels, setAddedCase }) => {
  const [show, setShow] = useState(false);
  const [selectedComputerCase, setSelectedComputerCase] = useModels();

  const handleToggleModel = (currentCase) => {
    const currentModel = currentCase.data.object;
    setSelectedComputerCase(currentModel);
    setAddedCase(true)
  };

  useEffect(() => {
    if (clicked) {
      setShow(true);
    }
  }, [clicked]);

  const handleClose = () => {
    setShow(false);
  };

  const renderCategories = () => {
    return COMPUTER_CASES.map((category, index) => (
      <>
        <h5 key={index}>{category.name}</h5>
        <Col
          xs={6}
          md={4}
          onClick={() => {
            handleToggleModel(category);
          }}
        >
          <Image src={category.image} rounded style={{ width: "150px" }} />
        </Col>
      </>
    ));
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>{renderCategories()}</Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ComputerCaseModal;
