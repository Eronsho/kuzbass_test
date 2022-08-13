import {
  Data,
  FetchDatePayload,
  RemoveUserActionTypes,
  States,
  StatesActionTypes,
} from "../../types/index";

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
export const fetchOneUser = (payload: number) => ({
  type: RemoveUserActionTypes.REMOVE_USER,
  payload,
});

export const fetchOneUserSuccess = (payload: States | null) => ({
  type: RemoveUserActionTypes.REMOVE_USERS_SUCCESSS,
  payload,
});
export const fetchOneUserError = (payload: string) => ({
  type: RemoveUserActionTypes.REMOVE_USER_ERROR,
  payload,
});
export const removeSaveUser = (payload: Data) => ({
  type: RemoveUserActionTypes.REMOVE_SAVE_USER,
  payload,
});
