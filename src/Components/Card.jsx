import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        const { producto, addToCart} = this.props;

        return (
            <div className="card-container">
                <img src={producto.img} alt={producto.name} width="300px"/>

                <div className="container body-container">
                    <h3>{producto.name}</h3>
                    <span>${producto.price}</span>
                    <button onClick={() => addToCart(producto)}>Agregar al carro</button>
                </div>
            </div>
        )
    }
}
