/* eslint-disable */
import type { ReadStream } from 'fs';
import type * as Types from '../@types';

export type Methods = {
  get: {
    reqHeaders?: Types.Authorization | undefined;
    query?: (Types.Limit & Types.Offset) | undefined;
    status: 200;

    /** ショップ一覧のレスポンス */
    resBody: {
      data: Types.Shop[];
    };
  };

  post: {
    status: 201;
    reqFormat: FormData;

    /** 登録したい店舗一覧 */
    reqBody: {
      /** 店舗情報 */
      file: File | ReadStream;
    };
  };
};
