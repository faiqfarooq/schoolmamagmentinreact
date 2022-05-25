import React, { useState, useEffect } from "react";


const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button  onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button className="main-btn " onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="row float-right totalboundry">
      <div className="col-6 total 
       py-5">
        <span>Total Price  </span>
        <span className="totalpr"> {price} rupee</span>
        
      </div>
     <div className="col-2"></div>
     <div className="col-4 mx-auto my-auto ">
       <button className="main-btn"> Payment</button>
     </div>
      </div>





      <div className="container mt-5 px-5">
        <div className="mb-4">
          <h2>Confirm order and pay</h2>
          <span>please make the payment, after that you can enjoy all the features and benefits.</span>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <h6 className="text-uppercase">Payment details</h6>
              <div className="inputbox mt-3"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>Name on card</span> </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <i className="fa fa-credit-card" /> <span>Card Number</span> 
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex flex-row">
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>Expiry</span> </div>
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>CVV</span> </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 mb-4">
                <h6 className="text-uppercase">Billing Address</h6>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>Street Address</span> </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>City</span> </div>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>State/Province</span> </div>
                  </div>
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2"> <input type="text" name="name" className="form-control-pay" required="required" /> <span>Zip code</span> </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 d-flex justify-content-between">
              {/* <span>Previous step</span> */}
              <button className="btn btn-success px-3">Pay {price}rs</button>
            </div>
          </div>
          <div className="col-md-4">
            <div className="cardpayment card-blue p-3 text-white mb-3">
              <span>You have to pay</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">{price}</h1> <span>.99 Rupee</span>
              </div>
              <span>Enjoy all the features and perk after you complete the payment</span>
              <a href="#" className="yellow decoration">Know all the features</a>
              <div className="hightlight">
                <span>100% Guaranteed support and update for the next 5 years.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </article>
  );
};

export default Cart;
