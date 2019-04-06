import React from 'react';
import Event from './event';
//import Death from './death';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            eventShown: false,
            deathShown: false
        };
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleDeathClick = this.handleDeathClick.bind(this);

    }
    handleEventClick(props) {
        this.setState({ eventShown: true });
        this.setState({ deathShown: false });
    }
    handleDeathClick(props) {
        this.setState({ deathShown: true });
    }


    /*
        handleEventClick(props) {
            this.setState({ deathShown: false });
            this.setState({ eventShown: true });
            this.returnCurrent();
            console.log("EVENT SHOWN VALUE: " + this.state.eventShown);
            console.log("DEATH SHOWN VALUE: " + this.state.deathShown);
        }
        handleDeathClick(props) {
            this.setState({ eventShown: false });
            this.setState({ deathShown: true });
            console.log("EVENT SHOWN VALUE: " + this.state.eventShown);
            console.log("DEATH SHOWN VALUE: " + this.state.deathShown);
    
        }
        */



    render() {
        var isEventShown = this.state.eventShown;
        let currentFrame;
        console.log(isEventShown);
        if (isEventShown) {
            currentFrame = <Event />

        }
        else {
            currentFrame = "NOTHING WAS TRIGGERED";

        }


        return (
            <div className="data_toggle">
                <div className="eventRoot">
                    {currentFrame}</div>
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



//<div className="eventRoot">
//{this.state.eventHidden && <Event />}</div>

//<div className="eventRoot">
  //                  {currentFrame}</div>