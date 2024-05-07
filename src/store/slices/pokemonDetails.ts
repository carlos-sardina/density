import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonDetail } from '../../types/pokemon';

const pokemonDetails: PokemonDetail[] = [];

export const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState: pokemonDetails,
  reducers: {
    addPokemon: (state, action: PayloadAction<PokemonDetail>) => {
      return [...state, action.payload];
    }
  }
});
