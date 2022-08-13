import { type } from "os";

export interface States {
  state: Data[];
  removeUser: Data | null;
  loading: boolean;
  error: null | string;
  sort: boolean;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export interface Data {
  id: number | undefined;
  email: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  avatar: string | undefined;
}
export interface Response {
  data: Data[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export interface oneResponse {
  data: Data;
  support: Supor[];
}
export interface Supor {
  text: string;
  url: string;
}
export interface FetchDatePayload {
  page: number | null;
}
export enum StatesActionTypes {
  FETCH_STATES = "FETCH_STATES",
  FETCH_STATES_SUCCESSS = " FETCH_STATES_SUCCESSS",
  FETCH_STATES_ERROR = "FETCH_STATES_ERROR",
  SET_USERS = "SET_USERS",
  DELETE_USERS = "DELETE_USERS",
  DELETE_USERS_SUCCESSS = "DELETE_USERS_SUCCESSS",
}
interface FetchStatesAction {
  type: StatesActionTypes.FETCH_STATES;
  payload: FetchDatePayload;
}

interface FetchStatesSuccsessAction {
  type: StatesActionTypes.FETCH_STATES_SUCCESSS;
  payload: Response;
}
interface FetchStatesErrorAction {
  type: StatesActionTypes.FETCH_STATES_ERROR;
  payload: string;
}
interface SetPageUserAction {
  type: StatesActionTypes.SET_USERS;
  payload: number;
}
interface SetDeleteUserAction {
  type: StatesActionTypes.DELETE_USERS;
  payload: number;
}
interface SetDeleteUserSuccessAction {
  type: StatesActionTypes.DELETE_USERS_SUCCESSS;
  payload: number;
}
export type StatesAction =
  | FetchStatesAction
  | FetchStatesSuccsessAction
  | FetchStatesErrorAction
  | SetPageUserAction
  | SetDeleteUserAction
  | SetDeleteUserSuccessAction;
// ---------------------------------------------------------------------
export enum RemoveUserActionTypes {
  REMOVE_USER = "REMOVE_USER",
  REMOVE_USERS_SUCCESSS = " REMOVE_USER_SUCCESSS",
  REMOVE_USER_ERROR = "REMOVE_USER_ERROR",
  REMOVE_SAVE_USER = "REMOVE_SAVE_USERS",
}
interface RemoveUserAction {
  type: RemoveUserActionTypes.REMOVE_USER;
  payload: number;
}

interface RemoveUserSuccessAction {
  type: RemoveUserActionTypes.REMOVE_USERS_SUCCESSS;
  payload: oneResponse;
}
interface RemoveUserErrorAction {
  type: RemoveUserActionTypes.REMOVE_USER_ERROR;
  payload: string;
}
interface RemoveSaveUserAction {
  type: RemoveUserActionTypes.REMOVE_SAVE_USER;
  payload: Data;
}
export type RemoveAction =
  | RemoveUserAction
  | RemoveUserSuccessAction
  | RemoveUserErrorAction
  | RemoveSaveUserAction;
