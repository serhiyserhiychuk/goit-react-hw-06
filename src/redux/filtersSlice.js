import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter: {
      reducer(name, action) {
        name = action.payload;
      },
    },
  },
  selectors: {
    selectNameFilter(state) {
      return state.name;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const { selectNameFilter } = filtersSlice.selectors;
export const filtersReducer = filtersSlice.reducer;
