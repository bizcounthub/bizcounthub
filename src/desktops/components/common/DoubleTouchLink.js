import { h, Component } from 'preact';

export default class DoubleTouchLink extends Component {
  constructor(props) {
    super(props);

    this.touchTimer = null;
    this.timestamp = 0;
    this.link = null;
    this.handleTouch = this.handleTouch.bind(this);
  }

  handleTouch(e) {
    const { onTouch, shouldDoubleTouch } = this.props;
    if (shouldDoubleTouch && !shouldDoubleTouch()) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    // clear the previous
    if (this.touchTimer) {
      clearTimeout(this.touchTimer);
    }

    const timestamp = new Date().getTime();
    const doubleTouch = timestamp - this.timestamp < 300; // double touch

    if (doubleTouch) {
      this.link.click();
      return;
    }
    this.timestamp = timestamp;
    this.touchTimer = setTimeout(() => {
      onTouch(e);
    }, 300);
  }

  render() {
    const { children, ...props } = this.props;

    return (
      <a
        {...props}
        onTouchEnd={this.handleTouch}
        ref={c => {
          this.link = c;
        }}
      >
        {children}
      </a>
    );
  }
}
