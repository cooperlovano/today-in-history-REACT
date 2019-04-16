import React from 'react';
import GetCurrentDate from './getCurrentDate';
import Slider from 'react-rangeslider';
import loadingImage from './loading.gif';
//import WikiLinks from './wikiLinks.js';
//default slider styles
//import 'react-rangeslider/lib/index.css';
//api
const API = "https://history.muffinlabs.com/date";

class Event extends React.Component {
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
            .then(data => this.setState({ hits: data.data.Events }));
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
            var wiki_links = this.state.hits[whereWeAt].links;
            var array_length = wiki_links.length;
            var title_array = [];
            var links_array = [];
            for (var i = 0; i < array_length; i++) {
                title_array.push((this.state.hits[whereWeAt].links[i].title));
            };
            for (var j = 0; j < array_length; j++) {
                links_array.push(this.state.hits[whereWeAt].links[j].link);
            };
            var linkss = links_array.map((links, index) =>
                <a key={index} href={index}></a>
            );
            var mapped_array = title_array.map((links, index) =>

                <li key={index}>{links}</li>
            );

            //const numbers = [1, 2, 3, 4, 5];
            //console.log(empty_array);
            //console.log(title1);

            //now you have array full of titles and links, alternating 

            //console.log(empty_array.length);
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
                        <h4 className="fullscreen_title">
                            learn more about<br />this event:<br /></h4>
                        <ul>{mapped_array}</ul>





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
export default Event;