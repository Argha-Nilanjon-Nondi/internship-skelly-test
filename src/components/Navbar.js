import React, { Component, Fragment } from 'react'

export default class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             is_nav_open:false,
        }
    }
    
    toggleNavbar=()=>{
if(this.state.is_nav_open===true){
    this.setState({is_nav_open:false})
}
if (this.state.is_nav_open === false) {
  this.setState({ is_nav_open: true });
}
    }
    render() {
        return (
          <Fragment>
            {" "}
            <header>
              <div class="header-box">
                <div class="nav-logo">
                  <i class="fab fa-shopware nav-logo-img"></i>
                  <p class="nav-logo-text">
                    <span>E-</span>Shop
                  </p>
                </div>
                <div class="header-box-middle">
                  <nav class="nav">
                    <ul class={`nav-wrapper nav-catagory ${this.state.is_nav_open===true?"active":""}`}>
                      <li class="nav-catagory-item">
                        <a href="#">Men</a>
                      </li>
                      <li class="nav-catagory-item">
                        <a href="#">Women</a>
                      </li>
                      <li class="nav-catagory-item">
                        <a href="#">Kids</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="nav-account">
                  <ul>
                    <li class="nav-account-item">
                      <i class="fas fa-search"></i>
                    </li>
                    <li class="nav-account-item">
                      <i class="fas fa-shopping-cart"></i>
                    </li>
                    <li class="nav-account-item">
                      <i class="fas fa-user"></i>
                    </li>
                    <li>
                      <button class="nav-toggle-btn hamburger-btn" onClick={this.toggleNavbar}>
                        <i class="fas fa-bars"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </Fragment>
        );
    }
}
