import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import historyReducer from "../features/history/historySlice"
import pokedexReducer from "../features/pokedex/pokedexSlice"

export const store = configureStore({
  reducer: {
    history: historyReducer,
    pokedex: pokedexReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
