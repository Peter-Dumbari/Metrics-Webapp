import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import Search from '../Components/Searcch/Search';
import { searchCurrency } from '../Redux/CurrencySlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('Search', () => {
  test('dispatches searchCurrency action on input change', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    const { getByPlaceholderText } = render(<Search />);

    const inputElement = getByPlaceholderText('Enter Country');
    fireEvent.change(inputElement, { target: { value: 'united' } });

    expect(dispatchMock).toHaveBeenCalledWith(searchCurrency('united'));
  });
});
