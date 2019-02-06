import React from 'react';
import { Link } from 'react-router-dom';

const navbarTop = (props) => (
  <React.Fragment>
    <div className="top-bar bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 is-hidden-sm-down">
            <ul className="nav-top nav-top-left list-inline t-left">
              <li>
                <Link to={{ pathname: "/term_condition" }}><i className="fa fa-question-circle"></i>Discounts Guide</Link>
              </li>
              <li>
                <Link to={{ pathname: "/faq" }}><i className="fa fa-support"></i>Customer Assistance</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-8">
            <ul className="nav-top nav-top-right list-inline t-xs-center t-md-right">
              <li>
                <Link to={{ pathname: "/" }}><i className="fa fa-flag-en"></i>English <i className="fa fa-caret-down"></i></Link>
                <ul>
                  <li>
                    <Link to={{ pathname: "/" }}><i className="fa fa-flag-en"></i>English</Link>
                  </li>
                  <li>
                    <Link to={{ pathname: "/" }}><i className="fa fa-flag-ar"></i>Khmer</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href=".html"><i className="fa fa-usd"></i>USD <i className="fa fa-caret-down"></i></a>
                <ul>
                  <li><a href=".html">USD - US Dollar</a>
                  </li>
                  <li><a href=".html">EUR - Euro</a>
                  </li>
                  <li><a href=".html">CNY - Chinese Yuan</a>
                  </li>
                  <li><a href=".html">RUB - Russian Ruble</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/signin"><i className="fa fa-lock"></i>Sign In</Link>
              </li>
              <li>
                <Link to="/signup"><i className="fa fa-user"></i>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default navbarTop;