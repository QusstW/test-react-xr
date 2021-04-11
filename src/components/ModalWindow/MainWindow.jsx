import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";

import MotherBoard from "../../assets/images/MotherBoard.jpg";
import PowerSupy from "../../assets/images/PowerSupy.jpg";
import Processor from "../../assets/images/Processor.jpeg";
import Ram from "../../assets/images/RAM.jpg";
import VideoCard from "../../assets/images/VideoCard.jpg";

const MainWindow = ({ subjectId, onClose, setClickMother, setClickVideo }) => {
  const [show, setShow] = useState(false);
  const [subject, setSubject] = useState(null);

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
  
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Выберите комплектующие для установки</Modal.Title>
        </Modal.Header>
        {subjectId && (
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={6} md={4} onClick={ ()=>{setClickMother(true)}} >
                  <Image  src={MotherBoard} rounded style={{ width: "150px" }} />
                  <div>Материнские платы</div>
                </Col>
                <Col xs={6} md={4}>
                  <Image src={PowerSupy} rounded style={{ width: "150px" }} />
                  <div>Блоки Питания</div>
                </Col>
                <Col xs={6} md={4}>
                  <Image src={Processor} rounded style={{ width: "150px" }} />
                  <div>Процессоры</div>
                </Col>
                <Col xs={6} md={4}>
                  <Image src={Ram} rounded style={{ width: "150px" }} />
                  <div>Оперативная память</div>
                </Col>
                <Col xs={6} md={4} onClick={ ()=>{ setClickVideo(true) } } >
                  <Image src={VideoCard} rounded style={{ width: "150px" }} />
                  <div>Видеокарты</div>
                </Col>
              </Row>
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
