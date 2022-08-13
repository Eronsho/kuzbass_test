import React, { useState, useEffect } from "react";
import { Modal, Dropdown, Button, Form, Col, Row, Card } from "react-bootstrap";
import { Data } from "../types";

import Image from "react-bootstrap/Image";
import { useDispatch } from "react-redux";
import { removeSaveUser } from "../store/action-creators/states";
type сreateListProps = {
  show: boolean;
  onHide: () => void;
  user: Data | null;
};

const ChangeItem: React.FC<сreateListProps> = ({ show, onHide, user }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(user?.first_name);
  const [lastName, setLastName] = useState(user?.last_name);
  const [email, setEmail] = useState(user?.email);
  const [avatar, setAvatar] = useState(user?.avatar);
  const [id, setId] = useState(user?.id);

  debugger;
  const addDevice = () => {
    const user: Data = {
      id: id,
      avatar: avatar,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };
    dispatch(removeSaveUser(user));
    onHide();
    console.log(user);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header>
        <Card style={{ width: "18rem", height: "20rem" }}>
          <Card.Img variant="top" src={avatar} />
        </Card>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-3"
            placeholder="Введите firstName"
          ></Form.Control>
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
          <Button variant="outline-dark " onClick={() => addDevice()}>
            Save
          </Button>
          <Button variant="outline-dark" onClick={onHide}>
            Cancel
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeItem;
