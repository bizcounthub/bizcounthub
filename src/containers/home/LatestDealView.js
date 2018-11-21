import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LatestDealView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section latest-deals-area ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Latest Deals</h3>
            <Link to={{ pathname: "/" }} className="btn btn-o btn-xs pos-a right-10 pos-tb-center">View All</Link>
          </header>

          <div className="row row-masnory row-tb-20">
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_01.jpg">
                  <div className="label-discount left-20 top-15">-50%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2019/09/01 01:30:00"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_01.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="5">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">241</span> rates )
                                                </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">The Crash Bad Instant Folding Twin Bed</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>United State</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>120 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$300.00</span>$150.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_02.jpg">
                  <div className="label-discount left-20 top-15">-30%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2020/10/10 12:25:10"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_02.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="3">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">132</span> rates )
                                                </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">Western Digital USB 3.0 Hard Drives</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>United Kingdom</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>42 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$150.00</span>$100.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_03.jpg">
                  <div className="label-discount left-20 top-15">-30%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2020/10/10 12:25:10"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_03.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="4">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">160</span> rates )
                      </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">Hampton Bay LED Light Ceiling Exhaust Fan</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>Australia</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>75 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$300.00</span>$150.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_04.jpg">
                  <div className="label-discount left-20 top-15">-15%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2018/01/02 10:35:23"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_04.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="2">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">100</span> rates )
                                                </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">Timberland Men's Thorton Waterproof Boots</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>Canada</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>10 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$380.00</span>$340.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_05.jpg">
                  <div className="label-discount left-20 top-15">-60%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2021/12/03 03:15:00"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_05.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="3">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">32</span> rates )
                                                </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">New and Refurbished Lenovo Laptops</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>United State</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>65 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$700.00</span>$576.00</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="deal-single panel">
                <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_06.jpg">
                  <div className="label-discount left-20 top-15">-60%</div>
                  <ul className="deal-actions top-15 right-20">
                    <li className="like-deal">
                      <span>
                        <i className="fa fa-heart"></i>
                      </span>
                    </li>
                    <li className="share-btn">
                      <div className="share-tooltip fade">
                        <Link to={{ pathname: "/" }}><i className="fa fa-facebook"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-twitter"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-google-plus"></i></Link>
                        <Link to={{ pathname: "/" }}><i className="fa fa-pinterest"></i></Link>
                      </div>
                      <span><i className="fa fa-share-alt"></i></span>
                    </li>
                    <li>
                      <span>
                        <i className="fa fa-camera"></i>
                      </span>
                    </li>
                  </ul>
                  <div className="time-left bottom-15 right-20 font-md-14">
                    <span>
                      <i className="ico fa fa-clock-o mr-10"></i>
                      <span className="t-uppercase" data-countdown="2019/10/10 12:00:00"></span>
                    </span>
                  </div>
                  <div className="deal-store-logo">
                    <img src="assets/images/brands/brand_06.jpg" alt=""></img>
                  </div>
                </figure>
                <div className="bg-white pt-20 pl-20 pr-15">
                  <div className="pr-md-10">
                    <div className="rating mb-10">
                      <span className="rating-stars rate-allow" data-rating="5">
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                        <i className="fa fa-star-o"></i>
                      </span>
                      <span className="rating-reviews">
                        ( <span className="rating-count">29</span> rates )
                                                </span>
                    </div>
                    <h3 className="deal-title mb-10">
                      <a href="deal_single.html">Buying a TV Is Easy When You Know These Terms</a>
                    </h3>
                    <ul className="deal-meta list-inline mb-10 color-mid">
                      <li><i className="ico fa fa-map-marker mr-10"></i>United Kingdom</li>
                      <li><i className="ico fa fa-shopping-basket mr-10"></i>134 Bought</li>
                    </ul>
                    <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p>
                  </div>
                  <div className="deal-price pos-r mb-15">
                    <h3 className="price ptb-5 text-right"><span className="price-sale">$300.00</span>$250.00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section latest-coupons-area ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Latest Deals</h3>
            <Link to={{ pathname: "/" }} className="btn btn-o btn-xs pos-a right-10 pos-tb-center">View All</Link>
          </header>

          <div className="latest-coupons-slider owl-slider" data-autoplay-hover-pause="true" data-loop="true" data-autoplay="true" data-smart-speed="1000" data-autoplay-timeout="10000" data-margin="30" data-nav-speed="false" data-items="1" data-xxs-items="1" data-xs-items="2" data-sm-items="2" data-md-items="3" data-lg-items="4">
            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="ribbon-wrapper is-hidden-xs-down">
                  <div className="ribbon">Featured</div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_01.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-green"><i className="ico lnr lnr-smile mr-5"></i>Verifed</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>125 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">10% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>10% off select XPS & Alienware laptops</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 01/01/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_01">Get Coupon Code</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_02.jpg" alt=""></img>
                    </div>
                  </div>

                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-muted"><i className="ico fa fa-map-marker mr-5"></i>California</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>13 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">15% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>15% off 2 select Amazon Fire cases</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 05/02/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_02">Show Code</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_03.jpg" alt=""></img>
                    </div>
                  </div>

                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-muted"><i className="ico fa fa-tag mr-5"></i>Coupon</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>425 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">20% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>Flat 40% off hotel bookings in 10 cities</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 15/01/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_03">See Sale</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_04.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-green"><i className="ico lnr lnr-smile mr-5"></i>Verifed</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>230 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">30% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>There is no place like home 25% off</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 02/03/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_04">Print Code</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="ribbon-wrapper is-hidden-xs-down">
                  <div className="ribbon">Featured</div>
                </div>
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_05.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-muted"><i className="ico fa fa-tag mr-5"></i>Coupon</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>86 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">10% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>10% off $399+ refurbished laptops</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 20/02/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_05">Show Code</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="coupon-item">
              <div className="coupon-single panel t-center">
                <div className="row">
                  <div className="col-xs-12">
                    <div className="text-center p-20">
                      <img className="store-logo" src="assets/images/coupons/coupon_06.jpg" alt=""></img>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="panel-body">
                      <ul className="deal-meta list-inline mb-10">
                        <li className="color-green"><i className="ico lnr lnr-smile mr-5"></i>Verifed</li>
                        <li className="color-muted"><i className="ico lnr lnr-users mr-5"></i>24 Used</li>
                      </ul>
                      <h4 className="color-green mb-10 t-uppercase">25% OFF</h4>
                      <h5 className="deal-title mb-10">
                        <Link to={{ pathname: "/" }}>There is no place like home 25% off</Link>
                      </h5>
                      <p className="mb-15 color-muted mb-20 font-12"><i className="lnr lnr-clock mr-10"></i>Expires On 14/01/2018</p>
                      <div className="showcode" data-toggle-class="coupon-showen" data-toggle-event="click">
                        <button className="show-code btn btn-sm btn-block" data-toggle="modal" data-target="#coupon_06">Show Coupon</button>
                        <div className="coupon-hide">X455-17GT-OL58</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default LatestDealView;