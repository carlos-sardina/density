import { PokemonResponse } from '../types/pokemon';

type TFetchPokemon = {
  offset: number;
};

export const fetchPokemon = async ({ offset }: TFetchPokemon): Promise<PokemonResponse> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
  const data = await res.json();

  return data;
};
