import React, { memo } from "react";
import { Data } from "../types";
type UsersListProps = {
  user: Data;
};
const TestsItems: React.FC<UsersListProps> = memo(({ user }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </>
  );
});

export default TestsItems;
