import actionTypes from '../constants/actionTypes';

const initialState = {
    orders: [],
    total: 0
};
function findProductsIndex(produdct, id) {

    return produdct.findIndex((product) => product.id === id);
}

const shopReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.SHOP_ADD_PRODUCT: {
            return Object.assign({}, state, {
                orders: [...state.orders, action.payload],
                total: state.total + action.payload.price
            });
        };
          /*  case actionTypes.SHOP_UPDATE_PRODUCT:{
                let existingItemIndex = findProductsIndex(state, action.payload.id);
                if (state[existingItemIndex].units === 0 && action.payload.units === -1) {
                    break;
                }
                state[existingItemIndex].units += action.payload.units;
                return state.concat([]);
            }*/
        case actionTypes.SHOP_CLEAR: {
            return {orders:[], total: 0}
        };
        case actionTypes.SHOP_DELETE_PRODUCT: {
           
            let index = findProductsIndex(state, action.payload.id);
            return [...state.slice(0, index), ...state.slice(index+1)];
        };

        default:
            return state;
    }
}

export default shopReducer;