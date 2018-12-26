import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  componentDidMount() {
    console.log("will wtf 404");
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-container pt-40 pb-60">
          <div className="container">
            <section className="error-page-area">
              <div className="container">
                <div className="error-page-wrapper t-center">
                  <div className="error-page-header">
                    <span className="color-blue">4</span>
                    <span className="color-green">0</span>
                    <span className="color-blue">4</span>
                  </div>
                  <div className="error-page-footer">
                    <h5 className="color-mid mb-5">Oops !</h5>
                    <h2 className="t-uppercase m-10 color-green">Sorry</h2>
                    <p className="color-muted mb-30 font-15">
                      The Page you are looking for cannot be found!
                    </p>
                  </div>
                  <Link to={{ pathname: "/" }} className="btn btn-rounded">Back to home page</Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NotFound;