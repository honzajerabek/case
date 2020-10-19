import { selectCarouselProducts } from 'src/pages/products/selectors';
import { ProductsState } from 'src/pages/products/reducer';

describe('products.selectors', () => {
  describe('selectCarouselProducts', () => {
    const state = {
      loading: false,
      products: {
        1: { id: 1, is_action: true },
        2: { id: 2 },
        3: { id: 3, is_action: true },
        4: { id: 4 },
        5: { id: 5, is_action: true },
        6: { id: 6, is_action: true },
        7: { id: 7, is_action: true },
        8: { id: 8 },
        9: { id: 9, is_action: true },
        10: { id: 10, is_action: true },
        11: { id: 11, is_action: true },
        12: { id: 12, is_action: true },
        13: { id: 13, is_action: true },
        14: { id: 14, is_action: true },
      },
    };

    it('should select carousel product', () => {
      const expected = [
        { id: 1, is_action: true },
        { id: 3, is_action: true },
        { id: 5, is_action: true },
        { id: 6, is_action: true },
        { id: 7, is_action: true },
        { id: 9, is_action: true },
        { id: 10, is_action: true },
      ];

      expect(
        selectCarouselProducts((state as unknown) as ProductsState),
      ).toStrictEqual(expected);
    });
  });
});
