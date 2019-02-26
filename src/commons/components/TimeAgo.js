import { h, Component } from 'preact';

export default class TimeAgo extends Component {
  constructor(props, context) {
    super(props, context);
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(this.forceUpdate.bind(this), 60000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time } = this.props;
    if (!time) {
      return null;
    }

    return <span className="time">{time}</span>;
  }
}
