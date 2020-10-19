import axios from 'axios';
import { Product } from 'src/pages/products/types';
import { handleResponse } from 'src/pages/products/api/helpers';

const URL = 'https://www.alza.cz/Services/RestService.svc/v2/products';

export const fetchProducts = () => {
  const body = {
    filterParameters: {
      id: 18855843,
      isInStockOnly: false,
      newsOnly: false,
      wearType: 0,
      orderBy: 0,
      page: 1,
      params: {
        tId: 0,
        v: [],
      },
      producers: [],
      sendPrices: true,
      type: 'action',
      typeId: '',
      branchId: '',
    },
  };

  return axios.post<{ data: Product[] }>(URL, body).then(handleResponse);
};
