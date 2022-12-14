import type { AspidaClient, BasicHeaders } from 'aspida';
import { dataToURLString } from 'aspida';

import type { Methods as Methods0 } from './shops';
import type { Methods as Methods1 } from './shops/_shopId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/shops';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    shops: {
      _shopId: (val1: number) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          /**
           * ショップの詳細を取得する
           * @returns ショップ詳細のレスポンス
           */
          get: (
            option?:
              | { headers?: Methods1['get']['reqHeaders'] | undefined; config?: T | undefined }
              | undefined
          ) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          /**
           * ショップの詳細を取得する
           * @returns ショップ詳細のレスポンス
           */
          $get: (
            option?:
              | { headers?: Methods1['get']['reqHeaders'] | undefined; config?: T | undefined }
              | undefined
          ) =>
            fetch<Methods1['get']['resBody'], BasicHeaders, Methods1['get']['status']>(
              prefix,
              prefix1,
              GET,
              option
            )
              .json()
              .then((r) => r.body),
          put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(
              prefix,
              prefix1,
              PUT,
              option
            ).send(),
          $put: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix1, PUT, option)
              .send()
              .then((r) => r.body),
          delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(
              prefix,
              prefix1,
              DELETE,
              option
            ).send(),
          $delete: (option?: { config?: T | undefined } | undefined) =>
            fetch<void, BasicHeaders, Methods1['delete']['status']>(prefix, prefix1, DELETE, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      /**
       * @returns ショップ一覧のレスポンス
       */
      get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              headers?: Methods0['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(
          prefix,
          PATH0,
          GET,
          option
        ).json(),
      /**
       * @returns ショップ一覧のレスポンス
       */
      $get: (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined;
              headers?: Methods0['get']['reqHeaders'] | undefined;
              config?: T | undefined;
            }
          | undefined
      ) =>
        fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(
          prefix,
          PATH0,
          GET,
          option
        )
          .json()
          .then((r) => r.body),
      /**
       * @param option.body - 登録したい店舗一覧
       */
      post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(
          prefix,
          PATH0,
          POST,
          option,
          'FormData'
        ).send(),
      /**
       * @param option.body - 登録したい店舗一覧
       */
      $post: (option: { body: Methods0['post']['reqBody']; config?: T | undefined }) =>
        fetch<void, BasicHeaders, Methods0['post']['status']>(
          prefix,
          PATH0,
          POST,
          option,
          'FormData'
        )
          .send()
          .then((r) => r.body),
      $path: (
        option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined
      ) => `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
