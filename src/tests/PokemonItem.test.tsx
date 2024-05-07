import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PokemonPreview } from '../types/pokemon';
import { PokemonItem } from '../components';

const mockPokemon: PokemonPreview = {
  name: 'Pikachu',
  url: 'https://pokeapi.co/api/v2/pokemon/25/'
};

describe('PokemonItem', () => {
  it('renders Pokemon name correctly', () => {
    render(<PokemonItem pokemon={mockPokemon} onClick={() => {}} selected={false} />);
    const pokemonNameElement = screen.getByText('Pikachu');
    expect(pokemonNameElement).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn();
    render(<PokemonItem pokemon={mockPokemon} onClick={onClickMock} selected={false} />);
    const pokemonItemElement = screen.getByText('Pikachu');
    fireEvent.click(pokemonItemElement);
    expect(onClickMock).toHaveBeenCalledWith(mockPokemon);
  });
});
