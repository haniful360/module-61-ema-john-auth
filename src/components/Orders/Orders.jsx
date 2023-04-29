import React, { useState } from 'react';
import './Orders.css'
import Cart from '../Cart/Cart'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { BiCreditCardFront } from 'react-icons/bi';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {

    const saveCart = useLoaderData();
    const [cart, setCart] = useState(saveCart)

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }

    // console.log(products);
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <Link to='/checkout'>
                        <button className='review-proceed-btn'>
                            <span>Proceed Checkout</span>
                            <BiCreditCardFront className='icon'></BiCreditCardFront>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;