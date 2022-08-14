import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import {
  FetchDatePayload,
  RemoveUserActionTypes,
  SortUserActionTypes,
  StatesActionTypes,
} from "../../types";
import { $host } from "./../../https/index";
import {
  delUsers,
  fetchOneUserError,
  fetchOneUserSuccess,
  fetchStatesError,
  fetchStatesSuccess,
  setDelUsers,
  setSearchtUsers,
  setSearchtUsersSuccess,
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
const getOneUsers = (id: number) => {
  debugger;
  return $host.get(`api/users/${id}`);
};
function* FetchStatesWorker(action: any) {
  debugger;
  try {
    const { data } = yield call(fetchUsers, action.payload);
    yield put(fetchStatesSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchStatesError("Произошла ошибка при загрузке "));
  }
}
function* FetchOnUsersWorker(action: any) {
  try {
    const { data } = yield call(getOneUsers, action.payload);
    debugger;
    yield put(fetchOneUserSuccess(data));
  } catch (e) {
    console.log(e);
    yield put(fetchOneUserError("Произошла ошибка при загрузке "));
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
function* SearchUserWorker(action: any) {
  debugger;
  try {
    const { data } = yield call(fetchUsers, { page: 1 });
    yield put(fetchStatesSuccess(data));
    yield put(setSearchtUsersSuccess(action.payload, action.data));
  } catch (e) {
    console.log(e);
  }
}
export function* fetchStateseWatcher() {
  yield all([takeLatest(StatesActionTypes.FETCH_STATES, FetchStatesWorker)]);
  yield all([takeLatest(StatesActionTypes.DELETE_USERS, DeleteUserWorker)]);
  yield all([
    takeLatest(RemoveUserActionTypes.REMOVE_USER, FetchOnUsersWorker),
  ]);
  yield all([takeLatest(SortUserActionTypes.SEARCH_USERS, SearchUserWorker)]);
}
