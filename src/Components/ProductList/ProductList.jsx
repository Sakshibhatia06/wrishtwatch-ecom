import React,{useContext} from 'react'
import './ProductList.css'
import {ShopContext} from '../ShopContext/ShopContext'
import { Link } from 'react-router-dom';

const ProductList = () => {
    const {filteredProducts,addToCart}=useContext(ShopContext);

  return (
    <div>
        <div className="product_list">
            <h2>Our Elegant Collections</h2>
            <div className="product_grid">
                {filteredProducts.map((product)=>{
                    const{id,image,title,price}=product;
                    return(
                        <div className='product_card' key={id}>
                           <Link to={`/product/${id}`} key={id}>
                           <img src={image} alt="" className='product_image' />
                            <div className="product_info">
                                <h4>{title}</h4>
                                <p>${price}</p>
                            </div>
                            </Link>
                            <button className='add-to-cart' onClick={()=>addToCart(product,id)}>Add To Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default ProductList