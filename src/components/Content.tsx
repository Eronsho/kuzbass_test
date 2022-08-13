import React, { memo, useState } from "react";
import Table from "react-bootstrap/Table";
import TestsItems from "./TestsItem";
import TestsList from "./TestsList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Content: React.FC = memo(() => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="d-flex flex-row-reverse "
    >
      <Tab
        eventKey="home"
        title={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        }
      >
        <Table striped bordered hover variant="dark">
          <TestsList />
          <TestsItems />
        </Table>
      </Tab>
      <Tab
        eventKey="profile"
        title={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-grid-fill"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        }
      >
        <Card
          className="d-flex flex-row justify-content-between"
          style={{ width: "100%" }}
        >
          <Card.Img variant="left" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>Card Title</Card.Text>
            <Card.Text className="mb-10">Card Title</Card.Text>
            <Card.Text>Card Title</Card.Text>
          </Card.Body>
          <Card.Footer>asf</Card.Footer>
        </Card>
      </Tab>
    </Tabs>
  );
});
export default Content;
