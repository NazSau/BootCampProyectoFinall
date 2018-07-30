import React, { Component } from 'react';
import { connect } from 'react-redux';
import shopActions from '../actions/shopActions';

class Producto extends Component{
	
	addProduct = (name, description, price, id) => {
		this.props.addProduct(name, description, price, id);
	}


	render() {
		return(
		<div key={this.props.id}>{this.props.name} | {this.props.description} | {this.props.price} | <button onClick={() => {
			this.addProduct(this.props.name, this.props.description, this.props.price, this.props.id);}}>Agregar al carrito</button></div>
		);
	}
}

export default Producto;