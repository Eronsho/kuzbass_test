import React, { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypeSelector } from "../hooks/useTypeSelector";
import Content from "../components/Content";
import {
  fetchOneUserSuccess,
  fetchStatesRequest,
} from "../store/action-creators/states";
import ChangeItem from "../components/ChangeItem";
import { Data } from "../types";
import { Spinner } from "react-bootstrap";
const Main: React.FC = memo(() => {
  const {
    page,
    removeUser,
    loading,
    per_page,
    state,
    total,
    total_pages,
    sort,
  } = useTypeSelector((state) => state.states);
  const onHideModal = () => {
    setModalVisible(false);
    dispatch(fetchOneUserSuccess(null));
  };
  const dispatch = useDispatch();
  const [moadaVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(
      fetchStatesRequest({
        page: 1,
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
        onShow={() => setModalVisible(true)}
      />
      {removeUser == null ? (
        ""
      ) : (
        <ChangeItem
          show={moadaVisible}
          user={removeUser}
          onHide={() => onHideModal()}
        />
      )}
    </div>
  );
});
export default Main;
