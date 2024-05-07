import { PokemonDetail } from '../../types/pokemon';
import { useAppDispatch, useAppSelector } from '../index';
import { pokemonDetailsSlice } from '../slices';

export const usePokemonDetailsFromStore = () => {
  return useAppSelector((state) => state.pokemonDetails);
};

export const usePokemonDetailsActions = () => {
  const dispatch = useAppDispatch();

  const addPokemon = (pokemon: PokemonDetail) => dispatch(pokemonDetailsSlice.actions.addPokemon(pokemon));

  return { addPokemon };
};
