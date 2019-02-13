import React from 'react';
import { NavLink } from 'react-router-dom';

import NavbarTop from '../layout/NavbarTop';

const menu = (props) => (
  <React.Fragment>
    <NavbarTop />
    <div className="header-menu bg-blue">
      <div className="container">
        <nav className="nav-bar">
          <div className="nav-header">
            <span className="nav-toggle" data-toggle="#header-navbar">
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
          <div id="header-navbar" className="nav-collapse">
            <ul className="nav-menu">
              <li>
                <NavLink exact to="/">Home</NavLink>
              </li>
              <li className="dropdown-mega-menu">
                <a href="deals_grid.html">Deals</a>
                <div className="mega-menu">
                  <div className="row row-v-10">
                    <div className="col-md-3">
                      <ul>
                        <li><a href="deals_grid.html">Grid View</a>
                        </li>
                        <li><a href="deals_grid_sidebar.html">Grid With Sidebar</a>
                        </li>
                        <li><a href="deals_list.html">List View</a>
                        </li>
                        <li><a href="deal_single.html">Deal Single</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_03.jpg">
                        <div className="label-discount top-10 right-10">-15%</div>
                        <div className="deal-about p-10 pos-a bottom-0 left-0">
                          <div className="rating mb-10">
                            <span className="rating-stars rate-allow" data-rating="2">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <h6 className="deal-title mb-10">
                            <a href="deal_single.html" className="color-lighter">Aenean ut orci vel massa</a>
                          </h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_04.jpg">
                        <div className="label-discount top-10 right-10">-60%</div>
                        <div className="deal-about p-10 pos-a bottom-0 left-0">
                          <div className="rating mb-10">
                            <span className="rating-stars rate-allow" data-rating="3">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <h6 className="deal-title mb-10">
                            <a href="deal_single.html" className="color-lighter">Aenean ut orci vel massa</a>
                          </h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-md-3">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_05.jpg">
                        <div className="label-discount top-10 right-10">-60%</div>
                        <div className="deal-about p-10 pos-a bottom-0 left-0">
                          <div className="rating mb-10">
                            <span className="rating-stars rate-allow" data-rating="5">
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                          </div>
                          <h6 className="deal-title mb-10">
                            <a href="deal_single.html" className="color-lighter">Aenean ut orci vel massa</a>
                          </h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="coupons_grid.html">Coupons</a>
                <ul>
                  <li><a href="coupons_grid.html">Grid View</a>
                  </li>
                  <li><a href="coupons_grid_sidebar.html">Grid With Sidebar</a>
                  </li>
                  <li><a href="coupons_list.html">List View</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink exact to="/store">Store</NavLink>
              </li>
              <li>
                <a href="contact_us_01.html">Contact Us</a>
                <ul>
                  <li><a href="contact_us_01.html">Contact Us 1</a>
                  </li>
                  <li><a href="contact_us_02.html">Contact Us 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href=".html">Blog</a>
                <ul>
                  <li>
                    <a href=".html">Classic View</a>
                    <ul>
                      <li><a href="blog_classic_right_sidebar.html">Right Sidenar</a>
                      </li>
                      <li><a href="blog_classic_left_sidebar.html">Left Sidebar</a>
                      </li>
                      <li><a href="blog_classic_fullwidth.html">Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">Grid View</a>
                    <ul>
                      <li><a href="blog_grid_3col.html">3 Columns</a>
                      </li>
                      <li><a href="blog_grid_2col.html">2 Columns</a>
                      </li>
                      <li><a href="blog_grid_right_sidebar.html">Right Sidebar</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">List View</a>
                    <ul>
                      <li><a href="blog_list_right_sidebar.html">Right Sidenar</a>
                      </li>
                      <li><a href="blog_list_left_sidebar.html">Left Sidebar</a>
                      </li>
                      <li><a href="blog_list_fullwidth.html">Full Width</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">Blog Single</a>
                    <ul>
                      <li><a href="blog_single_standard.html">Standard Post</a>
                      </li>
                      <li><a href="blog_single_gallery.html">Gallery Post</a>
                      </li>
                      <li><a href="blog_single_youtube.html">Youtube Video</a>
                      </li>
                      <li><a href="blog_single_vimeo.html">Vimeo Video</a>
                      </li>
                      <li><a href="blog_single_map.html">Google Map</a>
                      </li>
                      <li><a href="blog_single_quote.html">Quote Post</a>
                      </li>
                      <li><a href="blog_single_audio.html">Audio Post</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a href=".html">Pages</a>
                <ul>
                  <li><a href="index-3.html">Home Default</a>
                  </li>
                  <li><a href="signin.html">Sign In</a>
                  </li>
                  <li><a href="signup.html">Sign Up</a>
                  </li>
                  <li><a href="404.html">404 Page</a>
                  </li>
                  <li><a href="faq.html">FAQ Page</a>
                  </li>
                  <li><a href="cart.html">Cart Page</a>
                  </li>
                  <li>
                    <a href="checkout_method.html">Checkout</a>
                    <ul>
                      <li><a href="checkout_method.html">Checkout method</a>
                      </li>
                      <li><a href="checkout_billing.html">Billing Information</a>
                      </li>
                      <li><a href="checkout_payment.html">Payment Information</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">Contact Us</a>
                    <ul>
                      <li><a href="contact_us_01.html">Contact Us 1</a>
                      </li>
                      <li><a href="contact_us_02.html">Contact Us 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">Deals Pages</a>
                    <ul>
                      <li><a href="deals_grid.html">Grid View</a>
                      </li>
                      <li><a href="deals_list.html">List View</a>
                      </li>
                      <li><a href="deal_single.html">Deal Single</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href=".html">Coupons Pages</a>
                    <ul>
                      <li><a href="coupons_grid.html">Grid View</a>
                      </li>
                      <li><a href="coupons_grid_sidebar.html">Grid With Sidebar</a>
                      </li>
                      <li><a href="coupons_list.html">List View</a>
                      </li>
                    </ul>
                  </li>
                  <li><a href="terms_conditions.html">Terms &amp; conditions</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink exact to={{ pathname: "/about", hash: "#submit", search: "?quick-submit=true" }}>About</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </React.Fragment>
);

export default menu;