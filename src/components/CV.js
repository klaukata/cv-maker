import React from 'react';
import data from './sample-data';
import uniqid from "uniqid";

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }
    createAndFillElements(section) {
        let keysArr = Object.keys(this.state[section]);
        //console.log(this.state[section][key]);
        let els = keysArr.map((key) => <p id={key} key={uniqid()}>{this.state[section][key]}</p>);
        return (els)
    }
    render() {
        return (
            <div className='CV'>
                {this.createAndFillElements('personalData')}
            </div>
        )
    }
}

export default CV