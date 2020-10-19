enum ItemType {
  COMMODITY = 'Commodity',
}

export type Promo = {
  id: number;
  name: string;
  img: string;
  count: number;
  price: string;
  is_enabled: boolean;
  order: number;
};

export type Product = {
  availLegend: any;
  img: string;
  itemType: ItemType.COMMODITY;
  userOwns: boolean;
  code: string;
  canCashBack: boolean;
  variant_type: number;
  rating: number;
  cprice: any;
  supplierCode: string;
  advertising: string;
  is_special_service: boolean;
  type: number;
  categoryName: any;
  spec: string;
  avail_postfix: string;
  price: string;
  action_name: string;
  id: number;
  promos: Promo[];
  can_buy: boolean;
  order: number;
  avail: string;
  maxCanBuy: number;
  orderItemId: any;
  end_time: any;
  promo_cnt: number;
  canChangeQuantity: boolean;
  url: string;
  start_time: any;
  is_action: boolean;
  catalog_number: string;
  name: string;
  minimumAmount: number;
  priceNoCurrency: number;
  avail_color: string;
  avail_postfix2: any;
  amountInPack: number;
  inBasket: number;
  cashBackType: number;
  priceWithoutVat: string;
};
