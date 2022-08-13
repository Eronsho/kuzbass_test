import { States, StatesAction, StatesActionTypes } from "../../types/index";
const State: States = {
  state: [],
  loading: false,
  error: null,
  sort: true,
  page: 1,
  per_page: 0,
  total: 10,
  total_pages: 0,
};
export const statesReducer = (state = State, action: StatesAction): States => {
  switch (action.type) {
    case StatesActionTypes.FETCH_STATES:
      return {
        state: state.state,
        loading: false,
        error: null,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case StatesActionTypes.FETCH_STATES_SUCCESSS:
      debugger;
      return {
        state: [...action.payload.data],
        loading: false,
        error: null,
        sort: state.sort,
        page: action.payload.page,
        per_page: action.payload.per_page,
        total: action.payload.total,
        total_pages: action.payload.total_pages,
      };
    case StatesActionTypes.FETCH_STATES_ERROR:
      return {
        state: state.state,
        loading: false,
        error: action.payload,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case StatesActionTypes.SET_USERS:
      debugger;
      return {
        state: state.state,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: action.payload,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    default:
      return state;
  }
};
