import { Component } from 'react';

export default class KeydownWrapper extends Component {
  constructor(props) {
    super(props);

    this.handleDocumentKeyDown = this.handleDocumentKeyDown.bind(this);
    this.handleTab = this.handleTab.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleEsc = this.handleEsc.bind(this);
    this.handleArrowUp = this.handleArrowUp.bind(this);
    this.handleArrowDown = this.handleArrowDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleDocumentKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  handleTab(e) {
    const { onTab } = this.props;
    onTab && onTab(e);
  }

  handleEnter(e) {
    const { onEnter } = this.props;
    onEnter && onEnter(e);
  }

  handleEsc(e) {
    const { onEsc } = this.props;
    onEsc && onEsc(e);
  }

  handleArrowUp(e) {
    const { onArrowUp } = this.props;
    onArrowUp && onArrowUp(e);
  }

  handleArrowDown(e) {
    const { onArrowDown } = this.props;
    onArrowDown && onArrowDown(e);
  }

  handleDocumentKeyDown(event) {
    switch (event.which) {
      case 9: // tab
        this.handleTab(event);
        break;
      case 13: // enter
        this.handleEnter(event);
        break;
      case 27: // esc
        this.handleEsc(event);
        break;
      case 38: // up
        this.handleArrowUp(event);
        break;
      case 40: // down
        this.handleArrowDown(event);
        break;
    }
  }

  render() {
    return this.props.children;
  }
}
