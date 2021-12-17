import React, { Component, Fragment } from 'react'

export default class DileveryMethod extends Component {
    render() {
        return (
          <Fragment>
            {" "}
            <div class="dilevery-box">
              <p class="dilevery-text">Dilevery method</p>
              <div class="dilevery-option-box">
                <button class="form-btn dilevery-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="dilevery"
                      class="dilevery-option-radio"
                    />
                  </label>
                  <i class="fas fa-shipping-fast"></i>
                  <span class="dilevery-option-price">$12.00</span>
                </button>
                <button class="form-btn dilevery-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="dilevery"
                      class="dilevery-option-radio"
                    />
                  </label>
                  <i class="fas fa-shipping-fast"></i>
                  <span class="dilevery-option-price">$12.00</span>
                </button>
                <button class="form-btn dilevery-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="dilevery"
                      class="dilevery-option-radio"
                    />
                  </label>
                  <i class="fas fa-shipping-fast"></i>
                  <span class="dilevery-option-price">$12.00</span>
                </button>
                <button class="form-btn dilevery-option-btn">
                  <label>
                    <input
                      type="radio"
                      name="dilevery"
                      class="dilevery-option-radio"
                    />
                  </label>
                  <i class="fas fa-shipping-fast"></i>
                  <span class="dilevery-option-price">$12.00</span>
                </button>
              </div>
            </div>
          </Fragment>
        );
    }
}
