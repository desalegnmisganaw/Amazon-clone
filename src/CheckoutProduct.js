import React from 'react'
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating, hideButton }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type:"Remove from basket",
      id:id,
      title:title,
      image:image,
      price:price,
      rating:rating

      
    });
  }



  return (
    <div className="checkoutProduct">
        <img className="checkoutProduct_image" src={image} alt="" />
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">{title}</p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{ price }</strong>
            </p>
           <div className="checkoutProduct_rating">
              {Array(rating)
                .fill()
                .map((_) =>(
                    <p>*</p>
                ))}
           </div>
           {!hideButton && (
             <button onClick={removeFromBasket}> Remove from basket</button>
           )}
             
        </div>
       
     </div>
      
    
  );
}

export default CheckoutProduct;
