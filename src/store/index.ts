import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  TEMP: () => ({})
});

const store = configureStore({
  reducer: rootReducer
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;
