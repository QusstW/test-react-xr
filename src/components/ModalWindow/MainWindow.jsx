import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const CATEGORIES = [
  {
    id: "mother",
    name: "Материнские платы",
  },
  {
    id: "videocard",
    name: "Видекарты",
  },
  {
    id: "processor",
    name: "Процессоры"
  },
  {
    id: "powerSupply",
    name: "Блоки питания"
  },

];

const MODELS = [
  {
    id: 1,
    type: "mother",
    name: "Материнская плата",
    image: "./assets/images/MotherBoard.jpg",
    data: {
      object: "./assets/models/MotherBoard.glb",
      scale: 5,
    },
  },
  {
    id: 2,
    type: "videocard",
    name: "Видеокарта",
    image: "./assets/images/VideoCard.jpg",
    data: {
      object: "./assets/models/rtx2080ti.glb",
      scale: 5,
    },
  },
  {
    id: 3,
    type: "processor",
    name: "Процессор",
    image: "./assets/images/Processor.jpeg",
    data: {
      object: "./assets/models/Processor.glb",
      scale: 5,
    },
  },
  {
    id: 4,
    type: "powerSupply",
    name: "Блок питания",
    image: "./assets/images/PowerSupy.jpg",
    data: {
      object: "./assets/models/PowerSupply.glb",
      scale: 5,
    },
  },
];

const MainWindow = ({ subjectId, onClose, useModels }) => {
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState(null);

  const [selectedModels, setSelectedModels] = useModels();

  const handleToggleModel = (selectedModel) => {
    const { id } = selectedModel;
    setSelectedModels((v) => {
      const index = v.map((model) => model.id).indexOf(id);
      return index !== -1
        ? v.filter((model) => model.id !== id)
        : [...v, selectedModel];
    });
  };

  useEffect(() => {
    if (subjectId) {
      setShow(true);
    }
  }, [subjectId]);

  const handleClose = () => {
    setShow(false);
    setSubject(null);
    onClose();
  };

  const renderCategoryModels = (category) => {
    const categoryModels = MODELS.filter(
      (model) => model.type === category.id
    );

    return categoryModels.map((model) => {
      const isSelectedModel =
        selectedModels.map((v) => v.type).indexOf(model.type) !== -1;
      return (
        <Col
          xs={6}
          md={4}
          onClick={() => handleToggleModel(model)}
          style={{ backgroundColor: isSelectedModel && "green" }}
        >
          <Image src={model.image} rounded style={{ width: "150px" }} />
          <div>{model.name}</div>
        </Col>
      );
    });
  };

  const renderCategories = () => {
    return CATEGORIES.map((category, index) => (
      <>
        <h5 key={index}>{category.name}</h5>
        <Row>
          {renderCategoryModels(category)}
        </Row>
      </>
    ));
  }

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Выберите комплектующие для установки</Modal.Title>
        </Modal.Header>
        {subjectId && (
          <Modal.Body>
            <Container>
              {renderCategories()}
            </Container>
          </Modal.Body>
        )}
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

export default MainWindow;
