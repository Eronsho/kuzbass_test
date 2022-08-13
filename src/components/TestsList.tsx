import React, { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { setSortUsers } from "../store/action-creators/states";
const TestsList: React.FC = memo(() => {
  const dispatch = useDispatch();
  const sortUsers = (payload: string) => {
    dispatch(setSortUsers(payload));
  };
  return (
    <thead>
      <tr>
        <th onClick={() => sortUsers("id")}>ID</th>
        <th onClick={() => sortUsers("first_name")}>First Name</th>
        <th onClick={() => sortUsers("last_name")}>Last Name</th>
        <th onClick={() => sortUsers("last_name")}>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
  );
});
export default TestsList;
