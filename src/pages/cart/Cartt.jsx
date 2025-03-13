import React from 'react';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import {useContext} from 'react';
import {CartItem} from './cart-item';
import './cart.css';
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount()

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        
      </div>
      <div className="cartItems">
        {PRODUCTS.map((Product) =>{
          if (cartItems[Product.id] !==0){
            return <CartItem data ={Product} />
          }
        })}
      </div>

 {totalAmount > 0 ? (
  
      <div className='checkout'>
        <p>Subtotal: ${totalAmount}</p>
        <button onClick={()=> navigate("/")}>Shop More</button>
        <button>Checkout</button>
      </div>
      ):(
        <h1 style={{ marginTop: "50px" }}>Add to Cart</h1>
      )}
    </div>
  )}

export default Cart;
