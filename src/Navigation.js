import React from 'react';
import Event from './event';
import Death from './death';
import Birth from './birth';
import eventImage from './events.png';
import deathImage from './deaths.png';
import birthImage from './births.png';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shown: "Event",
        };
        this.handleEventClick = this.handleEventClick.bind(this);
        this.handleDeathClick = this.handleDeathClick.bind(this);
        this.handleBirthClick = this.handleBirthClick.bind(this);
    }
    handleEventClick(props) {
        this.setState({ shown: "Event" });
    }
    handleDeathClick(props) {
        this.setState({ shown: "Death" })
    }
    handleBirthClick(props) {
        this.setState({ shown: "Birth" })
    }
    render() {
        return (
            <div>
                <div className="eventRoot">
                    {(() => {
                        switch (this.state.shown) {
                            case "Event": return <Event />
                            case "Death": return <Death />
                            case "Birth": return <Birth />
                            default: return <Event />
                        }
                    })()}
                </div>
                <div>
                    <button className={this.state.shown === "Event" ? "active event_third" : "event_third"}><img className="buttonImage" src={eventImage} alt="button" onClick={this.handleEventClick}></img></button>
                </div>
                <div>
                    <button className={this.state.shown === "Death" ? "active death_third" : "death_third"}><img className="buttonImage" src={deathImage} alt="button" onClick={this.handleDeathClick}></img></button>
                </div>
                <div>
                    <button className={this.state.shown === "Birth" ? "active birth_third" : "birth_third"}><img className="buttonImage" src={birthImage} alt="button" onClick={this.handleBirthClick}></img></button>
                </div>

            </div>


        );
    }
}
export default Navigation;
