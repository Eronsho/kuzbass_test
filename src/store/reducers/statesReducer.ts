import {
  RemoveAction,
  RemoveUserActionTypes,
  States,
  StatesAction,
  StatesActionTypes,
} from "../../types/index";
const State: States = {
  state: [],
  removeUser: null,
  loading: false,
  error: null,
  sort: true,
  page: 1,
  per_page: 0,
  total: 10,
  total_pages: 0,
};
export const statesReducer = (
  state = State,
  action: StatesAction | RemoveAction
): States => {
  switch (action.type) {
    case StatesActionTypes.FETCH_STATES:
      return {
        state: state.state,
        removeUser: state.removeUser,
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
        removeUser: state.removeUser,
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
        removeUser: state.removeUser,
        loading: false,
        error: action.payload,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case StatesActionTypes.DELETE_USERS_SUCCESSS:
      debugger;
      return {
        state: [...state.state.slice().filter((e) => e.id !== action.payload)],
        removeUser: state.removeUser,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case StatesActionTypes.SET_USERS:
      return {
        state: state.state,
        removeUser: state.removeUser,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: action.payload,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case RemoveUserActionTypes.REMOVE_USER:
      return {
        state: state.state,
        removeUser: state.removeUser,
        loading: false,
        error: null,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case RemoveUserActionTypes.REMOVE_USERS_SUCCESSS:
      debugger;
      return {
        state: state.state,
        removeUser:
          action.payload == null ? action.payload : action.payload.data,
        loading: false,
        error: null,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case RemoveUserActionTypes.REMOVE_USER_ERROR:
      debugger;
      return {
        state: state.state,
        removeUser: state.removeUser,
        loading: false,
        error: action.payload,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case RemoveUserActionTypes.REMOVE_SAVE_USER:
      debugger;
      return {
        state: state.state.map((e) =>
          e.id === action.payload.id ? action.payload : e
        ),
        removeUser: state.removeUser,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    default:
      return state;
  }
};
