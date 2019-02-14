import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Menu from '../layout/Menu';
import Footer from '../layout/Footer';
import { relative } from 'path';


class Layout extends Component {

  state = {
    xx: 0,
    widthwidth: 0
  };

  componentWillMount() {
    console.log("layout will mount");
  }
  handleOnMouseLeave = (e) => {
    this.setState({ xx: 0, widthwidth: 0 });
  }
  handleOnMouseOver = (e) => {
    const tabs = Array.from(
      document.querySelectorAll('.primary-nav .primary-nav-tab a')
    );

    const rects = tabs.map(tab => {
      const { x, y, left, top, width, height } = tab.getBoundingClientRect();
      const id = tab.dataset.id;
      return { id, x: x || left, y: y || top, width, height };
    });

    const { x, width } = rects.find(x => x.id === e.target.dataset.id);
    this.setState({ xx: x, widthwidth: width });
  }

  render() {
    let onSelected = null;

    if (this.state.xx === 0) {
      onSelected = null;
    } else {
      onSelected = (
        < div id="ls-rail" className="ls-rail" >
          <span id="ls-rail-slide" style={{ left: `${this.state.xx - 10}px`, width: `${this.state.widthwidth + 20}px` }}></span>
        </div >
      )
    }
    return (
      <React.Fragment>
        <header id="mainHeader" className="main-header">
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
        </div>
      </div> */}
          <Menu />
          <nav id="ls-channel-nav" className="ls-channel-nav">
            <div id="ls-primary-nav-row" className="container page-container ls-primary-nav-loaded">
              <ul id="primary-nav" className="primary-nav">
                <li id="home-tab1" className="primary-nav-tab">
                  <Link
                    onMouseOver={this.handleOnMouseOver}
                    onMouseLeave={this.handleOnMouseLeave}
                    to={{ pathname: "/" }} data-id="featured">Featured</Link>
                </li>
                <li id="home-tab2" className="primary-nav-tab">
                  <Link
                    to={{ pathname: "/" }}
                    onMouseOver={this.handleOnMouseOver}
                    onMouseLeave={this.handleOnMouseLeave}
                    data-id="thing-to-do">Things To Do
                  </Link>
                </li>
                <li id="home-tab3" className="primary-nav-tab">
                  <Link
                    onMouseOver={this.handleOnMouseOver}
                    onMouseLeave={this.handleOnMouseLeave}
                    to={{ pathname: "/" }} data-id="beauty-spa">Beauty & Spas</Link>
                </li>
              </ul>
            </div>
            <nav id="subnav" className="subnav notranslate">
              {onSelected}
            </nav>
          </nav>
        </header>
        <main id="mainContent" className="main-content">
          {this.props.children}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Layout;

