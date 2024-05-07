export type PokemonPreview = {
  name: string;
  url: string;
};

export type PokemonResponse = {
  count: number;
  next: string;
  previous: string;
  results: PokemonPreview[];
};

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonDetail = {
  name: string;
  height: number;
  id: number;
  base_experience: number;
  abilities: Ability[];
  sprites: {
    front_default: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
