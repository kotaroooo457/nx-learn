/* eslint-disable */
import type * as Types from '../../@types';

export type Methods = {
  /** ショップの詳細を取得する */
  get: {
    reqHeaders?: Types.Authorization | undefined;
    status: 200;
    /** ショップ詳細のレスポンス */
    resBody: Types.Shop;
  };

  put: {
    status: 200;
  };

  delete: {
    status: 200;
  };
};
