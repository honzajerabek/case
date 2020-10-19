import { AxiosResponse } from 'axios';
import keyBy from 'lodash/keyBy';

export const handleResponse = (response: AxiosResponse) => {
  const { data } = response;

  if (data.err) {
    throw new Error(data.msg);
  }

  return keyBy(data.data, 'id');
};
