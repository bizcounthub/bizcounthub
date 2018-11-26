import React, { Component } from 'react';

class RegisterView extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="page-container ptb-60">
					<div className="container">
						<section className="sign-area panel p-40">
							<h3 className="sign-title">Sign Up <small>Or <a href="signin.html" className="color-green">Sign In</a></small></h3>
							<div className="row row-rl-0">
								<div className="col-sm-6 col-md-7 col-left">
									<form className="p-40" action="#" method="post">
										<div className="form-group">
											<label className="sr-only">Full Name</label>
											<input type="text" className="form-control input-lg" placeholder="Full Name" />
										</div>
										<div className="form-group">
											<label className="sr-only">Email</label>
											<input type="password" className="form-control input-lg" placeholder="Email" />
										</div>
										<div className="form-group">
											<label className="sr-only">Password</label>
											<input type="password" className="form-control input-lg" placeholder="Password" />
										</div>
										<div className="form-group">
											<label className="sr-only">Confirm Password</label>
											<input type="password" className="form-control input-lg" placeholder="Confirm Password" />
										</div>
										<div className="custom-checkbox mb-20">
											<input type="checkbox" id="agree_terms" />
											<label className="color-mid" htmlFor="agree_terms">I agree to the <a href="terms_conditions.html" className="color-green">Terms of Use</a> and <a href="terms_conditions.html" className="color-green">Privacy Statement</a>.</label>
										</div>
										<button type="submit" className="btn btn-block btn-lg">Sign Up</button>
									</form>
									<span className="or">Or</span>
								</div>
								<div className="col-sm-6 col-md-5 col-right">
									<div className="social-login p-40">
										<div className="mb-20">
											<button className="btn btn-lg btn-block btn-social btn-facebook"><i className="fa fa-facebook-square"></i>Sign Up with Facebook</button>
										</div>
										<div className="mb-20">
											<button className="btn btn-lg btn-block btn-social btn-twitter"><i className="fa fa-twitter"></i>Sign Up with Twitter</button>
										</div>
										<div className="mb-20">
											<button className="btn btn-lg btn-block btn-social btn-google-plus"><i className="fa fa-google-plus"></i>Sign Up with Google</button>
										</div>
										<div className="custom-checkbox mb-20">
											<input type="checkbox" id="remember_social" defaultChecked />
											<label className="color-mid" htmlFor="remember_social">Keep me signed in on this computer.</label>
										</div>
										<div className="text-center color-mid">
											Already have an Account ? <a href="signin.html" className="color-green">Login</a>
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

export default RegisterView;