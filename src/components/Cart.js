import React, { Component, Fragment } from 'react'

export default class Cart extends Component {
    render() {
        return (
          <Fragment>
            <div class="cart-box">
              <p class="cart-text">Your cart</p>
              <div class="cart-container">
                <div class="cart-item-collection">
                  {this.props.items.map((item) => (
                    <div class="cart-item">
                      <img src={item["img_url"]} class="cart-item-img" />
                      <div class="cart-item-info">
                        <p>{item["product_name"]}</p>
                        <p>{item["company_name"]}</p>
                        <span>#{item["id"]}</span>
                      </div>
                      <p class="cart-item-prize">${item["prize"]}</p>
                    </div>
                  ))}
                </div>
                <button class="form-btn cart-total-cost">
                  <span>Total cost:</span> <strong>$15,339</strong>
                </button>
                <div class="cart-gift-remind">
                  <i class="fas fa-shipping-fast"></i>
                  <p>
                    You are <strong>$30.02</strong> away from free shipping
                  </p>
                </div>
              </div>
            </div>
          </Fragment>
        );
    }
}
