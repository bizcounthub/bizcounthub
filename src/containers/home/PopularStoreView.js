import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

class PopularStoreView extends Component {

  componentWillMount() {

  }
  componentDidMount() {

  }

  render() {
    const FETCH_POPULAR_STORE = gql`
    query fetch_popular_store {
      dim_store_v (limit : 10, order_by: {name: asc}) {
        id,
        name,
        logo,
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
              <OwlCarousel
                loop
                autoplay
                smartSpeed={1000}
                autoplayTimeout={10000}
                margin={20}
                items={2}
                responsiveClass
                responsive={{
                  0: {
                    items: 2,
                    nav: false
                  },
                  480: {
                    items: 2,
                    nav: false
                  },
                  768: {
                    items: 3,
                    nav: false
                  },
                  992: {
                    items: 5,
                    nav: false
                  },
                  1199: {
                    items: 6,
                    nav: false
                  }
                }}
              >
                {
                  stores.map((s, index) =>
                    <div key={index} className="store-item t-center">
                      <a href="store_single_01.html" className="panel is-block">
                        <div className="embed-responsive embed-responsive-4by3">
                          <div className="store-logo">
                            <img src={s.logo} alt=""></img>
                          </div>
                        </div>
                        <h6 className="store-name ptb-10">{s.name}</h6>
                      </a>
                    </div>
                  )
                }
              </OwlCarousel>
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
          <div className="popular-stores-slider">
            {storeItems}
          </div>
        </section>
      </React.Fragment >
    );
  }
}

export default PopularStoreView;