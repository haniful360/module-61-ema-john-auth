import React from 'react';
import './Product.css'
import { FaShoppingCart} from 'react-icons/fa';

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p className='product-price'>Price: ${price}</p>
            <div className='product-info'>
                <p>Manufacturer:  {seller}</p>
                <p>Rating: {ratings} star </p>
            </div>
        <button onClick={() =>handleAddToCart(props.product)} className='btn-cart'><span className='cart-icon'>
        Add To Cart <FaShoppingCart ></FaShoppingCart>
            </span></button>
        </div>
    );
};

export default Product;