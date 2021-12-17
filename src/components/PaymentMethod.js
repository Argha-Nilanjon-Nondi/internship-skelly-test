import React, { Component, Fragment } from 'react'

export default class PaymentMethod extends Component {
    render() {
        return (
          <Fragment>
            <div class="payment-box">
              <p class="payment-text">Payment method</p>
              <div class="payment-option-box">
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-visa"></i>
                </button>
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-amazon-pay"></i>
                </button>
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-apple-pay"></i>
                </button>
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-mastercard"></i>
                </button>
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-discover"></i>
                </button>
                <button class="form-btn payment-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="payment"
                      class="payment-option-radio"
                    />
                  </label>
                  <i class="fab fa-cc-paypal"></i>
                </button>
              </div>
            </div>
          </Fragment>
        );
    }
}
