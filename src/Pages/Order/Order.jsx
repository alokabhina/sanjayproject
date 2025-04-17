import React, { useState, useContext } from 'react';
import { StoreContext } from '../../Context/Contet';
import './Order.css';

const Order = () => {
  const { getTotalCartAmount, clearCart } = useContext(StoreContext);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Calculate totals
  const cartTotal = getTotalCartAmount();
  const deliveryFee = cartTotal === 0 ? 0 : 2;
  const totalAmount = cartTotal + deliveryFee;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (cartTotal === 0) return;
    
    alert('Order submitted successfully!');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      country: '',
      phone: ''
    });
    
    // Clear cart and set submitted state
    clearCart();
    setOrderSubmitted(true);
  };

  // Show empty state if cart is empty or order was submitted
  const showEmptyState = orderSubmitted || cartTotal === 0;

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={formData.street}
          onChange={handleChange}
          required
        />

        <div className="multi-fields">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="multi-fields">
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="place-order-right">
        {showEmptyState ? (
          <div className="empty-cart-message">
            <h3>Thank you for your order!</h3>
            <p>Your cart is now empty.</p>
            <Link to="/menu" className="continue-shopping">Continue Shopping</Link>
          </div>
        ) : (
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>₹{cartTotal.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>₹{deliveryFee.toFixed(2)}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>₹{totalAmount.toFixed(2)}</b>
              </div>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Order;