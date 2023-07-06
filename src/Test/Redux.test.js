import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import currencyReducer, {
  getCurrency,
  getCurrencyDetails,
  searchCurrency,
} from '../Redux/CurrencySlice';

jest.mock('axios');

const mockStore = configureMockStore([thunk]);

describe('currencySlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  test('fetches currencies and updates state correctly', async () => {
    axios.get.mockResolvedValue({
      data: { USD: 'United States Dollar', EUR: 'Euro', GBP: 'British Pound' },
    });

    await store.dispatch(getCurrency());

    expect(store.getActions()).toMatchSnapshot();
  });

  test('fetches currency details and updates state correctly', async () => {
    const currencyId = 'USD';
    axios.get.mockResolvedValue({ data: { rates: { EUR: 0.85, GBP: 0.74 } } });

    await store.dispatch(getCurrencyDetails(currencyId));

    expect(store.getActions()).toMatchSnapshot();
  });

  test('updates filterCurrency correctly when searching', () => {
    const state = currencyReducer(
      {
        currency: {
          USD: 'United States Dollar',
          EUR: 'Euro',
          GBP: 'British Pound',
        },
        filterCurrency: [],
      },
      searchCurrency('euro'),
    );

    expect(state.filterCurrency).toEqual([['EUR', 'Euro']]);
  });
});
