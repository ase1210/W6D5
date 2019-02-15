import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: new Date()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({dateTime: new Date() });
  }

  render () {
    return (
      <h1>{this.state.dateTime.toTimeString().slice(0,8)}</h1>
    );
  }
}

export default Clock;
