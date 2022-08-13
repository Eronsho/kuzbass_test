import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { FetchDatePayload, StatesActionTypes } from "../../types";
import { $host } from "./../../https/index";
import {
  delUsers,
  fetchStatesError,
  fetchStatesSuccess,
  setDelUsers,
} from "../action-creators/states";
const fetchUsers = (param: FetchDatePayload) => {
  return $host.get("api/users", {
    params: param,
  });
};
const deleteUsers = (param: FetchDatePayload) => {
  return $host.delete("api/users", {
    params: param,
  });
};
function* FetchStatesWorker(action: any) {
  try {
    const { data } = yield call(fetchUsers, action.payload);
    yield put(fetchStatesSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchStatesError("Произошла ошибка при загрузке "));
  }
}
function* DeleteUserWorker(action: any) {
  debugger;
  try {
    const { data } = yield call(deleteUsers, action.payload);
    debugger;
    yield put(setDelUsers(action.payload));
  } catch (e) {
    console.log(e);
  }
}
export function* fetchStateseWatcher() {
  yield all([takeLatest(StatesActionTypes.FETCH_STATES, FetchStatesWorker)]);
  yield all([takeLatest(StatesActionTypes.DELETE_USERS, DeleteUserWorker)]);
}
