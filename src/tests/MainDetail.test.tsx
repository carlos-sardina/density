import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MainDetail } from '../components/MainDetail';
import { MemoryRouter } from 'react-router-dom';

describe('MainDetail', () => {
  it('renders default image if no image prop is provided', () => {
    render(<MainDetail />, { wrapper: MemoryRouter });
    const defaultImageElement = screen.getByAltText('preview');
    expect(defaultImageElement).toHaveAttribute(
      'src',
      'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'
    );
  });

  it('renders provided image when image prop is provided', () => {
    const customImage = 'https://example.com/custom-image.png';
    render(<MainDetail image={customImage} />, { wrapper: MemoryRouter });
    const customImageElement = screen.getByAltText('preview');
    expect(customImageElement).toHaveAttribute('src', customImage);
  });

  it('renders PokeAPI logo link', () => {
    render(<MainDetail />, { wrapper: MemoryRouter });
    const logoLinkElement = screen.getByAltText('pokedex').closest('a');
    expect(logoLinkElement).toHaveAttribute('href', '/');
  });
});
