import React from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setPageUsers } from "../store/action-creators/states";
type CountProps = {
  count: number;
  pags: number;
  total_page: number;
};
const Pages: React.FC<CountProps> = ({ count, pags, total_page }) => {
  const pages = [];
  const dispatch = useDispatch();
  for (let i = 0; i < total_page; i++) {
    pages.push(i + 1);
  }
  const setPage = (page: number) => {
    dispatch(setPageUsers(page));
  };
  debugger;
  return (
    <Pagination className="mt-5">
      {pages.map((page) => (
        <Pagination.Item
          key={page}
          onClick={() => setPage(page)}
          active={pags === page}
        >
          {page}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
