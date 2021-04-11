import React from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: "center" }}>
          Данное веб-приложение позволяет просмотреть собранные модели Пк и
          собрать собственный
        </Col>
      </Row>

      <Row>
        <Col style={{ paddingTop: "40px", paddingLeft: "40%" }}>
          <Button variant="outline-success" style={{ margin: "0 auto" }}>
            Показать популярные сборки
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
