import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css'
import Producto from '../../components/Product';
// @Actions
import productsActions from '../../actions/productsActions';
import shopActions from '../../actions/shopActions';

class Products extends Component {

	componentDidMount() {
		// Este getProducts debería conectarse a un servicio y traer de ahi los productos
		// Para nuestro jemeplo, los productos están hardcodeados (puestos a mano) en el reducer
		// Si quieren agregar o modificar productos, lo hacen directamente desde el reducer
		//this.props.getProducts();
		// Dejo este getProducts aquí como ejemplo de donde debería llamarse para traer la información desde un servicio
	}

    DeleteProduct(id){
        this.props.DeleteProduct(id);

    }
	
    render() {
    	const { products, shop } = this.props;

    	// renderProducts es una constante que tiene los productos,
    	// ver que luego se renderiza abajo de <h1>Productos</h1>
    	const renderProducts = products.list ? products.list.map((prod) => {
    		return (
    			// La idea sería crear un componente que maneje la muestra de productos
    			// Y utilizarlo en lugar de el div <div key={index}>{prod.name}</div> que usa acá
    			// Por ejemplo <Product name={prod.name} description={prod.description} price={prod.name} />
    			// y ese componente <Product /> a su vez podría usar otros componentes, por ejemplo
    			// un componente <ProductHeader> que se encargue de mostrar titulo y precio
                <Producto name = {prod.name} description ={prod.description} price = {prod.price}/>
    		);
    	}) : null;

    	// Lo siguiente son los productos agregados al carrito. Lo mismo que el caso anterior,
    	// Mover todo a componentes, identificar y crearlos
    	// Por ejemplo un componente llamado <Orders> que reciba por props los productos
    	// Podrían crear una acción para quitar el producto del carrito
    	const orders = shop.orders.length ? shop.orders.map((product) => {
    		return (
    			<div key={product.id}> {product.name} - ${product.price} <button onClick ={() => {
                    this.DeleteProduct(product.id);
                }} > X </button></div>
    		);
    	}) : <p> No hay productos en el carrito </p>;
        return (
        	<div>
	            <h1>Productos</h1>
	            {renderProducts}
	            <h1>Carrito</h1>
	            {orders}
                <h3>{shop.total}</h3>
                <button onClick={this.props.clearShop}>Vaciaaaaa</button>
            </div>
        );
    }
}

/*
connect conecta la aplicación al store. Permite agregar datos y funciones a 
las props.
*/

export default connect(
    state => {
        return {
            products: state.productsReducer, // Saco los productos del reducer
            shop: state.shopReducer
        }
    },{
        addProduct: shopActions.addProduct, // Uso una acción para agregar al carrito
        getProducts: productsActions.getProducts,
        clearShop: shopActions.clearShop,
        DeleteProduct: shopActions.DeleteProduct
    }
)(Products);