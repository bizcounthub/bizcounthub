import React from 'react';
import Countdown from 'react-countdown-now';

const countDown = (props) => {
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <span className="t-uppercase" data-countdown={props.date}>THIS OFFER HAS EXPIRED</span>;
    } else {
      // Render a countdown
      return (
        <span className="t-uppercase" data-countdown={props.date}>{hours}:{minutes}:{seconds}</span>
      )
    }
  };

  return (
    <React.Fragment>
      <Countdown
        date={props.date}
        renderer={renderer}
      />
    </React.Fragment>
  )
}
export default countDown;