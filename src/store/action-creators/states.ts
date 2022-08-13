import { FetchDatePayload, States, StatesActionTypes } from "../../types/index";

export const fetchStatesRequest = (payload: FetchDatePayload) => ({
  type: StatesActionTypes.FETCH_STATES,
  payload,
});

export const fetchStatesSuccess = (payload: States[]) => ({
  type: StatesActionTypes.FETCH_STATES_SUCCESSS,
  payload,
});
export const fetchStatesError = (payload: string) => ({
  type: StatesActionTypes.FETCH_STATES_ERROR,
  payload,
});
// ------------------------------------------------------------------------
export const setPageUsers = (payload: number) => ({
  type: StatesActionTypes.SET_USERS,
  payload,
});

export const delUsers = (payload: number) => ({
  type: StatesActionTypes.DELETE_USERS,
  payload,
});
export const setDelUsers = (payload: number) => ({
  type: StatesActionTypes.DELETE_USERS_SUCCESSS,
  payload,
});
