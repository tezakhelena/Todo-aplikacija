import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterKorisniciRequest } from '../../types/request-types';

export type FilterStateKeys = 'korisniciTableFilter';


export type FilterState = {
  korisniciTableFilter: Partial<FilterKorisniciRequest>;
  // Ostali filteri, ako ih ima
};

const initialState: FilterState = {
    korisniciTableFilter: {},
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: <K extends keyof FilterState>(
      state: FilterState,
      action: PayloadAction<{ filterType: K; filterValue: FilterState[K] }>
    ) => {
      state[action.payload.filterType] = {
        ...state[action.payload.filterType],
        ...action.payload.filterValue,
      };
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
