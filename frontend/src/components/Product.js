import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
export default function Product(props){
    const {product}=props
   return(
       <div className="ban">
        <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
         <img  className="medium" src={product.image} alt={product.name}/>
         </Link>
     <div className="card-body">
     <Link to={`/product/${product._id}`}>
         <h5> {product.name}</h5>
      </Link>
        <Rating
        rating= {product.rating}
        numReview={product.numReview}> 
        </Rating>
         <div className="price"> $ {product.price} </div>
     </div>
    </div>
    </div>
    )
}
