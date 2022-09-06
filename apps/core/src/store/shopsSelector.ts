import { selector } from 'recoil';

import { client } from '../libs/axiosClient';

export const shopListState = selector({
  key: 'shopList',
  get: async () => {
    const res = await client.shops.get();
    return res.body.data;
  },
});
