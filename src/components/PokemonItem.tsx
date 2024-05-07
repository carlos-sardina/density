import { PokemonPreview } from '../types/pokemon';

type TPokemonItem = {
  pokemon: PokemonPreview;
  onClick: (pokemon: PokemonPreview) => void;
  selected: boolean;
};

export const PokemonItem = ({ pokemon, onClick, selected }: TPokemonItem) => {
  return (
    <li
      onClick={() => onClick(pokemon)}
      className={`border border-black rounded-md text-center h-[70px] items-center flex justify-center hover:cursor-pointer
        hover:bg-amber-100
      ${selected ? 'bg-amber-200 hover:bg-amber-200' : ''}`}
    >
      {pokemon.name}
    </li>
  );
};
