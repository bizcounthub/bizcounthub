import React, { Component } from 'react';

class About extends Component {
  render() {
    console.log(this.props.history);
    return (
      <p>hello about us</p>
    );
  }
}

export default About;