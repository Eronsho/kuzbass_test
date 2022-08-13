export interface States {
  state: Data[];
  loading: boolean;
  error: null | string;
  sort: boolean;
  page: number | null;
  per_page: number | null;
  total: number | null;
  total_pages: number | null;
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
  page: number | null;
  per_page: number | null;
  total: number | null;
  total_pages: number | null;
}
export interface FetchDatePayload {
  page: number | null;
  per_page: number | null;
  total: number | null;
  total_pages: number | null;
}
export enum StatesActionTypes {
  FETCH_STATES = "FETCH_STATES",
  FETCH_STATES_SUCCESSS = " FETCH_STATES_SUCCESSS",
  FETCH_STATES_ERROR = "FETCH_STATES_ERROR",
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
export type StatesAction =
  | FetchStatesAction
  | FetchStatesSuccsessAction
  | FetchStatesErrorAction;
// ---------------------------------------------------------------------
