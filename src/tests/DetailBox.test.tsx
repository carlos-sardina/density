import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DetailBox } from '../components';

describe('DetailBox', () => {
  it('renders the DetailBox component', () => {
    render(<DetailBox value="1" />);

    const detailBox = screen.getByText('1');
    expect(detailBox).toBeInTheDocument();
  });
});
