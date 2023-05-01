import { ReactNode } from 'react';

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key: string;
};

export type TOrder = {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
};

export type TOrderNumber = {
  orderNumber: number;
};

export type TWsOrders = {
  orders: Array<TOrder>;
  total: number;
  totalToday: number;
};

export type TIngredientProps = {
  card: TIngredient;
};

export type TIngredientsProps = {
  data: Array<TIngredient>;
  title: string;
};

export type TConstructorItemProps = {
  ingredient: TIngredient;
  index: number;
  deleteIngredient: (key: string) => void;
};

export type TConstructorPrice = {
  totalPrice: number;
};

export type TDropItem = {
  index: number;
};

export type TModalProps = {
  children: ReactNode;
  title?: string;
  onClose: () => void;
};

export type TActiveLink = {
  isActive: boolean;
};

export type TUser = {
  name: string;
  email: string;
  password: string;
};

export type TOrderIngredient = {
  ingredient: TIngredient;
  order: TOrder;
};

export type TModalOpen = {
  modalIsOpen: boolean;
};

export type TOrderItem = {
  order: TOrder;
};

export type TOrders = {
  feedOrders?: Array<TOrder>;
  profileOrders?: Array<TOrder>;
};

export type TWsMiddleware = {
  wsInit: string;
  onError: string;
  onOpen: string;
  onClose: string;
  onMessage: string;
  wsSendOrder: string;
};

