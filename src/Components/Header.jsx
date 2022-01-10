import React, { Component } from 'react'
import DisplayCart from './DisplayCart';
import Bubble from './Bubble'

export default class Header extends Component {
    render() {
        const { cart, showCart, isCartVisible } = this.props;

        const total = cart.reduce((acc, elem) => acc + elem.cantidad, 0);
        return (
            <header className="container nav-container">
                <h2>Shop</h2>
                <div className="btn-container">
                    <button className="cart-btn" onClick={showCart}>
                        Carrito
                        {total > 0 ? <Bubble value={total} /> : null}
                    </button>
                    {isCartVisible ? <DisplayCart cart={cart}/> : null}
                </div>
            </header>
        )
    }
}
