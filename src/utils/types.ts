// import PropTypes from 'prop-types';
import { ReactNode } from 'react';

// export const ingredientType = PropTypes.shape({
//   _id: PropTypes.string,
//   name: PropTypes.string,
//   type: PropTypes.string,
//   proteins: PropTypes.number,
//   fat: PropTypes.number,
//   carbohydrates: PropTypes.number,
//   calories: PropTypes.number,
//   price: PropTypes.number,
//   image: PropTypes.string,
//   image_mobile: PropTypes.string,
//   image_large: PropTypes.string,
//   __v: PropTypes.number,
// });

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
  _id: string;
  ingredients: Array<string>;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
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
  // key: string;
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

// export type TFormState = {
//   name?: string;
//   email?: string;
//   password?: string;
// };
