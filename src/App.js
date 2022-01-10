import React, { Component } from 'react'
import {Layout, Card, Header} from './Components'

export default class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: '1500', img:'/assets/tomate.jpg', id: 1},
      {name: 'Arbejas', price: '2000',img:'/assets/arbejas.jpg',id: 2},
      {name: 'lechuga', price: '500', img:'/assets/lechuga.jpg',id: 3}
    ],

    cart:[],
    isCartVisible: false,
  }

 addToCart = (producto) => {
    //ya se encuentra agregado
    const { cart } = this.state;
    if(cart.some((item) => item.name === producto.name)) {
      const newCart = cart.map((item) => item.name === producto.name 
      ? ({
        ...item,
        cantidad: item.cantidad + 1
      })
      : item
      )

      return this.setState({cart: newCart})
    }


    return this.setState({
      cart: [...cart, {...producto, cantidad: 1}]
    })
  }

  showCart = () => {
    return this.setState({isCartVisible: !this.state.isCartVisible})
  }

  render() {
    return (
      <div>
        <Header cart={this.state.cart} showCart={this.showCart} isCartVisible={this.state.isCartVisible}/>
        <Layout>
          <main>
            <h1>Tienda</h1>
            <div className="container cards-container">
              {
                this.state.productos.map((producto) => (
                  <Card
                    key={producto.id}
                    addToCart={this.addToCart}
                    producto={producto}
                  />
                ))
              }
            </div>
          </main>
        </Layout>
      </div>
    )
  }
}

