import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';

class PopularStoreView extends Component {
  render() {
    const FETCH_POPULAR_STORE = gql`
    query fetch_popular_store {
      dim_store_v {
        id,
        name
      }
    }
    `;

    const storeItems = (
      <Query query={FETCH_POPULAR_STORE}>
        {({ loading, error, data }) => {
          if (loading) return null

          if (error) return null

          const stores = data.dim_store_v

          return (
            <React.Fragment>
              {
                stores.map((s, index) =>
                  <div key={index} className="store-item t-center">
                    <a key={index} href="store_single_01.html" className="panel is-block">
                      <div key={index} className="embed-responsive embed-responsive-4by3">
                        <div key={index} className="store-logo">
                          <img key={index} src="assets/images/brands/brand_01.jpg" alt=""></img>
                        </div>
                      </div>
                      <h6 key={index} className="store-name ptb-10">Amazon</h6>
                    </a>
                  </div>
                )
              }
            </React.Fragment>
          )
        }}
      </Query>
    );

    return (
      <React.Fragment>
        <section className="section stores-area stores-area-v1 ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Popular Stores</h3>
            <a href="stores_01.html" className="btn btn-o btn-xs pos-a right-10 pos-tb-center">All Stores</a>
          </header>
          <div className="popular-stores-slider owl-slider" data-loop="true" data-autoplay="true" data-smart-speed="1000" data-autoplay-timeout="10000" data-margin="20" data-items="2" data-xxs-items="2" data-xs-items="2" data-sm-items="3" data-md-items="5" data-lg-items="6">
            {storeItems}
          </div>
        </section>
      </React.Fragment >
    );
  }
}

export default PopularStoreView;