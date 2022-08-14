import {
  RemoveAction,
  RemoveUserActionTypes,
  SortAction,
  SortUserActionTypes,
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
  action: StatesAction | RemoveAction | SortAction
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
        state: state.state
          .slice()
          .map((user) =>
            user.id === action.payload.id ? action.payload : user
          ),
        removeUser: null,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case SortUserActionTypes.SORT_USER:
      debugger;
      return {
        state: state.state.slice().sort((a, b): number => {
          switch (action.payload) {
            case "id":
              return a.id - b.id;
            case "email":
              return a.email > b.email ? 1 : -1;
            case "first_name":
              return a.first_name > b.first_name ? 1 : -1;
            case "last_name":
              return a.last_name > b.last_name ? 1 : -1;
            default:
              return 0;
          }
        }),
        removeUser: null,
        loading: false,
        error: state.error,
        sort: state.sort,
        page: state.page,
        per_page: state.per_page,
        total: state.total,
        total_pages: state.total_pages,
      };
    case SortUserActionTypes.SEARCH_USERS:
      debugger;
      return {
        state: [
          ...state.state.slice().filter((user) => {
            switch (action.payload) {
              case "email":
                return (
                  user.email
                    .toLocaleLowerCase()
                    .indexOf(action.data.toLocaleLowerCase()) > -1
                );
              case "first_name":
                return (
                  user.first_name
                    .toLocaleLowerCase()
                    .indexOf(action.data.toLocaleLowerCase()) > -1
                );
              case "last_name":
                return (
                  user.last_name
                    .toLocaleLowerCase()
                    .indexOf(action.data.toLocaleLowerCase()) > -1
                );
              default:
                return user;
            }
          }),
        ],
        removeUser: null,
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
