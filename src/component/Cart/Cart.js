import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    

    let total = 0;
    for (let i = 0; i <cart.length; i++) {
        const product = cart[i];
        total = product.sallary;
        
    }
    
  
    return (
        <div>
            <h3>this is cart: {cart.length}</h3>
    <h4>salary: {total}</h4>
        </div>
    );
};

export default Cart;