import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Content from "../components/Content";
import { fetchStatesRequest } from "../store/action-creators/states";
const Main: React.FC = memo(() => {
  const { page, loading, per_page, state, total, total_pages, sort } =
    useTypeSelector((state) => state.states);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      fetchStatesRequest({
        page: 2,
      })
    );
    console.log(state);
  }, []);
  useEffect(() => {
    dispatch(
      fetchStatesRequest({
        page: page,
      })
    );
    console.log(state);
  }, [page]);
  return (
    <div className="container-sm">
      <Content
        users={state}
        page={page}
        total_page={total_pages}
        count={per_page}
      />
    </div>
  );
});
export default Main;
