import { useEffect, useState } from 'react';
import { PokemonPreview } from '../types/pokemon';
import { fetchPokemon } from '../services';

export const usePokemon = () => {
  const [pokemonList, setPokemonList] = useState<PokemonPreview[]>([]);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const initPokemon = async () => {
      try {
        setIsFetching(true);

        let data = await fetchPokemon({ offset });

        if (offset === 140) {
          data = {
            ...data,
            results: data.results.slice(0, 11)
          };
        }
        setPokemonList(data.results);
      } catch (e) {
        console.log(e);
      } finally {
        setIsFetching(false);
      }
    };

    initPokemon();
  }, [offset]);

  return {
    pokemonList,
    setOffset,
    isFetching,
    offset
  };
};
