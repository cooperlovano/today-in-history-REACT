import React from 'react';
import GetCurrentDate from './getCurrentDate';
import Slider from 'react-rangeslider';
import loadingImage from './loading.gif';
//default slider styles
import 'react-rangeslider/lib/index.css';
//api
const API = "https://history.muffinlabs.com/date";

class Birth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderNow: 30,
            hits: " "
        };
    }
    handleOnChange = (value) => {
        this.setState({
            sliderNow: value
        })
        this.arrayInfo();
    }
    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.data.Births }));
    }
    arrayInfo(props) {
        if (this.state.hits !== " ") {
            let { sliderNow } = this.state;
            const whereWeAt = this.state.sliderNow;
            var eventYear = this.state.hits[whereWeAt].year;
            var eventText = this.state.hits[whereWeAt].text;
            var highestSliderVal = this.state.hits.length;
            var oldestYear = this.state.hits[0].year;
            var mostRecentYear = this.state.hits[highestSliderVal - 1].year;
            var yearNumber = new Date().getFullYear();
            var yearsSince = yearNumber - eventYear;
            return (
                <div className="contents">
                    <h1 className="year">{eventYear}</h1>
                    <h4 id="years_since_holder" className="small_describer">{yearsSince} years ago</h4>
                    <h4 id="event_holder">{eventText}</h4>
                    <div className="centeredSlider">
                        <div className="start">
                            <h5 id="first_year_holder">{oldestYear}</h5>
                        </div>
                        <div className="end">
                            <h5 id="recent_year_holder">{mostRecentYear}</h5>
                        </div>
                        <Slider
                            max={highestSliderVal - 1}
                            value={sliderNow}
                            orientation="horizontal"
                            onChange={this.handleOnChange}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="contents">
                    <h1 className="year">LOADING...</h1>
                    <img className="loading_img" src={loadingImage} alt="button" />
                </div>
            )
        }
    }
    render(props) {
        return (
            <div id="insertedElement">
                <h4 className="title">scroll through<br />today in history</h4>
                <GetCurrentDate />
                {this.arrayInfo()}
            </div>
        );
    }
}
export default Birth;

