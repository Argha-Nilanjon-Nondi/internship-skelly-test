import React, { Component, Fragment } from 'react'

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default class CommitPayment extends Component {
    pay=()=>{
         const res = loadScript(
           "https://checkout.razorpay.com/v1/checkout.js"
         );

         if (!res) {
           alert("Razorpay SDK failed to load. Are you online?");
           return;
         }
    }
    render() {
        return (
          <Fragment>
            <div class="previous-page-box">
              <i class="fas fa-arrow-left"></i>
              <p class="previous-page">Back</p>
            </div>
            <div class="payment-product-btn-collection">
              <button class="form-btn" style={{ marginRight: "1rem" }}>
                Continue Shopping
              </button>
              <button class="form-btn form-btn-clicked payment-product-btn" onClick={this.pay}>
                Proceed to payment
              </button>
            </div>
          </Fragment>
        );
    }
}
