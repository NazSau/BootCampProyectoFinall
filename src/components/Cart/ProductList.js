import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';
import ProductItem from "./ProductoItem";
import Cart from './index'

class ProductsList extends React.Component {
    renderProducts() {
        return (
            this.props.products.map((p) => {
                return (
                    <Col className='productsList' xs={12} sm={6} md={4} key={p.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <Grid>
                <Row><h1>Carrito</h1></Row>
                <Row><Cart /></Row>
                <Row style={{margin:'15px'}}>
                    {this.renderProducts()}
                </Row>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}
export default connect(mapStateToProps, mapActionsToProps)(ProductsList);