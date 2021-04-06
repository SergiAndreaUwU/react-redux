import * as types from "../actions/actionTypes";
import initialState from "../initialState";

export default function productReducer(state = initialState.products, action) {
  switch (action.type) {
    case types.CREATE_PRODUCTS_SUCCESS:
      return [...state, { ...action.product }];
    case types.UPDATE_PRODUCTS_SUCCESS:
      return state.map((product) =>
        product.id === action.product.id ? action.product : product
      );
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;
    default:
      return state;
  }
}
