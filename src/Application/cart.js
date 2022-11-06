import React from 'react'
 import '../Css/cart.css'
 import Ipad from './Images/Ipad.png'
 import Iphone from './Images/Iphone.png'
function Cart() {
  return (
    <div>
        <div className="basket" style={{marginBottom: "10rem"}}>
                <div className="basket-module">
                  <label for="promo-code">Enter a coupon code</label>
                  <input id="promo-code" type="text" name="promo-code" maxlength="5" className="promo-code-field, input"/>
                  <button className="promo-code-cta, button">Apply</button>
                </div>
                <div className="basket-labels">
                  <ul>
                    <li className="item item-heading">Item</li>
                    <li className="price">Price</li>
                    <li className="quantity">Quantity</li>
                    <li className="subtotal">Subtotal</li>
                  </ul>
                </div>
                <div className="basket-product">
                  <div className="item">
                    <div className="product-image">
                      <img src={Ipad} alt="Placholder Image 2" className="product-frame img"/>
                    </div>
                    <div className="product-details">
                      <h1 className='h1'><strong><span className="item-quantity">1</span></strong>Ipad</h1>
                      <p className='p'><strong>Navy</strong></p>
                      <p className='p'>Product Code - 1</p>
                    </div>
                  </div>
                  <div className="price">1000.00</div>
                  <div className="quantity">
                    <input type="number" value="1" min="1" className="quantity-field, input"/>
                  </div>
                  <div className="subtotal">1000.00</div>
                  <div className="remove">
                    <button className='button'>Remove</button>
                  </div>
                </div>
                <div className="basket-product">
                  <div className="item">
                    <div className="product-image">
                      <img src={Iphone} alt="Placholder Image 2" className="product-frame img"/>
                    </div>
                    <div className="product-details">
                      <h1 className='h1'><strong><span className="item-quantity">1</span></strong>Iphone</h1>
                      <p className='p'><strong>Navy</strong></p>
                      <p className='p'>Product Code - 2</p>
                    </div>
                  </div>
                  <div className="price">1000.00</div>
                  <div className="quantity">
                    <input type="number" value="1" min="1" className="quantity-field, input"/>
                  </div>
                  <div className="subtotal">1000.00</div>
                  <div className="remove">
                    <button className='button'>Remove</button>
                  </div>
                </div>
              </div>
              <aside>
                <div className="summary">
                  <div className="summary-total-items"><span className="total-items"></span> Cart</div>
                  <div className="summary-subtotal">
                    <div className="subtotal-title">Subtotal</div>
                    <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                  </div>
                  <div className="summary-total">
                    <div className="total-title">Total</div>
                    <div className="total-value final-value" id="basket-total">130.00</div>
                  </div>
                  <div className="summary-checkout">
                    <button className="checkout-cta, button">Checkout</button>
                  </div>
                </div>
              </aside>
    </div>
  )
}

export default Cart