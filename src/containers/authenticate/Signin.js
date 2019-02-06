import React, { Component } from 'react';

class Signin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="page-container ptb-60">
          <div className="container">
            <section className="sign-area panel p-40">
              <h3 className="sign-title">Sign In <small>Or <a href="signup.html" className="color-green">Sign Up</a></small></h3>
              <div className="row row-rl-0">
                <div className="col-sm-6 col-md-7 col-left">
                  <form className="p-40" action="#" method="post">
                    <div className="form-group">
                      <label className="sr-only">Email</label>
                      <input type="text" className="form-control input-lg" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <label className="sr-only">Password</label>
                      <input type="password" className="form-control input-lg" placeholder="Password" />
                    </div>
                    <div className="form-group">
                      <a href="#." className="forgot-pass-link color-green">Forget Youe Password ?</a>
                    </div>
                    <div className="custom-checkbox mb-20">
                      <input type="checkbox" id="remember_account" defaultChecked />
                      <label className="color-mid" htmlFor="remember_account">Keep me signed in on this computer.</label>
                    </div>
                    <button type="submit" className="btn btn-block btn-lg">Sign In</button>
                  </form>
                  <span className="or">Or</span>
                </div>
                <div className="col-sm-6 col-md-5 col-right">
                  <div className="social-login p-40">
                    <div className="mb-20">
                      <button className="btn btn-lg btn-block btn-social btn-facebook"><i className="fa fa-facebook-square"></i>Sign In with Facebook</button>
                    </div>
                    <div className="mb-20">
                      <button className="btn btn-lg btn-block btn-social btn-twitter"><i className="fa fa-twitter"></i>Sign In with Twitter</button>
                    </div>
                    <div className="mb-20">
                      <button className="btn btn-lg btn-block btn-social btn-google-plus"><i className="fa fa-google-plus"></i>Sign In with Google</button>
                    </div>
                    <div className="custom-checkbox mb-20">
                      <input type="checkbox" id="remember_social" defaultChecked />
                      <label className="color-mid" for="remember_social">Keep me signed in on this computer.</label>
                    </div>
                    <div className="text-center color-mid">
                      Need an Account ? <a href="signup.html" className="color-green">Create Account</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Signin;