import { PokemonDetail } from '../types/pokemon';

type TFetchPokemonDetail = {
  id: string;
};

export const fetchPokemonDetail = async ({ id }: TFetchPokemonDetail): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();

  return data;
};
