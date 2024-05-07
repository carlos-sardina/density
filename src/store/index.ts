import { configureStore } from '@reduxjs/toolkit';
import * as slices from './slices';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

type ReducerKey<T> = T extends string & `${infer Key}Slice` ? Key : never;
type AppReducer<Type extends { [Property in keyof Type]: { reducer: unknown } }> = {
  [Property in keyof Type as ReducerKey<Property>]: Type[Property]['reducer'];
};

const reducer: AppReducer<typeof slices> = {
  pokemonDetails: slices.pokemonDetailsSlice.reducer
};

export const appStore = configureStore({ reducer: reducer });

export type AppDispatch = typeof appStore.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof appStore.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
