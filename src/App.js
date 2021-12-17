import React, { Component } from "react";
import { Fragment } from "react";
import Cart from "./components/Cart";
import CommitPayment from "./components/CommitPayment";
import DileveryMethod from "./components/DileveryMethod";
import Navbar from "./components/Navbar";
import PaymentMethod from "./components/PaymentMethod";
import PDprogress from "./components/PDprogress";

const items = [
  {
    img_url: "/img/1.jpg",
    product_name: "T-shirt",
    company_name: "Summer vibes",
    id: "89589789",
    prize: 12.87,
  },
  {
    img_url: "/img/1.jpg",
    product_name: "T-shirt",
    company_name: "Summer vibes",
    id: "89589789",
    prize: 12.87,
  },
  {
    img_url: "/img/1.jpg",
    product_name: "T-shirt",
    company_name: "Summer vibes",
    id: "89589789",
    prize: 12.87,
  },
];

export default class App extends Component {
  render() {
    return (
      <Fragment>
       <Navbar></Navbar>

        <div class="container">
          <div class="container-box">
            <h1 class="shipping-intro">Shipping and Payment</h1>
            <div class="form-btn-collection">
              <button class="form-btn form-btn-clicked">Login</button>
              <button class="form-btn">Sing up</button>
            </div>
            <p class="shipping-greet">Shipping information</p>
            <div class="form-field-collection">
              <div class="form-field-box">
                <input
                  type="email"
                  name=""
                  class="form-input"
                  placeholder="Email"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  class="form-input"
                  placeholder="First name"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  class="form-input"
                  placeholder="Last name"
                  id=""
                />
                <input
                  type="tel"
                  name=""
                  class="form-input"
                  placeholder="Phone number"
                  id=""
                />
              </div>
              <div class="form-field-box">
                <input
                  type="text"
                  name=""
                  class="form-input"
                  placeholder="Address"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  class="form-input"
                  placeholder="City"
                  id=""
                />
                <input
                  type="text"
                  name=""
                  class="form-input"
                  placeholder="Postal code/Zip"
                  id=""
                />
                <select name="" class="form-input" id="">
                  <option value="Poland" selected>
                    Poland
                  </option>
                  <option value="India">India</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Brazil">Brazil</option>
                  <option value="America">America</option>
                </select>
              </div>
            </div>
          </div>
          <div class="container-box">
            <PDprogress></PDprogress>
            <div class="pharcase-box">
              <div class="payment-dilevery-box">
                <PaymentMethod></PaymentMethod>
                <DileveryMethod></DileveryMethod>
              </div>
              <Cart items={items}></Cart>
            </div>
          </div>
        </div>

        <div class="container container-btn">
          <CommitPayment></CommitPayment>
        </div>
      </Fragment>
    );
  }
}
