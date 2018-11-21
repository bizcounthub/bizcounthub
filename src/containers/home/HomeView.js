import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';

class HomeView extends Component {
  state = {
    posts: []
  }

  componentWillMount() {
    console.log("component willMount;");
  }

  componentDidUpdate() {
    // axios.get("https://jsonplaceholder.typicode.com/posts/1")
    //   .then(response => {
    //     //console.log(response);
    //   })
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
  }

  render() {
    const FETCH_CATEGORY = gql`
    query fetch_category {
      sttm_category_v {
        category_id, 
        description,
        language_id,
        create_at,
        image,
        fa_icon
      }
    }`;

    return (
      <React.Fragment>
        <div className="page-container ptb-10">
          <div className="container">
            <div className="section deals-header-area ptb-30">
              <div className="row row-tb-20">
                <div className="col-xs-12 col-md-4 col-lg-3">
                  <aside>
                    <ul className="nav-coupon-category panel">
                      <Query query={FETCH_CATEGORY}>
                        {({ loading, error, data }) => {
                          if (loading) return <div>Fetching</div>
                          if (error) {
                            console.log(error)
                            return (
                              <div>error</div>
                            )
                          }

                          const categories = data.sttm_category_v
                          return (
                            <React.Fragment>
                              {
                                categories.map(s =>
                                  <li key={s.category_id} ><Link to={{ pathname: "/" }}><i className={s.fa_icon}></i>{s.description}</Link></li>
                                )
                              }
                              <li className="all-cat">
                                <Link className="font-14" to={{ pathname: "/" }}>All Categories</Link>
                              </li>
                            </React.Fragment>
                          )
                        }}
                      </Query>
                    </ul>
                  </aside>
                </div>
                <div className="col-xs-12 col-md-8 col-lg-9">
                  <div className="header-deals-slider owl-slider"
                    data-loop="true"
                    data-autoplay="true"
                    data-autoplay-timeout="10000"
                    data-smart-speed="1000"
                    data-nav-speed="false"
                    data-nav="true"
                    data-xxs-items="1"
                    data-xxs-nav="true"
                    data-xs-items="1"
                    data-xs-nav="true"
                    data-sm-items="1"
                    data-sm-nav="true"
                    data-md-items="1"
                    data-md-nav="true"
                    data-lg-items="1"
                    data-lg-nav="true">
                    <div className="deal-single panel item">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_01.jpg">
                        <div className="label-discount top-10 right-10">-50%</div>
                        <ul className="deal-actions top-10 left-10">
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
                        <div className="deal-about p-20 pos-a bottom-0 left-0">
                          <div className="rating mb-10">
                            <span className="rating-stars" data-rating="5">
                              <i className="fa fa-star-o star-active"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                              <i className="fa fa-star-o"></i>
                            </span>
                            <span className="rating-reviews color-light">
                              ( <span className="rating-count">241</span> Reviews )
                            </span>
                          </div>
                          <h3 className="deal-title mb-10 ">
                            <a href="deal_single.html" className="color-light color-h-lighter">The Crash Bad Instant Folding Twin Bed</a>
                          </h3>
                        </div>
                      </figure>
                    </div>
                    <div className="deal-single panel item">
                      <figure className="deal-thumbnail embed-responsive embed-responsive-16by9" data-bg-img="assets/images/deals/deal_02.jpg">
                        <div className="label-discount top-10 right-10">-30%</div>
                        <ul className="deal-actions top-10 left-10">
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
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomeView;