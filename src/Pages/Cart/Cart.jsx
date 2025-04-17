import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/Contet';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 30;
  const totalAmount = subtotal + deliveryFee;

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    if (subtotal > 0) {
      navigate('/order');
    }
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-header">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {food_list?.map((item) => {
          const quantity = cartItems[item._id];
          if (quantity > 0) {
            return (
              <div className="cart-items-row" key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹{item.price.toFixed(2)}</p>
                <p>{quantity}</p>
                <p>₹{(item.price * quantity).toFixed(2)}</p>
                <button 
                  onClick={() => handleRemove(item._id)} 
                  className="remove-button" 
                  aria-label={`Remove ₹{item.name}`}
                >
                  &times;
                </button>
              </div>
            );
          }
          return null;
        })}

        {subtotal === 0 && (
          <div className="empty-cart-msg">Your cart is currently empty.</div>
        )}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-row">
            <span>Subtotal</span>
            <span>₹{subtotal.toFixed(2)}</span>
          </div>
          <div className="cart-total-row">
            <span>Delivery Fee</span>
            <span>₹{deliveryFee.toFixed(2)}</span>
          </div>
          <div className="cart-total-row total">
            <strong>Total</strong>
            <strong>₹{totalAmount.toFixed(2)}</strong>
          </div>
          <button 
            onClick={handleCheckout} 
            disabled={subtotal === 0}
            className={`checkout-button ₹{subtotal === 0 ? 'disabled' : ''}`}
          >
            Proceed to Checkout
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it below:</p>
          <div className="promo-input-group">
            <input type="text" placeholder="Enter promo code" />
            <button className="apply-button">Apply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
