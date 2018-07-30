import actionTypes from '../constants/actionTypes';

const addProduct = ( name, description, price, id) => ({
	type: actionTypes.SHOP_ADD_PRODUCT,
	payload: {
		name,
		description,
		price,
		id
	}
});
const DeleteProduct = (id) => ({
	type: actionTypes.SHOP_DELETE_PRODUCT,
	payload: {id}

});
//const UpdateProduct = {id, units}
const clearShop = () => ({
	type: actionTypes.SHOP_CLEAR
});

export default { addProduct, clearShop, DeleteProduct };