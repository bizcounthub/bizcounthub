import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({

})
class Home extends Component {
  componentWillMount() {
    //console.log("willMount");
  }

  // shouldComponentUpdate() {
  //   //console.log("shouldComponentUpdate");
  // }
  componentDidUpdate() {
    // axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(response => {
    //     //console.log(response);
    //   })
    //console.log("didUpdate");
  }

  componentDidMount() {
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    //   .then(response => {
    //     const posts = response.data.slice(0, 1);
    //     const updatePosts = posts.map(post => {
    //       return {
    //         ...post, author: 'Max'
    //       }
    //     });
    //     this.setState({ posts: updatePosts });
    //     //console.log(response);
    //   });
    //console.log("didMount");
    //const owlSlider = document.getElementsByClassName('owl-slider');
    // for (var item of owlSlider) {

    // }

    const countDown = null;
    //console.log(owlSlider[0].dataset.autoplay);
  }

  productSliderHandler() {

  }

  render() {
    const FETCH_CATEGORY = gql`
    query fetch_category {
      dim_category_v (order_by: {seq_no : asc}, limit: 9) {
        category_id, 
        name,
        fa_icon
      }
    }`;

    const categories = (
      <Query query={FETCH_CATEGORY}>
        {({ loading, error, data }) => {
          if (loading) {
            console.log("fetching...")
            return <div>Loading...</div>
          }
          if (error) {
            console.log(error)
            return (
              <div>error</div>
            )
          }

          return (
            <React.Fragment>
              {
                data.dim_category_v.map(s =>
                  <li key={s.category_id} ><Link to={{ pathname: "/" }}><i className={s.fa_icon}></i>{s.name}<span>40</span></Link></li>
                )
              }
              <li className="all-cat">
                <Link className="font-14" to={{ pathname: "/" }}>All Categories</Link>
              </li>
            </React.Fragment>
          )
        }}
      </Query>
    )
    return null;
    return (
      <React.Fragment>
        <div className="site-wrapper animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
          <header>
            <div className="top-bar bg-light hdden-xs">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 list-inline list-unstyled no-margin hidden-xs">
                    <p className="no-margin">
                      Have any questions?
                  <strong>
                        +080 124 880
                              </strong>
                      or mail@codenpixel.com
                          </p>
                  </div>
                  <div className="pull-right col-sm-6">
                    <ul className="list-inline list-unstyled pull-right">
                      <li className="active">
                        <a href="#">
                          <i className="ti-cart">
                          </i>
                          Faq
                            </a>
                      </li>
                      <li>
                        <a href="#">
                          Sign In
                            </a>
                      </li>
                      <li>
                        <a href="#">
                          Sign Up
                            </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart">
                          </i>
                          Cart
                            </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="nav-wrap">
              <div className="nav-wrap-holder">
                <div className="container" id="nav_wrapper">
                  <nav className="navbar navbar-static-top nav-white" id="main_navbar" role="navigation">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                        <span className="sr-only">
                          Toggle navigation
                                  </span>
                        <span className="icon-bar">
                        </span>
                        <span className="icon-bar">
                        </span>
                        <span className="icon-bar">
                        </span>
                      </button>
                      <a href="index-2.html" className="navbar-brand logo col-sm-3">
                        <img src="images/logo.png" alt="" className="img-responsive"></img>
                      </a>
                    </div>
                    <div className="collapse navbar-collapse" id="Navbar">
                      <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            <i className="ti-home">
                            </i>
                            Home
                                  <span className="caret">
                            </span>
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a href="index-2.html">
                                Primary
                                    </a>
                            </li>
                            <li>
                              <a href="index_2.html">
                                Secondary
                                    </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                            Pages
                                  <span className="caret">
                            </span>
                          </a>
                          <ul className="dropdown-menu" role="menu">
                            <li>
                              <a href="details_2.html">
                                Deal Page 1
                                    </a>
                            </li>
                            <li>
                              <a href="details.html">
                                Deal Page 2
                                    </a>
                            </li>
                            <li>
                              <a href="results.html">
                                Search Results
                                    </a>
                            </li>
                            <li>
                              <a href="contact.html">
                                Contact
                                    </a>
                            </li>
                            <li>
                              <a href="faq.html">
                                FAQ page
                                    </a>
                            </li>
                            <li>
                              <a href="sumbit.html">
                                Sumbit deal
                                    </a>
                            </li>
                            <li>
                              <a href="registration.html">
                                Registration
                                    </a>
                            </li>
                            <li>
                              <a href="cart.html">
                                Cart Page
                                    </a>
                            </li>
                            <li>
                              <a href="checkout.html">
                                Checkout
                                    </a>
                            </li>
                            <li>
                              <a href="features.html">
                                Shortcodes
                                    </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="results.html">
                            Categories
                                </a>
                        </li>
                        <li>
                          <a href="sumbit.html">
                            Sumbit
                                </a>
                        </li>
                        <li>
                          <a href="contact.html">
                            Contact
                                </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div className="search-form bg-white">
            <div className="container">
              <div className="row">
                <div className="col-sm-4">
                  <div className="row">
                    <div className="col-md-12">
                      <input className="form-control" placeholder="Search Deals & Coupons" type="text" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">

                  <select value="0" className="form-control" id="departments" name="departments">
                    <option value="0" selected="selected">
                      Deals
                  </option>
                    <option value="1">
                      Coupons
                  </option>
                    <option value="2">
                      Getaways
                  </option>
                    <option value="3">
                      Clearance
                  </option>
                    <option value="4">
                      Something
                  </option>
                  </select>

                </div>
                <div className="col-sm-3">
                  <select className="form-control">
                    <option value="0" selected="selected">
                      Select your categorie
                </option>
                    <option value="1">
                      All
                </option>
                    <option value="2">
                      Travel
                </option>
                    <option value="3">
                      Beauty & Spas
                </option>
                    <option value="4">
                      Career & skills
                </option>
                    <option value="5">
                      Food & Drinks
                </option>
                    <option value="6">
                      Health & Beauty
                </option>
                  </select>
                </div>
                <div className="col-sm-2">
                  <a className="btn btn-raised ripple-effect btn-success btn-block" href="results.html">
                    Search Deals
              </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider">
            <div className="container">
              <div className="row">
                <div id="grid-slider" className="flexslider">
                  <ul className="slides">
                    <li>
                      <div className="col-sm-7 col-lg-8 omega">
                        <article className="bg-image entry-lg" data-image-src="images/deal-10.jpg">
                          <div className="deal-short-entry bg-green">
                            <p>
                              Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine, Chocolates and Return Flights at Santai Retreat
                        </p>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-5 col-lg-4 alpha entry-lg">
                        <div className="buyPanel animated fadeIn bg-white Aligner shadow">
                          <div className="content">
                            <div className="deal-content">
                              <h3>
                                Sirenis Punta Cana Resort Casino
                          </h3>
                              <p>
                                Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine...
                          </p>
                            </div>
                            <ul className="deal-price list-unstyled list-inline">
                              <li className="price">
                                <h3>
                                  $471
                            </h3>
                              </li>
                              <li className="buy-now">
                                <a className="btn btn-success btn-raised ripple-effect">
                                  BUY NOW
                            </a>
                              </li>
                            </ul>
                            <div className="dealAttributes">
                              <div className="valueInfo bg-light shadow">
                                <div className="value">
                                  <p className="value">
                                    $1,422
                              </p>
                                  <p className="text">
                                    Value
                              </p>
                                </div>
                                <div className="discount">
                                  <p className="value">
                                    59%
                              </p>
                                  <p className="text">
                                    Discount
                              </p>
                                </div>
                                <div className="save">
                                  <p className="value">
                                    $976
                              </p>
                                  <p className="text">
                                    SAVINGS
                              </p>
                                </div>
                              </div>
                              <div className="timeLeft text-center">
                                <p>
                                  Hurry up Only a few deals left
                            </p>
                                <span className="time">
                                  <i className="ti-timer color-green">
                                  </i>
                                  <b>
                                    8
                              </b>
                                  d.
                              <b>
                                    20
                              </b>
                                  st.
                              <b>
                                    58
                              </b>
                                  min.
                            </span>
                              </div>
                              <ul className="statistic list-unstyled list-inline">
                                <li>
                                  <p>
                                    <i className="ti-user">
                                    </i>
                                    <b>
                                      for 2
                                </b>
                                    Person
                              </p>
                                </li>
                                <li>
                                  <i className="ti-tag">
                                  </i>
                                  <b>
                                    169
                              </b>
                                  Bought
                            </li>
                                <li>
                                  <i className="ti-face-smile">
                                  </i>
                                  Offer success
                            </li>
                              </ul>
                              <div className="social-sharing text-center" data-permalink="http://labs.carsonshold.com/social-sharing-buttons">

                                <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://themeforest.net/user/codenpixel" className="share-facebook">
                                  <span className="icon icon-facebook">
                                  </span>
                                  <span className="share-title">
                                    Share
                              </span>
                                  <span className="share-count is-loaded">
                                    150
                              </span>
                                </a>
                                <a target="_blank" href="http://twitter.com/share?url=http://themeforest.net/user/codenpixel" className="share-twitter">
                                  <span className="icon icon-twitter">
                                  </span>
                                  <span className="share-title">
                                    Tweet
                              </span>
                                  <span className="share-count is-loaded">
                                    62
                              </span>
                                </a>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="col-sm-7 col-lg-8 omega">
                        <article className="bg-image entry-lg" data-image-src="images/deal-11.jpg">
                          <div className="deal-short-entry bg-green">
                            <p>
                              Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine, Chocolates and Return Flights at Santai Retreat
                        </p>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-5 col-lg-4 alpha entry-lg">
                        <div className="buyPanel animated fadeInLeft bg-white Aligner shadow">
                          <div className="content">
                            <div className="deal-content">
                              <h3>
                                Sirenis Punta Cana Resort Casino
                          </h3>
                              <p>
                                Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine...
                          </p>
                            </div>
                            <ul className="deal-price list-unstyled list-inline">
                              <li className="price">
                                <h3>
                                  $471
                            </h3>
                              </li>
                              <li className="buy-now">
                                <a className="btn btn-success btn-raised ripple-effect">
                                  BUY NOW
                            </a>
                              </li>
                            </ul>
                            <div className="dealAttributes">
                              <div className="valueInfo bg-light shadow">
                                <div className="value">
                                  <p className="value">
                                    $1,422
                              </p>
                                  <p className="text">
                                    Value
                              </p>
                                </div>
                                <div className="discount">
                                  <p className="value">
                                    59%
                              </p>
                                  <p className="text">
                                    Discount
                              </p>
                                </div>
                                <div className="save">
                                  <p className="value">
                                    $976
                              </p>
                                  <p className="text">
                                    SAVINGS
                              </p>
                                </div>
                              </div>
                              <div className="timeLeft text-center">
                                <p>
                                  Hurry up Only a few deals left
                            </p>
                                <span className="time">
                                  <i className="ti-timer color-green">
                                  </i>
                                  <b>
                                    8
                              </b>
                                  d.
                              <b>
                                    20
                              </b>
                                  st.
                              <b>
                                    58
                              </b>
                                  min.
                            </span>
                              </div>
                              <ul className="statistic list-unstyled list-inline">
                                <li>
                                  <p>
                                    <i className="ti-user">
                                    </i>
                                    <b>
                                      for 2
                                </b>
                                    Person
                              </p>
                                </li>
                                <li>
                                  <i className="ti-tag">
                                  </i>
                                  <b>
                                    169
                              </b>
                                  Bought
                            </li>
                                <li>
                                  <i className="ti-face-smile">
                                  </i>
                                  Offer success
                            </li>
                              </ul>
                              <div className="social-sharing text-center" data-permalink="http://labs.carsonshold.com/social-sharing-buttons">
                                <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://themeforest.net/user/codenpixel" className="share-facebook">
                                  <span className="icon icon-facebook">
                                  </span>
                                  <span className="share-title">
                                    Share
                              </span>
                                  <span className="share-count is-loaded">
                                    150
                              </span>
                                </a>
                                <a target="_blank" href="http://twitter.com/share?url=http://themeforest.net/user/codenpixel" className="share-twitter">
                                  <span className="icon icon-twitter">
                                  </span>
                                  <span className="share-title">
                                    Tweet
                              </span>
                                  <span className="share-count is-loaded">
                                    62
                              </span>
                                </a>

                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </li>
                    <li>
                      <div className="col-sm-7 col-lg-8 omega">
                        <article className="bg-image entry-lg" data-image-src="images/deal-3.jpg">
                          <div className="deal-short-entry bg-blue">
                            <p>
                              Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine...
                        </p>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-5 col-lg-4 alpha entry-lg">
                        <div className="buyPanel animated fadeInLeft bg-white bordered Aligner">
                          <div className="content">
                            <div className="deal-content">
                              <h3>
                                Riviera Maya All-Inclusive Cities 5*
                          </h3>
                              <p>
                                Kingscliff: From $349 for a 3-Night Romantic Stay with Bottle of Wine...
                          </p>
                            </div>
                            <ul className="deal-price list-unstyled list-inline">
                              <li className="price">
                                <h3>
                                  $999
                            </h3>
                              </li>
                              <li className="buy-now">
                                <a className="btn btn-primary btn-raised ripple-effect">
                                  BUY NOW
                            </a>
                              </li>
                            </ul>
                            <div className="dealAttributes">
                              <div className="valueInfo bg-light shadow">
                                <div className="value">
                                  <p className="value">
                                    $2,475
                              </p>
                                  <p className="text">
                                    Value
                              </p>
                                </div>
                                <div className="discount">
                                  <p className="value">
                                    59%
                              </p>
                                  <p className="text">
                                    Discount
                              </p>
                                </div>
                                <div className="save">
                                  <p className="value">
                                    $1,476
                              </p>
                                  <p className="text">
                                    SAVINGS
                              </p>
                                </div>
                              </div>

                              <div className="timeLeft text-center">
                                <p>
                                  Hurry up Only a few deals left
                            </p>
                                <span className="time">
                                  <i className="ti-timer color-green">
                                  </i>
                                  <b>
                                    8
                              </b>
                                  d.
                              <b>
                                    20
                              </b>
                                  st.
                              <b>
                                    58
                              </b>
                                  min.
                            </span>
                              </div>
                              <ul className="statistic list-unstyled list-inline">
                                <li>
                                  <p>
                                    <i className="ti-user">
                                    </i>
                                    <b>
                                      for 2
                                </b>
                                    Person
                              </p>
                                </li>
                                <li>
                                  <i className="ti-tag">
                                  </i>
                                  <b>
                                    169
                              </b>
                                  Bought
                            </li>
                                <li>
                                  <i className="ti-face-smile">
                                  </i>
                                  Offer success
                            </li>
                              </ul>
                              <div className="social-sharing text-center" data-permalink="http://labs.carsonshold.com/social-sharing-buttons">

                                <a target="_blank" href="http://www.facebook.com/sharer.php?u=http://themeforest.net/user/codenpixel" className="share-facebook">
                                  <span className="icon icon-facebook">
                                  </span>
                                  <span className="share-title">
                                    Share
                              </span>
                                  <span className="share-count is-loaded">
                                    150
                              </span>
                                </a>

                                <a target="_blank" href="http://twitter.com/share?url=http://themeforest.net/user/codenpixel" className="share-twitter">
                                  <span className="icon icon-twitter">
                                  </span>

                                  <span className="share-title">

                                    Tweet
                              </span>
                                  <span className="share-count is-loaded">
                                    62
                              </span>
                                </a>

                              </div>

                            </div>
                          </div>
                        </div>

                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>



          <section id="page" className="container">
            <div className="shadow bg-white mTop-30 frameLR">
              <div className="row">
                <div className="col-md-3 col-sm-4">
                  <div className="l-element">
                    <div className="box-icon">
                      <div className="icon-wrap">
                        <i className="ti-target">
                        </i>
                      </div>
                      <div className="text">
                        <h4>
                          Find Your Deal
                    </h4>
                        <p>
                          Find perfect offer
                    </p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="l-element">
                    <div className="box-icon">
                      <div className="icon-wrap">
                        <i className="ti-shopping-cart">
                        </i>
                      </div>
                      <div className="text">
                        <h4>
                          Buy Deal
                    </h4>
                        <p>
                          Buy or save your deal
                    </p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="l-element">
                    <div className="box-icon">
                      <div className="icon-wrap">
                        <i className="fa fa-smile-o">
                        </i>
                      </div>
                      <div className="text">
                        <h4>
                          Up to 80% Discount
                    </h4>
                        <p>
                          Save hundreds of dollars
                    </p>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="col-md-3 col-sm-4">
                  <div className="l-element">
                    <div className="box-icon">
                      <div className="icon-wrap">
                        <i className="ti-star">
                        </i>
                      </div>
                      <div className="text">
                        <h4>
                          Five star Support
                    </h4>
                        <p>
                          +1 234-567-890
                    </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-12 clearfix">
                    <div className="hr-link">
                      <hr className="mBtm-50 mTop-30" data-symbol="FEATURED DEALS" />
                      <div className="view-all">
                        <a href="index-2.html">
                          VIEW ALL
                    </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="deal-entry  green">
                      <div className="offer-discount">
                        -81%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-12.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          19
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          US$349 -- Bermuda This Summer: 4-Star Resort w/$200 Credit*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -81%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              78,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deal-entry green">
                      <div className="offer-discount">
                        -58%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-13.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          79
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          $479 & up -- Riviera Maya All-Inclusive w/Air from 9 Cities 5*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              79,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="details.html" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="deal-entry  green">
                      <div className="offer-discount">
                        -81%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-3.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          19
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          US$349 -- Bermuda This Summer: 4-Star Resort w/$200 Credit*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -81%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              78,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deal-entry green">
                      <div className="offer-discount">
                        -58%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-4.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          79
                    </span>
                      </div>
                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          $479 & up -- Riviera Maya All-Inclusive w/Air from 9 Cities 5*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              79,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="details.html" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-sm-12 clearfix">
                    <hr className="hr-grid-space" data-symbol="POPULAR DEALS" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="deal-entry  orange">
                      <div className="offer-discount">
                        -55%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-5.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="details.html" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="deal-entry orange">
                      <div className="offer-discount">
                        -74%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-6.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-6">
                    <div className="deal-entry orange">
                      <div className="offer-discount">
                        -74%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-7.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="deal-entry orange">
                      <div className="offer-discount">
                        -55%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-8.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>

                </div>

                <div className="row">
                  <div className="col-sm-12 clearfix">
                    <hr className="hr-grid-space" data-symbol="LAST MINUTE DEALS" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="deal-entry blue">
                      <div className="offer-discount">
                        -55%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-10.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="deal-entry blue">
                      <div className="offer-discount">
                        -74%
                  </div>
                      <div className="image">
                        <a href="#" target="_blank" title="#">
                          <img src="images/affiliate-11.jpg" alt="#" className="img-responsive" />
                        </a>
                        <span className="bought">
                          <i className="ti-tag">
                          </i>
                          169
                    </span>
                      </div>

                      <div className="title">
                        <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                          3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                      </div>
                      <div className="entry-content">
                        <div className="prices clearfix">
                          <div className="procent">
                            -65%
                      </div>
                          <div className="price">
                            <i className="ti-money">
                            </i>

                            <b>
                              60,00
                        </b>
                          </div>
                          <div className="old-price">
                            <span>
                              <i className="ti-money">
                              </i>
                              171,00
                        </span>
                          </div>
                        </div>
                        <p>
                          Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                      </div>

                      <footer className="info_bar clearfix">
                        <ul className="unstyled list-inline row">
                          <li className="time col-sm-7 col-xs-6 col-lg-8">
                            <i className="ti-timer">
                            </i>
                            <b>
                              8
                        </b>
                            d.
                        <b>
                              20
                        </b>
                            st.
                        <b>
                              58
                        </b>
                            min.
                      </li>
                          <li className="info_link col-sm-5 col-xs-6 col-lg-4">
                            <a href="#" className="btn btn-block btn-default btn-raised btn-sm">
                              View Deal
                        </a>
                          </li>
                        </ul>
                      </footer>
                    </div>
                  </div>
                </div>


              </div>

              <div className="col-sm-4 sidebar">
                <div className="inner-side shadow">
                  <div className="widget widget-add">
                    <hr data-symbol="ADVERTISE" />
                    <img src="images/add-1.jpg" alt="add" className="img-responsive" />
                  </div>
                  <div className="widget widget-subscribe">
                    <hr data-symbol="SUBSCRIBE" />
                    <div className="newsletter">
                      <h4>
                        Get Updates
                    <span className="color-orange">
                          (it’s free)
                    </span>
                      </h4>
                      <p>
                        Subscribe to our newsletter for good deals, sent out every month.
                  </p>
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Email" />
                        <span className="input-group-btn">
                          <button className="btn btn-danger btn-raised ripple-effect" type="button">
                            Subscribe
                      </button>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="widget widget-menu">
                    <hr data-symbol="CATEGORIES" />

                    <ul className="nav sidebar-nav">
                      <li className="dropdown open">
                        <a className="ripple-effect dropdown-toggle" href="#" data-toggle="dropdown">
                          <i className="ti-shine">
                          </i>
                          Travel
                      <span className="sidebar-badge">
                            12
                      </span>
                          <b className="caret">
                          </b>
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#" tabIndex="-1">
                              Europe
                          <span className="sidebar-badge">
                                12
                          </span>
                            </a>
                          </li>
                          <li>
                            <a href="#" tabIndex="-1">
                              Promo
                          <span className="sidebar-badge">
                                0
                          </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-gift">
                          </i>
                          Gifts
                      <span className="sidebar-badge">
                            3
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-shopping-cart">
                          </i>
                          Products
                      <span className="sidebar-badge">
                            456
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-ticket">
                          </i>
                          Tickets
                      <span className="sidebar-badge badge-circle">
                            12
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-pulse">
                          </i>
                          Health
                      <span className="sidebar-badge badge-circle">
                            45
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-direction-alt">
                          </i>
                          Things To Do
                      <span className="sidebar-badge badge-circle">
                            117
                      </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ti-cut">
                          </i>
                          Fashion
                      <span className="sidebar-badge badge-circle">
                            117
                      </span>
                        </a>
                      </li>
                    </ul>

                  </div>

                  <div className="widget widget-tags">
                    <hr className="mBtm-50 mTop-30" data-symbol="POPULAR TAGS" />
                    <ul className="tags">
                      <li>
                        <a href="#" className="tag">
                          Vacation
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Travel
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Discount
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Croatia
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Adriatic
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Europe
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Monte Negro
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          New York
                    </a>
                      </li>
                      <li>
                        <a href="#" className="tag">
                          Paris
                    </a>
                      </li>
                    </ul>
                  </div>

                  <div className="widget widget-featured">
                    <hr data-symbol="BEST RATED" />
                    <div className="media media-sm entry-rating">
                      <div className="media-left">
                        <img className="media-object" src="images/affiliate-8.jpg" alt="blog-thumb" />
                      </div>
                      <div className="media-body">
                        <h5 className="media-heading">
                          <a href="#">
                            Sirenis Punta Cana Resort Casino
                      </a>
                        </h5>
                        <p className="stars">
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-start">
                          </i>
                          <i className="ti-star disabled">
                          </i>
                        </p>
                        <ul className="list-inline">
                          <li>
                            <p className="price line-trough">
                              $399.00
                        </p>
                          </li>
                          <li>
                            <p className="price">
                              $99.00
                        </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="media media-sm entry-rating">
                      <div className="media-left">
                        <img className="media-object" src="images/affiliate-7.jpg" alt="blog-thumb" />
                      </div>
                      <div className="media-body">
                        <h5 className="media-heading">
                          <a href="#">
                            Plaza Resort Hotel & SPA
                      </a>
                        </h5>
                        <p className="stars">
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-start">
                          </i>
                          <i className="ti-star">
                          </i>
                        </p>
                        <ul className="list-inline">
                          <li>
                            <p className="price line-trough">
                              $423.00
                        </p>
                          </li>
                          <li>
                            <p className="price">
                              $86.00
                        </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="media media-sm entry-rating">
                      <div className="media-left">
                        <img className="media-object" src="images/affiliate-1.jpg" alt="blog-thumb" />
                      </div>
                      <div className="media-body">
                        <h5 className="media-heading">
                          <a href="#">
                            Wyndham Garden at Palmas del Mar
                      </a>
                        </h5>
                        <p className="stars">
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-star">
                          </i>
                          <i className="ti-start">
                          </i>
                          <i className="ti-star">
                          </i>
                        </p>
                        <ul className="list-inline">
                          <li>
                            <p className="price line-trough">
                              $789.00
                        </p>
                          </li>
                          <li>
                            <p className="price">
                              $243.00
                        </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                  </div>

                  <div className="widget widget-tabs">
                    <div className="row">
                      <div className="col-sm-12">
                        <div role="tabpanel" id="tabs" className="tabbable responsive">

                          <ul className="nav nav-tabs" role="tablist">

                            <li role="presentation" className="active">
                              <a href="#home" aria-controls="home" role="tab" data-toggle="tab">
                                Latest
                          </a>
                            </li>
                            <li role="presentation">
                              <a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">
                                Comments
                          </a>
                            </li>
                          </ul>

                          <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="home">
                              <div className="deal-entry green deal-entry-sm">
                                <div className="offer-discount">
                                  $347
                            </div>
                                <div className="image ripple-effect">
                                  <a href="#" target="_blank" title="#">
                                    <img src="images/affiliate-12.jpg" alt="#" className="img-responsive" />
                                  </a>
                                  <span className="bought">
                                    <i className="ti-tag">
                                    </i>
                                    21
                              </span>
                                  <div className="caption">
                                    <h5 className="media-heading">
                                      <a href="#">
                                        Plaza Resort Hotel &amp; SPA
                                  </a>
                                    </h5>
                                    <p className="stars">
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-start">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                    </p>
                                  </div>
                                </div>
                                <footer className="clearfix">
                                  <div className="valueInfo shadow">
                                    <div className="value">
                                      <p className="value">
                                        $422
                                  </p>
                                      <p className="text">
                                        Value
                                  </p>
                                    </div>
                                    <div className="discount">
                                      <p className="value">
                                        64%
                                  </p>
                                      <p className="text">
                                        Discount
                                  </p>
                                    </div>
                                    <div className="save">
                                      <p className="value">
                                        $76
                                  </p>
                                      <p className="text">
                                        SAVINGS
                                  </p>
                                    </div>
                                  </div>
                                </footer>
                              </div>

                              <div className="deal-entry green deal-entry-sm">
                                <div className="offer-discount">
                                  $245
                            </div>
                                <div className="image ripple-effect">
                                  <a href="#" target="_blank" title="#">
                                    <img src="images/affiliate-1.jpg" alt="#" className="img-responsive" />
                                  </a>
                                  <span className="bought">
                                    <i className="ti-tag">
                                    </i>
                                    21
                              </span>
                                  <div className="caption">
                                    <h5 className="media-heading">
                                      <a href="#">
                                        Plaza Resort Hotel &amp; SPA
                                  </a>
                                    </h5>
                                    <p className="stars">
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-start">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                    </p>
                                  </div>
                                </div>
                                <footer className="clearfix">
                                  <div className="valueInfo shadow">
                                    <div className="value">
                                      <p className="value">
                                        $1,422
                                  </p>
                                      <p className="text">
                                        Value
                                  </p>
                                    </div>
                                    <div className="discount">
                                      <p className="value">
                                        59%
                                  </p>
                                      <p className="text">
                                        Discount
                                  </p>
                                    </div>
                                    <div className="save">
                                      <p className="value">
                                        $976
                                  </p>
                                      <p className="text">
                                        SAVINGS
                                  </p>
                                    </div>
                                  </div>
                                </footer>
                              </div>

                            </div>

                            <div role="tabpanel" className="tab-pane" id="profile">
                              <div className="wrap mTop-20">
                                <div className="comment clearfix">
                                  <div className="comment-avatar">
                                    <img src="images/avatar-2.jpg" alt="avatar" />
                                  </div>
                                  <header>
                                    <h5>
                                      Really Nice Vacation!
                                </h5>
                                    <div className="comment-meta stars">
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-start">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      | Today, 10:31
                                </div>

                                  </header>

                                </div>

                                <div className="mTop-20">
                                </div>
                                <div className="comment clearfix">
                                  <div className="comment-avatar">
                                    <img src="images/avatar-1.jpg" alt="avatar" />
                                  </div>
                                  <header>
                                    <h5>
                                      Great deal guys
                                </h5>
                                    <div className="comment-meta stars">
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-start">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      | Today, 20:47
                                </div>

                                  </header>

                                </div>

                                <div className="mTop-20">
                                </div>
                                <div className="comment clearfix">
                                  <div className="comment-avatar">
                                    <img src="images/avatar-2.jpg" alt="avatar" />
                                  </div>
                                  <header>
                                    <h5>
                                      This is Your ratings comment!
                                </h5>
                                    <div className="comment-meta stars">
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      <i className="ti-start">
                                      </i>
                                      <i className="ti-star">
                                      </i>
                                      | Today, 20:47
                                </div>

                                  </header>

                                </div>

                              </div>

                            </div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="widget">
                    <div className="box-icon">
                      <div className="icon-wrap">
                        <i className="ti-star">
                        </i>
                      </div>
                      <div className="text">
                        <h4>
                          share & get $5 in Deals
                    </h4>

                        <p>
                          earn $5 in Bosnus Deal when a friend buys this Deal from your personalised link full terms apply
                    </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </section>

          <div className="cta-box bg-blue-1 clearfix">
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-3 col-xs-12 pull-right">
                  <a href="#" className="btn btn-raised btn-primary ripple-effect btn-lg" data-original-title="" title="">
                    <i className="ti-shopping-cart">
                    </i>
                    &nbsp; Purchase Now
              </a>
                </div>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <h3>
                    Welcome to Kupon. Responsive Deal Template
              </h3>
                  <p>
                    Carefully designed to bring you the best performance, usage and customization experience!
              </p>
                </div>
              </div>
            </div>
          </div>

          <footer id="footer">
            <div className="container">
              <div className="col-sm-4">
                <img src="images/logo.png" alt="#" className="img-responsive logo" />
                <p>
                  Kupon,travel deals &amp; publishing,with minimal design. We provide you with the latest fresh inspiration straight from the industrie.
            </p>
              </div>
              <div className="col-sm-4">
                <h5>
                  COMMON TAGS
            </h5>
                <ul className="tags">
                  <li>
                    <a href="#" className="tag">
                      Vacation
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Rentals
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Deals
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Travel deals
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Vacation deals
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Adriatic coast
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Europe
                </a>
                  </li>
                  <li>
                    <a href="#" className="tag">
                      Island
                </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h5>
                  CATEGORIES
            </h5>
                <ul className="list-unstyled">
                  <li>
                    Vacation Deals
              </li>
                  <li>
                    Online Deals
              </li>
                  <li>
                    Digital goods
              </li>
                  <li>
                    Travel Deals
              </li>
                  <li>
                    Hotel deals
              </li>
                  <li>
                    Featured
              </li>
                  <li>
                    All Categories ..
              </li>
                </ul>
              </div>
              <div className="col-sm-2">
                <h5>
                  ABOUT US
            </h5>
                <ul className="list-unstyled">
                  <li>
                    Available Jobs
              </li>
                  <li>
                    Sumbit Deal
              </li>
                  <li>
                    Contact Us
              </li>
                  <li>
                    History
              </li>
                  <li>
                    Impressium
              </li>
                </ul>
              </div>
            </div>
            <div className="btmFooter">
              <div className="container">
                <div className="col-sm-7">
                  <p>
                    <strong>
                      Copyright 2015
                </strong>
                    Kupon- deals and Coupons template made with
                <i className="ti-heart">
                    </i>
                    <strong>
                      by Codenpixel
                </strong>
                  </p>
                </div>
                <div className="col-sm-5">
                  <ul className="pay-opt pull-right list-inline list-unstyled">
                    <li>
                      <a href="#" title="#">
                        <img src="images/amz-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="#">
                        <img src="images/paypal-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="#">
                        <img src="images/ax-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="#">
                        <img src="images/mb-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="#">
                        <img src="images/mst-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="#">
                        <img src="images/mstr-icon.png" className="img-responsive" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* <LatestProduct props={this.props} />
            <LatestDeal />
            <LatestCupon />
            <PopularStore />
            <LatestNews /> */}

      </React.Fragment >
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);