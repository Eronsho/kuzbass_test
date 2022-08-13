import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
const TestsList: React.FC = memo(() => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
});
export default TestsList;
