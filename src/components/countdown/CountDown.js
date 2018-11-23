import React from 'react';
import Countdown from 'react-countdown-now';

const countDown = (props) => {
  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    console.log(props.date);
    if (completed) {
      // Render a completed state
      return <div>THIS OFFER HAS EXPIRED</div>;
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