import React from 'react';
//api
const API = "https://hn.algolia.com/api/v1/search?query=";
const DEFAULT_QUERY = "redux";

class Death extends React.Component {
    constructor(props) {
        super(props);

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
                <h1>DEATH</h1>
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


export default Death;