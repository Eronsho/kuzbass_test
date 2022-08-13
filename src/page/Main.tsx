import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Content from "../components/Content";
import { fetchStatesRequest } from "../store/action-creators/states";
const Main: React.FC = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchStatesRequest({
        page: 2,
        per_page: null,
        total: null,
        total_pages: null,
      })
    );
  }, []);
  return (
    <div className="container-sm">
      <Content />
    </div>
  );
});
export default Main;
