import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Currencies from '../Components/Currencies/Currencies';

jest.mock('react-redux');

describe('Currencies', () => {
  it('matches the snapshot', () => {
    useSelector.mockReturnValue({
      currency: {
        USD: 'United States Dollar',
        EUR: 'Euro',
        GBP: 'British Pound',
      },
      filterCurrency: {},
    });

    const { container } = render(<Currencies />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
