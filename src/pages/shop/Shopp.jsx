import React from 'react';
import { PRODUCTS } from '../../products';
import {Product} from './product';
import './shop.css';

export default function Shop() {
  return (
    <div className='shop'>
      <div className='shopTitle'>
       <h5 className="slideshow-text">Welcome to LapMart. Super market for your PC</h5>
      </div>
      <div className='products'>
        {""}
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id}/>

        ))}
      </div>
    </div>
  );
}
