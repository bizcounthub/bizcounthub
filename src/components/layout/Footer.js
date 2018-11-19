import React from 'react';

const footer = (props) => (
  <React.Fragment>
    <section className="footer-top-area pt-70 pb-30 pos-r bg-blue">
      <div className="container">
        <div className="row row-tb-20">
          <div className="col-sm-12 col-md-7">
            <div className="row row-tb-20">
              <div className="footer-col col-sm-6">
                <div className="footer-about">
                  <img className="mb-40" src="assets/images/logo_light.png" width="250" alt="" />
                  <p className="color-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolores quidem mollitia id ipsa nisi necessitatibus iure repudiandae aperiam, odit ipsam dolor fugiat corporis nesciunt illo nemo minus.</p>
                </div>
              </div>
              <div className="footer-col col-sm-6">
                <div className="footer-top-twitter">
                  <h2 className="color-lighter">Twitter Feed</h2>
                  <ul className="twitter-list">
                    <li className="single-twitter">
                      <p className="color-light"><i className="ico fa fa-twitter"></i><a href=".">@masum_rana :</a> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore in reprehenderit.</p>
                    </li>
                    <li className="single-twitter">
                      <p className="color-light"><i className="ico fa fa-twitter"></i><a href=".">@masum_rana :</a> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione id corrupti iusto cupiditate omnis.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-5">
            <div className="row row-tb-20">
              <div className="footer-col col-sm-6">
                <div className="footer-links">
                  <h2 className="color-lighter">Quick Links</h2>
                  <ul>
                    <li><a href="deals_grid.html">Latest Deals</a>
                    </li>
                    <li><a href="coupons_grid.html">Newest Coupons</a>
                    </li>
                    <li><a href="contact_us_02.html">Contact Us</a>
                    </li>
                    <li><a href="404.html">Error 404</a>
                    </li>
                    <li><a href="terms_conditions.html">Terms of Use</a>
                    </li>
                    <li><a href="faq.html">FAQs</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col col-sm-6">
                <div className="footer-top-instagram instagram-widget">
                  <h2>Instagram Widget</h2>
                  <div className="row row-tb-5 row-rl-5">


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_01.jpg" alt="" />
                    </div>


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_02.jpg" alt="" />
                    </div>


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_03.jpg" alt="" />
                    </div>


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_04.jpg" alt="" />
                    </div>


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_05.jpg" alt="" />
                    </div>


                    <div className="instagram-widget__item col-xs-4">
                      <img src="assets/images/instagram/instagram_06.jpg" alt="" />
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="payment-methods t-center">
              <span><img src="assets/images/icons/payment/paypal.jpg" alt="" /></span>
              <span><img src="assets/images/icons/payment/visa.jpg" alt="" /></span>
              <span><img src="assets/images/icons/payment/mastercard.jpg" alt="" /></span>
              <span><img src="assets/images/icons/payment/discover.jpg" alt="" /></span>
              <span><img src="assets/images/icons/payment/american.jpg" alt="" /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="mainFooter" className="main-footer">
      <div className="container">
        <div className="row">
          <p>Copyright &copy; 2018 . All rights reserved.</p>
        </div>
      </div>
    </footer>
  </React.Fragment>
);

export default footer;