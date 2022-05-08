import React from "react";

const Payment = () => {
  return (
    <>
      <div className='pay_page'>
        <nav>
          <div className='nav_logo'>
            <img src='https://n.nordstrommedia.com/alias/nordstrom-rack-logo.svg' />
          </div>
          <div className='nav_cart'>
            <i class='uil uil-bag'></i>
          </div>
        </nav>
        <main>
          <div className='main_left'>
            <div className='main_first'>
              <h1>Checkout</h1>
              <span>Edit Shopping Bag</span>
              <h2>Delivery</h2>
              <span>Change shopping speed</span>
              <h3>Wed,5/11-Sat,5/14</h3>
              <h3>Free</h3>
              <div>
                <img
                  src={
                    "https://n.nordstrommedia.com/id/sr3/070d30a9-f1fa-433b-a161-81da6ab5f7d0.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                  }
                  alt=''
                />
                <img
                  src={
                    "https://n.nordstrommedia.com/id/sr3/ab785994-2ad7-47a4-b600-230e274deac3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                  }
                  alt=''
                />
                <img
                  src={
                    "https://n.nordstrommedia.com/id/sr3/372dcf56-1b70-4e50-982b-0527cdf46ffd.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
                  }
                  alt='logo'
                />
                <img
                  src={
                    "https://n.nordstrommedia.com/id/sr3/558b1924-4895-44c6-9fcf-5aee430d14e7.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                  }
                  alt='logo'
                />
                <img
                  src={
                    "https://n.nordstrommedia.com/id/sr3/af742c16-35b9-454f-b101-f79d7e2fc71d.jpeg?crop=pad&pad_color=FFF&format=jpeg&trim=color&trimcolor=FFF&w=780&h=838"
                  }
                  alt='logo'
                />
              </div>
            </div>
            <div className='main_sec'>
              <h2>Shipping address</h2>
              <h3>*Required</h3>
              <label htmlFor='first_name'>First name*</label>
              <input type='text' name='first_name' />
              <label htmlFor='last_name'>Last name*</label>
              <input type='text' name='last_name' />
              <span>Free shipping to a Nordstrom or Nordstrom Rack Store</span>
              <label htmlFor='address'>Address*</label>
              <input
                type='text'
                name='address'
                placeholder='Quickly find your addresss'
              />
            </div>
            <div className='main_third'>
              <h2>Payment</h2>
              <label htmlFor='number'>Card number*</label>
              <input
                type='tel'
                inputmode='numeric'
                pattern='[0-9\s]{13,19}'
                autocomplete='cc-number'
                maxlength='16'
                placeholder='xxxx xxxx xxxx xxxx'
                name='number'
                required
              />
              <label htmlFor='exp-date'>Expiration date*</label>
              <input type='month' name='exp-date' required />
              <label htmlFor='sec-code'>Security code*</label>
              <input
                type='password'
                inputmode='numeric'
                pattern='[0-9\s]{13,19}'
                autocomplete='cc-number'
                maxlength='3'
                placeholder='CVV'
                name='sec-code'
                className='inp_cvv'
                required
              />
              <label htmlFor='bil'>Billing address</label>
              <input className='inp_check' type='checkbox' name='bil' /> Same as
              shipping address
              <label htmlFor='first_name'>First name*</label>
              <input type='text' name='first_name' />
              <label htmlFor='last_name'>Last name*</label>
              <input type='text' name='last_name' />
              <label htmlFor='address'>Address*</label>
              <input
                type='text'
                name='address'
                placeholder='Quickly find your addresss'
              />
            </div>
            <div className='main_four'>
              <h2>Review order</h2>
              <div>
                <span>Your items</span>
                <span>$183.82</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div>
                <span>Estimated tax</span>
                <span>$18.84</span>
              </div>
              <hr />
              <div className='total_div'>
                <span>Estimated total</span>
                <span>$202.66</span>
              </div>
              <div className='order_submit'>Review Order</div>
            </div>
          </div>
          <div className='main_right'>
            <div className='right_first'>
              <h2>Review order</h2>
              <div>
                <span>Your items</span>
                <span>$183.82</span>
              </div>
              <div>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div>
                <span>Estimated tax</span>
                <span>$18.84</span>
              </div>
              <hr />
              <div className='total_div'>
                <span>Estimated total</span>
                <span>$202.66</span>
              </div>
              <div className='order_submit'>Review Order</div>
              <div className='right_text'>
                Need help? Call 1.888.966.6283 or chat with us
              </div>
            </div>
            <div className='right_sec'>
              <h2>
                <i className='fas fa-heart'></i> Nordstrom Cares
              </h2>
              <h3>
                Big Brothers Big Sisters served 109,254 children in 2020,
                inspiring mentoring relationships, and providing youth and
                families safe, proven, accessible, and free programs in all 50
                states.
              </h3>
              <h4>
                All donations are non-refundable and not eligible for tax
                deductions. 100% of your donation goes to BBBS. Visit our Terms
                & Conditions for more information.
              </h4>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Payment;
