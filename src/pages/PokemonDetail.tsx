import { useHistory, useParams } from 'react-router-dom';
import { DetailBox, MainDetail } from '../components';
import { usePokemonDetail } from '../hooks/usePokemonDetail';

export const PokemonDetail = () => {
  const params: Record<string, string> = useParams();
  const { pokemon } = usePokemonDetail(params.id);
  const { push } = useHistory();

  return (
    <section className="flex h-screen">
      <MainDetail image={pokemon?.sprites.front_default} />
      <div className="flex gap-6 px-4 py-6 flex-1">
        <button onClick={() => push('/')}>{'<'}</button>
        <div className="flex-1">
          <h1 className="text-center font-bold text-3xl capitalize">{pokemon?.name}</h1>
          <div className="border-b-amber-500 border-b-2">
            <p>Height: {pokemon?.height}cm</p>
            <p>Experience: {pokemon?.base_experience}</p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <div>
              <h5 className="font-bold">Type</h5>
              <DetailBox value={pokemon?.types?.[0].type.name || ''} />
            </div>
            <div>
              <h5 className="font-bold">Abilities</h5>
              <ul className="flex justify-around gap-4">
                {pokemon?.abilities.map((ability) => {
                  return <DetailBox key={ability.ability.name} value={ability.ability.name} />;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
