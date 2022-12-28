import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HistoryState {
  value: String[];
}

const initialState: HistoryState = {
  value: []
};

export const historySlice = createSlice({
  name: 'Search History',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<String>) => {
      state.value = [...state.value, action.payload]
    }
  },
});

export const { add } = historySlice.actions;
export default historySlice.reducer;