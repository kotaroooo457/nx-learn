/* eslint-disable */
export type Limit = {
  /** 1ページあたりの最大表示件数 */
  limit?: number | undefined;
};

export type Offset = {
  /** 何件目から取得するか */
  offset?: number | undefined;
};

export type Authorization = {
  /** 認証情報 */
  Authorization?: string | undefined;
};

export type ShopId = {
  /** ショップID */
  shopId: number;
};

/** 店舗 */
export type Shop = {
  id?: number | undefined;
  name?: string | undefined;
  telephoneNumber?: string | undefined;
  zipCode?: string | undefined;
  prefecture?: string | undefined;
  city?: string | undefined;
  businessHoursDescription?: string | undefined;
  latitude?: number | undefined;
  longitude?: number | undefined;
  address?: string | undefined;
  status?: string | undefined;
  isPublic?: boolean | undefined;
};
