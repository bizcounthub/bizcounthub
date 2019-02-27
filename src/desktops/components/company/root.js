import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';
import { relative } from 'path';



class Root extends Component {

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
        <header className="header big-searchbar">
          <div className="ls-header-top">
            <div className="ls-header-top-row page-container">
              <a href="/" className="ls-groupon-logo">
                {/* <span className="ax-hidden">Groupon</span> */}
                Groupon
                {/* <svg role="presentation" width="125" height="21" viewBox="0 0 125 21" xmlns="http://www.w3.org/2000/svg">
                  <path d="M64.324 20.14c-4.428 0-7.099-2.72-7.099-7.604V.32h4.815v12.024c0 2.195.689 3.32 2.309 3.32 1.68 0 2.477-1.097 2.477-3.32V.32h4.785v12.216c0 4.776-2.913 7.605-7.287 7.605zm13.345-6.599v6.28H72.89V.32h6.481c2.064 0 3.63.138 4.947 1.07 1.732 1.207 2.639 3.043 2.639 5.485 0 2.525-1.154 4.61-3.104 5.786-1.237.745-2.775.88-4.809.88h-1.375zm.016-8.746h1.288c2.156 0 3.188.679 3.188 2.356 0 1.816-1.171 2.44-3.576 2.44h-.9V4.795zm35.803 4.165v10.861h-4.792V.32h4.318l7.198 10.836V.32H125V19.82h-4.212l-7.3-10.86zm-67.6 11.5c-2.892 0-5.372-1.058-7.299-3.113-1.848-1.97-2.783-4.41-2.783-7.325 0-2.722 1.046-5.219 2.974-7.137C40.71.972 43.133 0 45.917 0c2.617 0 5.098 1.027 6.997 2.917 1.986 1.97 3.032 4.495 3.032 7.19 0 2.83-.995 5.354-2.839 7.27a9.9 9.9 0 0 1-7.219 3.083zM45.8 4.795c2.75 0 5.032 2.275 5.032 5.122 0 3.182-2.281 5.428-5.087 5.428-2.694 0-5.143-2.356-5.143-5.428 0-2.847 2.284-5.122 5.198-5.122zM97.683 20.46c-2.894 0-5.372-1.058-7.3-3.113-1.848-1.97-2.787-4.41-2.787-7.325 0-2.722 1.046-5.219 2.978-7.137C92.506.972 94.927 0 97.71 0c2.62 0 5.094 1.027 6.999 2.917 1.981 1.97 3.028 4.495 3.028 7.19 0 2.83-.99 5.354-2.837 7.27a9.894 9.894 0 0 1-7.217 3.083zm-.098-15.665c2.754 0 5.036 2.275 5.036 5.122 0 3.182-2.282 5.428-5.086 5.428-2.697 0-5.144-2.356-5.144-5.428 0-2.847 2.283-5.122 5.194-5.122zM2.745 17.33C.925 15.365 0 12.93 0 10.024a9.95 9.95 0 0 1 2.937-7.118C4.838.998 7.233 0 9.977 0c4.135 0 7.749 2.575 9.3 6.786H13.89c-1.194-1.276-2.447-1.913-3.968-1.913-2.826 0-5.055 2.352-5.055 5.178 0 3.129 2.391 5.536 5.055 5.536 1.796 0 3.4-.94 4.35-2.657H8.758V9h11.011c.025.439.053.886.053 1.298 0 2.216-.544 4.098-1.66 5.761a9.965 9.965 0 0 1-8.237 4.401c-2.855 0-5.274-1.082-7.179-3.13zm23.122-3.788v6.28H21.1V.32h6.468c2.053 0 3.612.138 4.931 1.07 1.726 1.207 2.63 3.043 2.63 5.459 0 3.153-1.644 5.514-4.41 6.281l4.767 6.691h-5.892l-3.727-6.28zm.028-8.746h1.328c2.124 0 3.148.679 3.148 2.356 0 1.816-1.162 2.44-3.536 2.44h-.94V4.795z" fill="#FFF" fillRule="evenodd">
                  </path>
                </svg> */}
              </a>
              <div className="ls-search-wrapper">
                <SearchBar />
              </div>
            </div>
          </div>
        </header>
        {/* <header id="mainHeader" className="main-header">
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
        {/* <Menu />
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

      </main>
      <Footer /> */}
        {this.props.children}
      </React.Fragment >
    );
  }
}

export default Root;

