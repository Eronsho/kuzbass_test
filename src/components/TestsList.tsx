import React, { memo, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSearchtUsers, setSortUsers } from "../store/action-creators/states";
const TestsList: React.FC = memo(() => {
  const dispatch = useDispatch();
  const sortUsers = (payload: string) => {
    dispatch(setSortUsers(payload));
  };
  const searchUsers = (payload: string, data: string) => {
    dispatch(setSearchtUsers(payload, data));
    console.log(data);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <thead>
      <tr>
        <th onClick={() => sortUsers("id")}>ID</th>
        <th onClick={() => sortUsers("first_name")}>First Name</th>
        <th onClick={() => sortUsers("last_name")}>Last Name</th>
        <th onClick={() => sortUsers("last_name")}>Email</th>
        <th>Actions</th>
      </tr>
      <tr>
        <th></th>
        <th>
          {" "}
          <Form.Control
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-3"
            placeholder="Введите lastName"
          ></Form.Control>
        </th>
        <th>
          <Form.Control
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              searchUsers("last_name", e.target.value);
              console.log(e.target.value);
            }}
            className="mt-3"
            placeholder="Введите firstName"
          ></Form.Control>
        </th>
        <th>
          <Form.Control
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-3"
            placeholder="Введите email"
          ></Form.Control>
        </th>
        <th>Actions</th>
      </tr>
    </thead>
  );
});
export default TestsList;
