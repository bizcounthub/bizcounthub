import React from 'react';
import { Link } from 'react-router-dom';

import Menu from '../layout/Menu';
import NavbarTop from '../layout/NavbarTop';
import Footer from '../layout/Footer';

const layout = (props) => (
  <React.Fragment>
    <header id="mainHeader" className="main-header">
      <NavbarTop />
      {/* <div className="header-header bg-white">
        <div className="container">
          <div className="row row-rl-0 row-tb-20 row-md-cell">
            <div className="brand col-md-3 t-xs-center t-md-left valign-middle">
              <Link to="/" className="logo">
                <img src="assets/images/logo.png" alt="" width="250" />
              </Link>
            </div>
            <div className="header-search col-md-9">
              <div className="row row-tb-10 ">
                <div className="col-sm-8">
                  <form className="search-form">
                    <div className="input-group">
                      <input type="text" className="form-control input-lg search-input" placeholder="Enter Keywork Here ..." required="required"></input>
                      <div className="input-group-btn">
                        <div className="input-group">
                          <select className="form-control input-lg search-select">
                            <option>Select Your Category</option>
                            <option>Deals</option>
                            <option>Coupons</option>
                            <option>Discounts</option>
                          </select>
                          <div className="input-group-btn">
                            <button type="submit" className="btn btn-lg btn-search btn-block">
                              <i className="fa fa-search font-16"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-sm-4 t-xs-center t-md-right">
                  <div className="header-cart">
                    <a href="cart.html">
                      <span className="icon lnr lnr-cart"></span>
                      <div><span className="cart-number">0</span>
                      </div>
                      <span className="title">Cart</span>
                    </a>
                  </div>
                  <div className="header-wishlist ml-20">
                    <a href="wishlist.html">
                      <span className="icon lnr lnr-heart font-30"></span>
                      <span className="title">Wish List</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Menu />
    </header>
    <main id="mainContent" className="main-content">
      {props.children}
    </main>
    <Footer />
  </React.Fragment>
);

export default layout;

