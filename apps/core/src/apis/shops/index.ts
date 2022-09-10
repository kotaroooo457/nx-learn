/* eslint-disable */
import { mockMethods } from 'aspida-mock';
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

export default mockMethods<Methods>({
  get: () => ({
    status: 200,
    resBody: {
      data: [
        {
          id: 1,
          name: 'ドラッグストア',
          telephoneNumber: '00-0000-0000',
          zipCode: '0000000',
          address: '東京都渋谷区',
        },
        {
          id: 2,
          name: 'サンドラッグ',
          telephoneNumber: '11-1111-1111',
          zipCode: '1111111',
          address: '東京都新宿３丁目',
        },
        {
          id: 3,
          name: 'マツモトキヨシ',
          telephoneNumber: '22-2222-2222',
          zipCode: '1300022',
          address: '東京都墨田区',
        },
      ],
    },
  }),
});
