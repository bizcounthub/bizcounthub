import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import CountDown from '../../components/countdown/CountDown';

class LatestProductView extends Component {

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    const FETCH_DIS_PRODUCT = gql`
    query fetch_dis_product {
      product_discount_v (limit: 9) {
        product_name,
        discount_price,
        from_date,
        to_date,
        discount_percentage,
        img,
        id
      }
    }`;

    const products = (
      <Query query={FETCH_DIS_PRODUCT}>
        {({ loading, error, data }) => {
          if (loading) {
            console.log("fetching...")
            return <div>Fetching</div>
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
                data.product_discount_v.map(x =>
                  <div key={x.id} className="col-sm-6 col-lg-4">
                    <div className="deal-single panel">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-16by9">
                        <img alt="" src={x.img}></img>
                        <div className="label-discount left-20 top-15">{x.discount_percentage}</div>
                        {/* <ul className="deal-actions top-15 right-20"> */}
                        {/* <li className="like-deal">
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
                          </li> */}
                        {/* <li>
                            <span>
                              <i className="fa fa-camera"></i>
                            </span>
                          </li> */}
                        {/* </ul> */}
                        <div className="time-left bottom-15 right-20 font-md-14">
                          <span>
                            <i className="ico fa fa-clock-o mr-10"></i>
                            <CountDown date={x.to_date}></CountDown>
                          </span>
                        </div>
                        <div className="deal-store-logo">
                          <img src="assets/images/brands/brand_01.jpg" alt=""></img>
                        </div>
                      </figure>
                      <div className="bg-white pt-10 pl-10 pr-10">
                        <div className="pr-md-10">
                          <h3 className="deal-title">
                            <Link to={{ pathname: "/deal" }}>{x.product_name}</Link>
                            <span className="text-right">$300.00</span>
                          </h3>
                          <ul className="deal-meta list-inline color-mid">
                            <li><i className="ico fa fa-map-marker mr-5"></i>United State</li>
                            <li><i className="ico fa fa-shopping-basket mr-5"></i>120 Bought</li>
                          </ul>
                          {/* <p className="text-muted mb-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam numquam nostrum.</p> */}
                        </div>
                        {/* <div className="rating mb-10">
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
                        </div> */}
                        <div className="deal-price pos-l">
                          <h3 className="price ptb-5 text-left"><span className="price-sale">$300.00</span>$150.00</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            </React.Fragment>
          )
        }}
      </Query>
    )
    return (
      <React.Fragment>
        <section className="section latest-deals-area ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Latest Products</h3>
            <Link to={{ pathname: "/" }} className="btn btn-o btn-xs pos-a right-10 pos-tb-center">View All</Link>
          </header>

          <div className="row row-masnory row-tb-20">
            {products}
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default LatestProductView;