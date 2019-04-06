import React from 'react';

//api
const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class Event extends React.Component {
    constructor(props) {
        super(props);
        console.log("EVENT TRIGGERED FR");
        this.state = {
            hits: []
        };
    }


    componentDidMount() {
        fetch(API + DEFAULT_QUERY)
            .then(response => response.json())
            .then(data => this.setState({ hits: data.hits }));
    }

    render() {
        const { hits } = this.state;
        return (
            <div>
                <h1>EVENTS</h1>
                <ul>
                    {hits.map(hit => (
                        <li key={hit.objectID}>
                            <a href={hit.url}>{hit.title}</a>
                        </li>
                    ))}
                </ul>
            </div>


        );
    }
}
export default Event;