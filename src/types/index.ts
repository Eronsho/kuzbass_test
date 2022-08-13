export interface States {
  state: Data[];
  loading: boolean;
  error: null | string;
  sort: boolean;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface Response {
  data: Data[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
export interface FetchDatePayload {
  page: number | null;
}
export enum StatesActionTypes {
  FETCH_STATES = "FETCH_STATES",
  FETCH_STATES_SUCCESSS = " FETCH_STATES_SUCCESSS",
  FETCH_STATES_ERROR = "FETCH_STATES_ERROR",
  SET_USERS = "SET_USERS",
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
export type StatesAction =
  | FetchStatesAction
  | FetchStatesSuccsessAction
  | FetchStatesErrorAction
  | SetPageUserAction;
// ---------------------------------------------------------------------
