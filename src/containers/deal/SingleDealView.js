import React, { Component } from 'react';

class SingleDealView extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <React.Fragment>
        <div className="page-container ptb-60">
          <div className="container">
            <div className="row row-rl-10 row-tb-20">
              <div className="page-content col-xs-12 col-sm-7 col-md-8">
                <div className="row row-tb-20">
                  <div className="col-xs-12">
                    <div className="deal-deatails panel">
                      <div className="deal-slider">
                        <div id="product_slider" className="flexslider">
                          <ul className="slides">
                            <li>
                              <img alt="" src="assets/images/products/product_01.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/product_02.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/product_03.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/product_04.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/product_05.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/product_06.jpg" />
                            </li>
                          </ul>
                        </div>
                        <div id="product_slider_nav" className="flexslider flexslider-nav">
                          <ul className="slides">
                            <li>
                              <img alt="" src="assets/images/products/thumb_01.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/thumb_02.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/thumb_03.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/thumb_04.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/thumb_05.jpg" />
                            </li>
                            <li>
                              <img alt="" src="assets/images/products/thumb_06.jpg" />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="deal-body p-20">
                        <h3 className="mb-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo mollitia autem, animi fuga.</h3>
                        <div className="rating mb-10">
                          <span className="rating-stars" data-rating="3">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                          </span>
                        </div>
                        <h2 className="price mb-15">$60.00</h2>
                        <p className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut tenetur, earum, illum eum iste aliquam quam quisquam atque numquam magni voluptas deserunt!</p>
                        <p className="mb-15">Adipisicing elit. Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut tenetur, earum, illum eum iste aliquam quam quisquam atque numquam magni voluptas deserunt!</p>
                        <p className="mb-20">Laboriosam, ipsum voluptatum. Eos, saepe harum culpa consequatur aut tenetur, earum, illum eum iste aliquam quam quisquam atque numquam magni voluptas deserunt!</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="posted-review panel p-30">
                      <h3 className="h-title">16 Review</h3>
                      <div className="review-single pt-30">
                        <div className="media">
                          <div className="media-left">
                            <img className="media-object mr-10 radius-4" src="assets/images/avatars/avatar_01.jpg" width="90" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="review-wrapper clearfix">
                              <ul className="list-inline">
                                <li>
                                  <span className="review-holder-name h5">John Doe</span>
                                </li>
                                <li>
                                  <div className="rating">
                                    <span className="rating-stars" data-rating="5">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <p className="review-date mb-5">September 9, 2016</p>
                              <p className="copy">Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-single pt-30">
                        <div className="media">
                          <div className="media-left">
                            <img className="media-object mr-10 radius-4" src="assets/images/avatars/avatar_02.jpg" width="90" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="review-wrapper clearfix">
                              <ul className="list-inline">
                                <li>
                                  <span className="review-holder-name h5">John Doe</span>
                                </li>
                                <li>
                                  <div className="rating">
                                    <span className="rating-stars" data-rating="2">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <p className="review-date mb-5">September 9, 2016</p>
                              <p className="copy">Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-single pt-30">
                        <div className="media">
                          <div className="media-left">
                            <img className="media-object mr-10 radius-4" src="assets/images/avatars/avatar_03.jpg" width="90" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="review-wrapper clearfix">
                              <ul className="list-inline">
                                <li>
                                  <span className="review-holder-name h5">John Doe</span>
                                </li>
                                <li>
                                  <div className="rating">
                                    <span className="rating-stars" data-rating="3">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <p className="review-date mb-5">September 9, 2016</p>
                              <p className="copy">Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-single pt-30">
                        <div className="media">
                          <div className="media-left">
                            <img className="media-object mr-10 radius-4" src="assets/images/avatars/avatar_04.jpg" width="90" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="review-wrapper clearfix">
                              <ul className="list-inline">
                                <li>
                                  <span className="review-holder-name h5">John Doe</span>
                                </li>
                                <li>
                                  <div className="rating">
                                    <span className="rating-stars" data-rating="4">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <p className="review-date mb-5">September 9, 2016</p>
                              <p className="copy">Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="review-single pt-30">
                        <div className="media">
                          <div className="media-left">
                            <img className="media-object mr-10 radius-4" src="assets/images/avatars/avatar_05.jpg" width="90" alt="" />
                          </div>
                          <div className="media-body">
                            <div className="review-wrapper clearfix">
                              <ul className="list-inline">
                                <li>
                                  <span className="review-holder-name h5">John Doe</span>
                                </li>
                                <li>
                                  <div className="rating">
                                    <span className="rating-stars" data-rating="5">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                  </div>
                                </li>
                              </ul>
                              <p className="review-date mb-5">September 9, 2016</p>
                              <p className="copy">Ut velit mauris, egestas sed, gravida nec, ornare ut, mi. Aenean ut orci vel massa suscipit pulvinar. Nulla sollicitudin. Fusce varius, ligula non tempus aliquam.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12">
                    <div className="post-review panel p-20">
                      <h3 className="h-title">Post Review</h3>
                      <form className="horizontal-form pt-30" action="#">
                        <div className="row row-v-10">
                          <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Name" />
                          </div>
                          <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Email" />
                          </div>
                          <div className="col-xs-12">
                            <ul className="select-rate list-inline ptb-20">
                              <li><span>Your Rating : </span>
                              </li>
                              <li>
                                <span className="rating" role="button">
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span className="rating" role="button">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span className="rating" role="button">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span className="rating" role="button">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                              <li>
                                <span className="rating" role="button">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                </span>
                              </li>
                            </ul>
                          </div>
                          <div className="col-xs-12">
                            <textarea className="form-control" placeholder="Your Review" rows="6"></textarea>
                          </div>
                          <div className="col-xs-12 text-right">
                            <button type="submit" className="btn mt-20">Submit review</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-sidebar col-md-4 col-sm-5 col-xs-12">
                <aside className="sidebar blog-sidebar">
                  <div className="row row-tb-10">
                    <div className="col-xs-12">
                      <div className="widget single-deal-widget panel ptb-30 prl-20">
                        <div className="widget-body text-center">
                          <h2 className="mb-20 h3">
                            Wyndham Garden at Palmas del Mar - Puerto Rico
		                        </h2>
                          <ul className="deal-meta list-inline mb-10 color-mid">
                            <li><i className="ico fa fa-globe mr-10"></i><a href="store_single_02.html" className="color-mid">Ebay</a>
                            </li>
                            <li><i className="ico fa fa-map-marker mr-10"></i>California</li>
                            <li><i className="ico fa fa-shopping-basket mr-10"></i>75 Bought</li>
                          </ul>
                          <p className="color-muted">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit harum quidem eaque amet pariatur aspernatur mollitia ratione maxime.
                                                </p>
                          <div className="price mb-20">
                            <h2 className="price"><span className="price-sale">$200.00</span> $60.00</h2>
                          </div>
                          <div className="buy-now mb-40">
                            <a href="#" target="_blank" className="btn btn-block btn-lg">
                              <i className="fa fa-shopping-cart font-16 mr-10"></i> Buy now
                                                    </a>
                          </div>
                          <div className="time-left mb-30">
                            <p className="t-uppercase color-muted">
                              Hurry up Only a few deals left
                                                    </p>
                            <div className="color-mid font-14 font-lg-16">
                              <i className="ico fa fa-clock-o mr-10"></i>
                              <span data-countdown="2020/10/10 12:25:10"></span>
                            </div>
                          </div>
                          <ul className="list-inline social-icons social-icons--colored t-center">
                            <li className="social-icons__item">
                              <a href="#"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li className="social-icons__item">
                              <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li className="social-icons__item">
                              <a href="#"><i className="fa fa-pinterest"></i></a>
                            </li>
                            <li className="social-icons__item">
                              <a href="#"><i className="fa fa-linkedin"></i></a>
                            </li>
                            <li className="social-icons__item">
                              <a href="#"><i className="fa fa-google-plus"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-xs-12">

                      <div className="widget about-seller-widget panel ptb-30 prl-20">
                        <h3 className="widget-title h-title">About Seller</h3>
                        <div className="widget-body t-center">
                          <figure className="mt-20 pb-10">
                            <img src="assets/images/brands/store_logo.jpg" alt="" />
                          </figure>
                          <div className="store-about mb-20">
                            <h3 className="mb-10">Amazon Store</h3>
                            <div className="rating mb-10">
                              <span className="rating-stars rate-allow" data-rating="3">
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o star-active"></i>
                                <i className="fa fa-star-o"></i>
                                <i className="fa fa-star-o"></i>
                              </span>
                              <span className="rating-reviews">
                                ( <span className="rating-count">205</span> rates )
                              </span>
                            </div>
                            <p className="mb-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio officiis at accusantium ducimus excepturi cumque ad commodi libero nihil rem voluptatibus veniam ipsa ullam esse quia quae fuga, quidem iusto.</p>
                            <button className="btn btn-info">FOLLOW</button>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-xs-12">

                      <div className="widget subscribe-widget panel pt-20 prl-20">
                        <h3 className="widget-title h-title">Subscribe to mail</h3>
                        <div className="widget-content ptb-30">

                          <p className="color-mid mb-20">Get our Daily email newsletter with Special Services, Updates, Offers and more!</p>
                          <form method="post" action="#">
                            <div className="input-group">
                              <input type="email" className="form-control" placeholder="Your Email Address" required="required" />
                              <span className="input-group-btn">
                                <button className="btn" type="submit">Sign Up</button>
                              </span>
                            </div>
                          </form>

                        </div>
                      </div>

                    </div>
                    <div className="col-xs-12">

                      <div className="widget latest-deals-widget panel prl-20">
                        <div className="widget-body ptb-20">
                          <div className="owl-slider" data-loop="true" data-autoplay="true" data-autoplay-timeout="10000" data-smart-speed="1000" data-nav-speed="false" data-nav="true" data-xxs-items="1" data-xxs-nav="true" data-xs-items="1" data-xs-nav="true" data-sm-items="1" data-sm-nav="true" data-md-items="1" data-md-nav="true" data-lg-items="1" data-lg-nav="true">
                            <div className="latest-deals__item item">
                              <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_02.jpg">
                                <div className="label-discount top-10 right-10">-30%</div>
                                <ul className="deal-actions top-10 left-10">
                                  <li className="like-deal">
                                    <span>
                                      <i className="fa fa-heart"></i>
                                    </span>
                                  </li>
                                  <li className="share-btn">
                                    <div className="share-tooltip fade">
                                      <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <span><i className="fa fa-share-alt"></i></span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="fa fa-camera"></i>
                                    </span>
                                  </li>
                                </ul>
                                <div className="deal-about p-10 pos-a bottom-0 left-0">
                                  <div className="rating mb-10">
                                    <span className="rating-stars rate-allow" data-rating="4">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                    <span className="rating-reviews color-lighter">
                                      (<span className="rating-count">160</span> Reviews)
                                                                    </span>
                                  </div>
                                  <h5 className="deal-title mb-10">
                                    <a href="deal_single.html" className="color-lighter">Hampton Bay LED Light Ceiling Exhaust Fan</a>
                                  </h5>
                                </div>
                              </figure>
                            </div>
                            <div className="latest-deals__item item">
                              <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_03.jpg">
                                <div className="label-discount top-10 right-10">-15%</div>
                                <ul className="deal-actions top-10 left-10">
                                  <li className="like-deal">
                                    <span>
                                      <i className="fa fa-heart"></i>
                                    </span>
                                  </li>
                                  <li className="share-btn">
                                    <div className="share-tooltip fade">
                                      <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <span><i className="fa fa-share-alt"></i></span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="fa fa-camera"></i>
                                    </span>
                                  </li>
                                </ul>
                                <div className="deal-about p-10 pos-a bottom-0 left-0">
                                  <div className="rating mb-10">
                                    <span className="rating-stars rate-allow" data-rating="2">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                    <span className="rating-reviews color-lighter">
                                      (<span className="rating-count">100</span> Reviews)
                                                                    </span>
                                  </div>
                                  <h5 className="deal-title mb-10">
                                    <a href="deal_single.html" className="color-lighter">Timberland Men's Thorton Waterproof Boots</a>
                                  </h5>
                                </div>
                              </figure>
                            </div>
                            <div className="latest-deals__item item">
                              <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_04.jpg">
                                <div className="label-discount top-10 right-10">-60%</div>
                                <ul className="deal-actions top-10 left-10">
                                  <li className="like-deal">
                                    <span>
                                      <i className="fa fa-heart"></i>
                                    </span>
                                  </li>
                                  <li className="share-btn">
                                    <div className="share-tooltip fade">
                                      <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <span><i className="fa fa-share-alt"></i></span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="fa fa-camera"></i>
                                    </span>
                                  </li>
                                </ul>
                                <div className="deal-about p-10 pos-a bottom-0 left-0">
                                  <div className="rating mb-10">
                                    <span className="rating-stars rate-allow" data-rating="3">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                    <span className="rating-reviews color-lighter">
                                      (<span className="rating-count">32</span> Reviews)
                                                                    </span>
                                  </div>
                                  <h5 className="deal-title mb-10">
                                    <a href="deal_single.html" className="color-lighter">New and Refurbished Lenovo Laptops</a>
                                  </h5>
                                </div>
                              </figure>
                            </div>
                            <div className="latest-deals__item item">
                              <figure className="deal-thumbnail embed-responsive embed-responsive-4by3" data-bg-img="assets/images/deals/deal_05.jpg">
                                <div className="label-discount top-10 right-10">-60%</div>
                                <ul className="deal-actions top-10 left-10">
                                  <li className="like-deal">
                                    <span>
                                      <i className="fa fa-heart"></i>
                                    </span>
                                  </li>
                                  <li className="share-btn">
                                    <div className="share-tooltip fade">
                                      <a target="_blank" href="#"><i className="fa fa-facebook"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-twitter"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-google-plus"></i></a>
                                      <a target="_blank" href="#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                    <span><i className="fa fa-share-alt"></i></span>
                                  </li>
                                  <li>
                                    <span>
                                      <i className="fa fa-camera"></i>
                                    </span>
                                  </li>
                                </ul>
                                <div className="deal-about p-10 pos-a bottom-0 left-0">
                                  <div className="rating mb-10">
                                    <span className="rating-stars rate-allow" data-rating="5">
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                      <i className="fa fa-star-o"></i>
                                    </span>
                                    <span className="rating-reviews color-lighter">
                                      (<span className="rating-count">29</span> Reviews)
                                                                    </span>
                                  </div>
                                  <h5 className="deal-title mb-10">
                                    <a href="deal_single.html" className="color-lighter">Buying a TV Is Easy When You Know These Terms</a>
                                  </h5>
                                </div>
                              </figure>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-xs-12">

                      <div className="widget best-rated-deals panel pt-20 prl-20">
                        <h3 className="widget-title h-title">Best Rated Deals</h3>
                        <div className="widget-body ptb-30">


                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="assets/images/deals/thumb_01.jpg" alt="Thumb" width="80" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-5">
                                <a href="#">Aenean ut orci vel massa</a>
                              </h6>
                              <div className="mb-5">
                                <span className="rating">
                                  <span className="rating-stars" data-rating="4">
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </span>
                                </span>
                              </div>
                              <h4 className="price font-16">$60.00 <span className="price-sale color-muted">$200.00</span></h4>
                            </div>
                          </div>


                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="assets/images/deals/thumb_02.jpg" alt="Thumb" width="80" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-5">
                                <a href="#">Aenean ut orci vel massa</a>
                              </h6>
                              <div className="mb-5">
                                <span className="rating">
                                  <span className="rating-stars" data-rating="4">
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </span>
                                </span>
                              </div>
                              <h4 className="price font-16">$60.00 <span className="price-sale color-muted">$200.00</span></h4>
                            </div>
                          </div>


                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="assets/images/deals/thumb_03.jpg" alt="Thumb" width="80" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-5">
                                <a href="#">Aenean ut orci vel massa</a>
                              </h6>
                              <div className="mb-5">
                                <span className="rating">
                                  <span className="rating-stars" data-rating="4">
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </span>
                                </span>
                              </div>
                              <h4 className="price font-16">$60.00 <span className="price-sale color-muted">$200.00</span></h4>
                            </div>
                          </div>


                          <div className="media">
                            <div className="media-left">
                              <a href="#">
                                <img className="media-object" src="assets/images/deals/thumb_04.jpg" alt="Thumb" width="80" />
                              </a>
                            </div>
                            <div className="media-body">
                              <h6 className="mb-5">
                                <a href="#">Aenean ut orci vel massa</a>
                              </h6>
                              <div className="mb-5">
                                <span className="rating">
                                  <span className="rating-stars" data-rating="4">
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                  </span>
                                </span>
                              </div>
                              <h4 className="price font-16">$60.00 <span className="price-sale color-muted">$200.00</span></h4>
                            </div>
                          </div>


                        </div>
                      </div>

                    </div>
                    <div className="col-xs-12">

                      <div className="widget contact-us-widget panel pt-20 prl-20">
                        <h3 className="widget-title h-title">Got any questions?</h3>
                        <div className="widget-body ptb-30">
                          <p className="mb-20 color-mid">If you are having any questions, please feel free to ask.</p>
                          <a href="contact_us_01.html" className="btn btn-block"><i className="mr-10 font-15 fa fa-envelope-o"></i>Drop Us a Line</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleDealView;