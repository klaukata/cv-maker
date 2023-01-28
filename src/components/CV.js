import React from 'react';
import data from './sample-data';
import uniqid from "uniqid";

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }
    createAndFillElements() {
        let keysArr = Object.keys(this.state);
        let els = keysArr.map((key) => <p id={key} key={uniqid()}>{this.state[key]}</p>);
        return (els)
    }
    render() {
        return (
            <div className='CV'>
                {this.createAndFillElements()}
            </div>
        )
    }
}

export default CV