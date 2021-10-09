import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Set from './Set';

describe('<Set />', () => {
  test('it should mount', () => {
    render(<Set />);
    
    const set = screen.getByTestId('Set');

    expect(set).toBeInTheDocument();
  });
});