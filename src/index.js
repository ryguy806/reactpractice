import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
        name: "Lavender Town",
        region: "Kanto"
}

ReactDOM.render(

    <h1 id="heading" className="cool-text">{city.name} is in the {city.region} region</h1>,

    document.getElementById('root')
);
