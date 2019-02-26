import { h, Component } from 'preact';
import classNames from 'classnames';
import { isEmail } from 'app/common/helpers/strings';
import SigninFlyoutFormGDPR from './SigninFlyoutFormGDPR';
import FacebookSigninButton from './FacebookSigninButton';
import GoogleSigninButton from './GoogleSigninButton';

export default class SigninFlyoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rememberMe: true,
      email: '',
      password: '',
      focused: null,
      validator: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.renderEmailField = this.renderEmailField.bind(this);
    this.renderPasswordField = this.renderPasswordField.bind(this);
    this.renderSocial = this.renderSocial.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.signinFlyout.show && this.props.signinFlyout.show) {
      setTimeout(() => {
        // NOTE this doesn't work 100% as it needs to trigger a focus to set a filled class
        const form = document.getElementById('ls-signin-form');
        // only test for autofill in chrome. Otherwise old browsers like IE11
        // will throw a syntax error for this selector
        if (window.chrome && form.querySelector('input:-webkit-autofill')) {
          form.click();
        }
      }, 250);
    }
  }

  handleFocus(event) {
    this.props.activeSigninFlyout();
    this.setState({
      focused: event.target.name,
    });
  }

  handleBlur(event) {
    const name = event.target.name;
    const { validator } = this.state;
    switch (name) {
      case 'email':
        validator[name] = this.validateEmail();
        break;
      case 'password':
        validator[name] = this.validatePassword();
        break;
    }

    this.setState({ validator, focused: null });
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      validator: Object.assign(this.state.validator, {
        [name]: null,
      }),
    });
  }

  handleSubmit(e) {
    const { email, password, rememberMe } = this.state;
    e.preventDefault();
    const emailValidator = this.validateEmail();
    const passwordValidator = this.validatePassword();
    if (emailValidator !== 'success' && passwordValidator !== 'success') {
      this.setState({
        validator: Object.assign(this.state.validator, {
          email: emailValidator,
          password: passwordValidator,
        }),
      });
      return;
    }

    const postData = { email, password, rememberMe };
    this.props.signInWithForm(postData);
  }

  validateEmail() {
    const { email } = this.state;

    if (!email) {
      return 'required';
    }

    if (!isEmail(email)) {
      return 'invalid';
    }

    return 'success';
  }

  validatePassword() {
    const { password } = this.state;
    if (!password) {
      return 'required';
    }
    return 'success';
  }

  renderPasswordField() {
    const { t } = this.props;
    const { validator, focused, password } = this.state;
    let errorMessage = null;
    if (validator.password && validator.password === 'required') {
      errorMessage =
        focused === 'password'
          ? t.signinFlyout.requiredPassword
          : t.signinFlyout.required;
    }
    return (
      <div
        className={classNames('gig-field', {
          error: validator.password && validator.password !== 'success',
          filled: password.length > 0,
          focused: focused === 'password',
          success: validator.password === 'success',
        })}
        id="field-password-input"
      >
        <label htmlFor="sf-pw">
          {t.signinFlyout.password}
          {errorMessage && (
            <span className="error-message">{errorMessage}</span>
          )}
        </label>
        <input
          className="field-input"
          id="sf-pw"
          type="password"
          tabIndex="0"
          name="password"
          value={password}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleChange}
          autoComplete="current-password"
        />
        <span className="icon icon-key" />
      </div>
    );
  }

  renderEmailField() {
    const { t } = this.props;
    const { validator, focused, email } = this.state;
    let errorMessage = null;
    if (validator.email) {
      if (validator.email === 'required') {
        errorMessage =
          focused === 'email'
            ? t.signinFlyout.requiredEmail
            : t.signinFlyout.required;
      } else if (validator.email === 'invalid') {
        errorMessage = t.signinFlyout.invalidEmail;
      }
    }
    return (
      <div
        className={classNames('gig-field', {
          error: validator.email && validator.email !== 'success',
          filled: email.length > 0,
          focused: focused === 'email',
          success: validator.email === 'success',
        })}
      >
        <label htmlFor="sf-email">
          {t.signinFlyout.email}
          {errorMessage && (
            <span className="error-message">{errorMessage}</span>
          )}
        </label>
        <input
          className="field-input"
          id="sf-email"
          type="email"
          tabIndex="0"
          name="email"
          autoCorrect="off"
          value={email}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onInput={this.handleChange}
          autoComplete="email"
        />
        <span className="icon icon-email" />
      </div>
    );
  }

  renderSocial() {
    const { t, flags, app } = this.props;
    const { facebookAppId, googleClientId } = app;
    if (!(facebookAppId || googleClientId)) {
      return null;
    }

    return (
      <div id="sf-social-stuff">
        <div className="sf-or">{t.signinFlyout.signInWith}</div>
        <SigninFlyoutFormGDPR t={t} flags={flags} />
        <div className="sf-social">
          {facebookAppId ? <FacebookSigninButton {...this.props} /> : null}
          {googleClientId ? <GoogleSigninButton {...this.props} /> : null}
        </div>
      </div>
    );
  }

  render() {
    const { t, signinFlyout } = this.props;

    return (
      <div className="sf-login">
        {signinFlyout.error && (
          <div className="ls-signin-error-msg show" id="ls-signin-error">
            {t.signinFlyout.invalidEmailOrPassword}
          </div>
        )}
        <form
          id="ls-signin-form"
          className="form-v2-1 ls-signin-form"
          data-bhw="ls-signin-form"
          method="post"
          action="/login"
          noValidate
          onSubmit={this.handleSubmit}
        >
          <div className="ax-hidden">{t.signinFlyout.myStuff}</div>
          {this.renderEmailField()}
          {this.renderPasswordField()}
          <div className="signin-remember-forgot">
            <div className="signin-remember">
              <input
                type="checkbox"
                id="ls-remember-me"
                name="rememberMe"
                tabIndex="0"
                checked={this.state.rememberMe}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
              />
              <label htmlFor="ls-remember-me">
                {t.signinFlyout.rememberMe}
              </label>
            </div>
            <div className="signin-forgot">
              <a
                id="ls-forgot-password"
                href="/forgot_password"
                rel="nofollow"
                tabIndex="0"
              >
                {t.signinFlyout.forgotPassword}
              </a>
            </div>
          </div>
          <button className="btn btn-signin" type="submit" tabIndex="0">
            {t.signinFlyout.signIn}
          </button>
        </form>
        {this.renderSocial()}
      </div>
    );
  }
}
