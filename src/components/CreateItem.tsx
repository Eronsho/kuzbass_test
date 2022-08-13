import React, { useState, useEffect } from "react";
import { Modal, Dropdown, Button, Form, Col, Row } from "react-bootstrap";
type сreateListProps = {
  show: boolean;
  onHide: () => void;
};

const CreateItem: React.FC<сreateListProps> = ({ show, onHide }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Control
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-3"
            placeholder="Введите firstName"
          ></Form.Control>{" "}
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-3"
            placeholder="Введите lastName"
          ></Form.Control>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введите lastName"
          ></Form.Control>
          <hr />
          <Button variant="outline-dark">Добавить</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateItem;
