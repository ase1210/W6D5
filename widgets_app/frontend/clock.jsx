import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };
    this.id = 0;

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.id = setInterval(this.tick, 1000);
    // console.log(this.id);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState({dateTime: new Date() });
  }

  render () {
    return (
      <div>
        <div className="clockTitle">
          <h1>Clock</h1>
        </div>
        <div className="clock">
          <div className="time">
            <p>Time:</p>
            <p>{this.state.dateTime.toTimeString().slice(0,8)}</p>
          </div>
          <div className="date">
            <p>Date:</p>
            <p>{this.state.dateTime.toDateString()}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
