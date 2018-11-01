import React from 'react';

import Aux from '../../hocs/Auxiliary/Auxiliary';

const datas = [
  { id: 1, name: "sotheara" },
  { id: 2, name: "monyta" }
];

const navbarTop = (props) => (
  <Aux>
    <div className="top-bar bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 is-hidden-sm-down">
            <ul className="nav-top nav-top-left list-inline t-left">
              <li><a href="terms_conditions.html"><i className="fa fa-question-circle"></i>Discounts Guide</a>
              </li>
              <li><a href="faq.html"><i className="fa fa-support"></i>Customer Assistance</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-8">
            <ul className="nav-top nav-top-right list-inline t-xs-center t-md-right">
              <li>
                <a href=".html"><i className="fa fa-flag-en"></i>English <i className="fa fa-caret-down"></i></a>
                <ul>
                  <li><a href="index-2.html"><i className="fa fa-flag-en"></i>English</a>
                  </li>
                  <li><a href="ar/index.html"><i className="fa fa-flag-ar"></i>العربية</a>
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
              <li><a href="signin.html"><i className="fa fa-lock"></i>Sign In</a>
              </li>
              <li><a href="signup.html"><i className="fa fa-user"></i>Sign Up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Aux>
);

export default navbarTop;