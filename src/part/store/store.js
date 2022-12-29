import { configureStore, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [
      { id: 1, todo: "Learn js", check: true },
      { id: 2, todo: "Learn React", check: false },
      { id: 3, todo: "Sport", check: false },
    ],
    show: { search: false, add: true },
    search: [],
    AddSearchChange: true,
  },
  reducers: {
    Add: (state, action) => {
      return {
        ...state,
        data: [
          ...state.data,
          { id: nanoid(), todo: action.payload, check: false },
        ],
      };
    },
    del: (state, action) => {
      return { ...state, data: [...action.payload] };
    },
    delSearch: (state, action) => {
      return { ...state, search: [...action.payload] };
    },
    ChangeSearchShowInput: (state, action) => {
      return { ...state, show: { ...state.show, search: action.payload } };
    },
    ChangeAddShowInput: (state, action) => {
      return { ...state, show: { ...state.show, add: action.payload } };
    },
    // check = > true if selected
    ChangeSelected: (state, action) => {
      return { ...state, data: [...action.payload] };
    },
    ChangeSelectedSearch: (state, action) => {
      return { ...state, search: [...action.payload] };
    },
    // for list true => add
    ChangeAddSearch: (state, action) => {
      return { ...state, AddSearchChange: action.payload };
    },
    // add list search
    showSearch: (state, action) => {
      return { ...state, search: [...action.payload] };
    },
  },
});

export const {
  showSearch,
  ChangeSelectedSearch,
  ChangeAddSearch,
  ChangeSelected,
  ChangeSearchShow,
  ChangeAddShow,
} = todoSlice.actions;
export const { delSearch, del, Add } = todoSlice.actions;
export const { ChangeSearchShowInput, ChangeAddShowInput } = todoSlice.actions;
const store = configureStore({ reducer: todoSlice.reducer });

export default store;
