import { STATE } from './fixtures';
import { mergeState } from 'src/helpers';
import { ProductsState } from 'src/pages/products/reducer';

describe('mergeState', () => {
  it('should have state shallow equal to itself', () => {
    expect(STATE).toBe(STATE);
  });

  it('should not have state shallow equal to the updated state', () => {
    expect(mergeState((STATE as unknown) as ProductsState, {})).not.toBe(STATE);
  });

  it('should have state deep equal to the updated state', () => {
    expect(mergeState((STATE as unknown) as ProductsState, {})).toStrictEqual(
      STATE,
    );
  });

  it('should update state data accordingly', () => {
    const updatedState = {
      loading: false,
      products: {
        123: {
          id: 123,
          name: 'Product 111',
        },
        456: {
          id: 456,
          name: 'Product 3',
        },
        789: {
          id: 789,
          name: 'Product 4',
          promos: [
            {
              id: 1,
              name: 'Promo item 1',
            },
          ],
        },
      },
    };

    expect(
      mergeState(
        (STATE as unknown) as ProductsState,
        ({
          products: {
            123: {
              id: 123,
              name: 'Product 111',
            },
          },
        } as unknown) as ProductsState,
      ),
    ).toStrictEqual(updatedState);
  });

  it('should add state data accordingly', () => {
    const updatedState = {
      loading: false,
      products: {
        123: {
          id: 123,
          name: 'Product 1',
        },
        456: {
          id: 456,
          name: 'Product 3',
        },
        789: {
          id: 789,
          name: 'Product 4',
          promos: [
            {
              id: 1,
              name: 'Promo item 1',
            },
          ],
        },
        987: {
          id: 987,
          name: 'Product 5',
        },
      },
    };

    expect(
      mergeState(
        (STATE as unknown) as ProductsState,
        ({
          products: {
            987: {
              id: 987,
              name: 'Product 5',
            },
          },
        } as unknown) as ProductsState,
      ),
    ).toStrictEqual(updatedState);
  });

  it('should update state items array as a whole', () => {
    const updatedState = {
      loading: false,
      products: {
        123: {
          id: 123,
          name: 'Product 1',
        },
        456: {
          id: 456,
          name: 'Product 3',
        },
        789: {
          id: 789,
          name: 'Product 4',
          promos: [
            {
              id: 1,
              name: 'Promo item 1',
            },
            {
              id: 2,
              name: 'Promo item 2',
            },
          ],
        },
      },
    };

    expect(
      mergeState(
        (STATE as unknown) as ProductsState,
        ({
          products: {
            789: {
              promos: [
                {
                  id: 1,
                  name: 'Promo item 1',
                },
                {
                  id: 2,
                  name: 'Promo item 2',
                },
              ],
            },
          },
        } as unknown) as ProductsState,
      ),
    ).toStrictEqual(updatedState);
  });
});
