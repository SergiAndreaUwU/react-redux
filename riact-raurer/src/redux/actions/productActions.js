import * as types from "./actionTypes";
import * as productsApi from "../../api/productsApi"; 

export function loadProductSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function createProductSuccess(product) {
  return { type: types.CREATE_PRODUCTS_SUCCESS, product };
}

export function updateProductSuccess(products) {
  return { type: types.UPDATE_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return function(dispatch) {
    return productsApi 
      .getProducts() 
      .then(products => {
        dispatch(loadProductSuccess(products));
      })
      .catch(error => {
        throw error;
      });
  };
}

// export function saveProduct(product) {
//   //eslint-disable-next-line no-unused-vars
//   return function(dispatch, getState) {
//     return productsApi //this
//       .saveCourse(product) //this
//       .then(savedProduct => {
//         product.id
//           ? dispatch(updateProductSuccess(savedProduct))
//           : dispatch(createProductSuccess(savedProduct));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// }
