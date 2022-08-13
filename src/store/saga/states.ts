import axios from "axios";
import { call, put, all, takeLatest } from "redux-saga/effects";
import { StatesActionTypes } from "../../types";
import {
  fetchStatesError,
  fetchStatesSuccess,
} from "../action-creators/states";

function* FetchStatesWorker(action: any) {
  debugger;
  try {
    yield put(fetchStatesSuccess(action.payload));
  } catch (e) {
    console.log(e);
    yield put(fetchStatesError("Произошла ошибка при загрузке "));
  }
}

export function* fetchStateseWatcher() {
  yield all([takeLatest(StatesActionTypes.FETCH_STATES, FetchStatesWorker)]);
}
