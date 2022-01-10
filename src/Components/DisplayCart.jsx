import React, { Component } from 'react'

export default class DisplayCart extends Component {
    render() {
        const { cart } = this.props;
        return (
            <ul className="cart-container">
                {
                    cart.map((item) => (
                        <li key={item.id} className="container item">
                            <img src={item.img} alt={item.name} />
                            <h4>{item.name}</h4>
                            <span>{item.cantidad}</span>
                        </li>
                    ))
                }
            </ul>
        )
    }
}
