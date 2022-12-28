import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchPokedex } from "./pokedexAPI"

export interface PokedexState {
  value: String[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: PokedexState = {
  value: [],
  status: 'idle',
};

export const fetchAsync = createAsyncThunk(
  'pokedex/fetch',
  async () => {
    const response = await fetchPokedex();
    return response.data;
  }
);

export const pokedexSlice = createSlice({
  name: 'Pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(fetchAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default pokedexSlice.reducer;