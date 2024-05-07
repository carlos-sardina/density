import { useEffect, useState } from 'react';
import { fetchPokemonDetail } from '../services';
import { PokemonDetail } from '../types/pokemon';
import { usePokemonDetailsActions, usePokemonDetailsFromStore } from '../store/actions/pokemonDetails';

export const useGetPokemonDetail = () => {
  const pokemonFromStore = usePokemonDetailsFromStore();
  const [isFetching, setIsFetching] = useState(false);
  const { addPokemon } = usePokemonDetailsActions();

  const getPokemon = async (id: string) => {
    try {
      setIsFetching(true);

      const existingPokemon = pokemonFromStore.find((pokemon) => pokemon.id === Number(id));
      if (existingPokemon) {
        return existingPokemon;
      }

      const data = await fetchPokemonDetail({ id });
      addPokemon(data);
      return data;
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    getPokemon,
    isFetching
  };
};

export const usePokemonDetail = (id: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetail>();

  const { getPokemon, isFetching } = useGetPokemonDetail();

  useEffect(() => {
    getPokemon(id).then(setPokemon);
  }, [id, getPokemon]);

  return {
    pokemon,
    isFetching
  };
};
