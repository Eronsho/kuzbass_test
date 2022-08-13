import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { FetchDatePayload, StatesActionTypes } from "../../types";
import { $host } from "./../../https/index";
import {
  fetchStatesError,
  fetchStatesSuccess,
} from "../action-creators/states";
const fetchUsers = (param: FetchDatePayload) => {
  return $host.get("api/users", {
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

export function* fetchStateseWatcher() {
  yield all([takeLatest(StatesActionTypes.FETCH_STATES, FetchStatesWorker)]);
}
