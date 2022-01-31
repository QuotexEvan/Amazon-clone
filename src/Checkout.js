import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ cart }, dispatch] = useStateValue();
    
    return (
        <div className='checkout'>
            <div className="checkout_list">
                <img className="checkout_ad" src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png" alt="" />
                <div className="checkout_listItems">
                    <p className='checkout_title'>
                        <h1 className='checkout_titleHeading'>Your Shopping Cart</h1>
                     <p className='checkout_titlePrice'>Price</p>
                    </p>
                    
                    {cart.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            price={item.price}
                            title={item.title}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="checkout_total">
              <Subtotal/>
            </div>
        </div>
    )
}


export default Checkout
