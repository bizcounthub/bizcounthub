import React, { Component } from 'react';

class PopularStoreView extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section stores-area stores-area-v1 ptb-30">
          <header className="panel ptb-15 prl-20 pos-r mb-30">
            <h3 className="section-title font-18">Popular Stores</h3>
            <a href="stores_01.html" className="btn btn-o btn-xs pos-a right-10 pos-tb-center">All Stores</a>
          </header>
          <div className="popular-stores-slider owl-slider" data-loop="true" data-autoplay="true" data-smart-speed="1000" data-autoplay-timeout="10000" data-margin="20" data-items="2" data-xxs-items="2" data-xs-items="2" data-sm-items="3" data-md-items="5" data-lg-items="6">
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_01.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Amazon</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_02.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Ashford</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_03.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">DELL</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_04.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Card Cash</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_05.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Finish Line</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_06.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">JC Penny</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_07.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Callaway Golf</h6>
              </a>
            </div>
            <div className="store-item t-center">
              <a href="store_single_01.html" className="panel is-block">
                <div className="embed-responsive embed-responsive-4by3">
                  <div className="store-logo">
                    <img src="assets/images/brands/brand_08.jpg" alt=""></img>
                  </div>
                </div>
                <h6 className="store-name ptb-10">Car Toys</h6>
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default PopularStoreView;