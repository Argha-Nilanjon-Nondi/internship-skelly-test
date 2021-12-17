import React, { Component, Fragment } from 'react'

export default class PDprogress extends Component {
    render() {
        return (
          <Fragment>
            <div class="dilevery-step-box">
              <button class="dilevery-status-btn">
                <i class="fas fa-shopping-cart"></i>
              </button>
              <div class="dilevery-status-gap"></div>
              <button class="dilevery-status-btn dilevery-status-btn-clicked">
                <i class="fas fa-shipping-fast"></i>
              </button>
            </div>
          </Fragment>
        );
    }
}
