import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Sets from './Sets';

describe('<Sets />', () => {
  test('it should mount', () => {
    render(<Sets />);
    
    const sets = screen.getByTestId('Sets');

    expect(sets).toBeInTheDocument();
  });
});