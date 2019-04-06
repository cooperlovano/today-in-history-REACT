
import React from 'react';
import Event from './event';
import Death from './death';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventHidden: false,
      deathHidden: true
    };
    this.handleEventClick = this.handleEventClick.bind(this);
    this.handleDeathClick = this.handleDeathClick.bind(this);
  }

  handleEventClick(props) {
    if (this.state.eventHidden) {
      this.setState({ eventHidden: false });
    } this.setState({ eventHidden: true });

  }
  handleDeathClick(props) {
    this.setState({ deathHidden: false });
  }

  render() {
    return (

      <div className="data_toggle">
        <div className="eventWrapper">
          {this.state.eventHidden && <Event />}</div>
        <div className="event_third">
          <button onClick={this.handleEventClick}>Events</button>
        </div>
        <div className="death_third">
          <button onClick={this.handleDeathClick}>Deaths</button>
        </div>
        <div className="birth_third">
          <button onClick={this.handleClick}>Births</button>
        </div>

      </div>
    );
  }
}



export default Navigation;
