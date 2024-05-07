import { PokemonItem } from '../components';
import { usePokemon } from '../hooks/usePokemon';
import { MainDetail } from '../components';
import { useHistory } from 'react-router-dom';
import { PokemonDetail, PokemonPreview } from '../types/pokemon';
import { useState } from 'react';
import { useGetPokemonDetail } from '../hooks/usePokemonDetail';

export const PokemonList = () => {
  const { pokemonList, offset, setOffset, isFetching } = usePokemon();
  const { push } = useHistory();
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const { getPokemon } = useGetPokemonDetail();

  const handlePokemonClick = async (newPokemon: PokemonPreview) => {
    if (!pokemon || newPokemon.name !== pokemon.name) {
      const result = await getPokemon(newPokemon.url.slice(34).replace('/', ''));
      setPokemon(result);
      return;
    }

    push('/detail/' + pokemon.id);
  };

  return (
    <section className="flex h-screen">
      <MainDetail image={pokemon?.sprites.front_default} />
      <div className="flex gap-6 px-4 py-6 flex-1">
        <button
          onClick={() => setOffset((prev) => prev - 20)}
          disabled={isFetching || offset === 0}
          className="disabled:opacity-0"
        >
          {'<'}
        </button>
        <ul className="grid grid-cols-2 gap-6 flex-1 overflow-y-auto">
          {pokemonList.map((item) => {
            return (
              <PokemonItem
                selected={pokemon?.name === item.name}
                onClick={(pokemon) => handlePokemonClick(pokemon)}
                key={item.name}
                pokemon={item}
              />
            );
          })}
        </ul>
        <button
          onClick={() => setOffset((prev) => prev + 20)}
          disabled={isFetching || offset === 140}
          className="disabled:opacity-0"
        >
          {'>'}
        </button>
      </div>
    </section>
  );
};
