import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Data } from "../types";
import { Button } from "react-bootstrap";
type UsersListProps = {
  user: Data;
  del: (id: number) => void;
  remove: (id: number) => void;
};
const CardItem: React.FC<UsersListProps> = memo(({ user, del, remove }) => {
  return (
    <Card
      className="d-flex flex-row justify-content-between"
      style={{ width: "100%" }}
    >
      <Card.Img variant="left" src={user.avatar} />
      <Card.Body>
        <Card.Text>{user.first_name}e</Card.Text>
        <Card.Text className="mb-10">{user.last_name}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="light" onClick={() => del(user.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </Button>
        <Button variant="light" onClick={() => remove(user.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-pencil-square"
            viewBox="0 0 16 16"
          >
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path
              fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
            />
          </svg>
        </Button>
      </Card.Footer>
    </Card>
  );
});
export default CardItem;
