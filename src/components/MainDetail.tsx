import { Link } from 'react-router-dom';

type MainDetailProps = {
  image?: string;
};

const pokeBallImg = 'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png';

export const MainDetail = ({ image = pokeBallImg }: MainDetailProps) => {
  return (
    <aside className="bg-red-600 p-2 w-[400px]">
      <Link to="/" className="flex justify-center py-4">
        <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="pokedex" />
      </Link>
      <div className="bg-white rounded-md flex justify-center h-[400px] mt-6">
        <img src={image} alt="preview" />
      </div>
    </aside>
  );
};
