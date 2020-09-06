import React, { useState } from 'react';
import userdata from '../../data/data.json';
import Userdata from '../Userdata/Userdata';
import Cart from '../Cart/Cart';

const User = () => {
    const userinfo = userdata;
    const [friend, setfriend] = useState(userinfo);

    const [cart, setcart] = useState([]);
    const addingfriend = (friend) =>{
        const newCart = [...cart, friend];
        setcart(newCart);
    }

    return (
        <div>
        {
          friend.map(fd => <Userdata friend={fd} hendleaddfriend ={addingfriend} >

          </Userdata>)
        }
        <Cart  cart = {cart}></Cart>
        </div>
    );
};

export default User;