import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

class LatestCuponView extends Component {

  render() {
    return (
      <React.Fragment>
        <section className="section latest-coupons-area ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Latest Cupons</h3>
            <Link to={{ pathname: "/" }} className="btn btn-o btn-xs pos-a right-10 pos-tb-center">View All</Link>
          </header>

          <div className="latest-coupons-slider">
            <OwlCarousel
              loop
              autoplay
              smartSpeed={1000}
              autoplayTimeout={10000}
              margin={30}
              navSpeed={false}
              items={1}
              autoplayHoverPause
              responsive={{
                0: {
                  items: 1,
                  nav: false
                },
                480: {
                  items: 2,
                  nav: false
                },
                768: {
                  items: 2,
                  nav: false
                },
                992: {
                  items: 3,
                  nav: false
                },
                1199: {
                  items: 4,
                  nav: false
                }
              }}
            >
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
            </OwlCarousel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LatestCuponView;