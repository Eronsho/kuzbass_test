export interface States {
  state: State;
  loading: boolean;
  error: null | string;
  sort: boolean;
}
export interface Data {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface State {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Data[];
}

export enum StatesActionTypes {
  FETCH_STATES = "FETCH_STATES",
  FETCH_STATES_SUCCESSS = " FETCH_STATES_SUCCESSS",
  FETCH_STATES_ERROR = "FETCH_STATES_ERROR",
}
interface FetchStatesAction {
  type: StatesActionTypes.FETCH_STATES;
}

interface FetchStatesSuccsessAction {
  type: StatesActionTypes.FETCH_STATES_SUCCESSS;
  payload: States[];
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
