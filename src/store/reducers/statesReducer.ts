import { States, StatesAction, StatesActionTypes } from "../../types/index";
const State: States = {
  state: { page: 2, per_page: 6, total: 12, total_pages: 2, data: [] },
  loading: false,
  error: null,
  sort: true,
};
export const statesReducer = (state = State, action: StatesAction): States => {
  switch (action.type) {
    default:
      return state;
  }
};
