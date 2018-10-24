import React from 'react';

import Aux from '../../hoc/Aux';
import Menu from '../Layout/Menu';
import NavbarTop from '../Layout/NavbarTop';

const layout = (props) => (
    <Aux>
        <header id="mainHeader" className="main-header">
            <NavbarTop />
            <div className="header-header bg-white">
                <div className="container">
                    <div className="row row-rl-0 row-tb-20 row-md-cell">
                        <div className="brand col-md-3 t-xs-center t-md-left valign-middle">
                            <a href=".html" className="logo">
                                <img src="assets/images/logo.png" alt="" width="250" />
                            </a>
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
            </div>
            <Menu />
        </header>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default layout;

