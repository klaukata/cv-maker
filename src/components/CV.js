import React from 'react';
import data from './sample-data';
import uniqid from "uniqid";

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = data;
    }
    createAndFillElements(section) {
        let keysArr = [];
        let els = []
        if (section === 'personalData') {
            keysArr = Object.keys(this.state[section]);
            els = keysArr.map((key) => <p id={'cv-' + key} key={uniqid()}>{this.state[section][key]}</p>);
        } else if (section === 'workExperience' || section === 'education') {
            let jobArr = Object.keys(this.state[section]);
            for (let job of jobArr) {
                keysArr = Object.keys(this.state[section][job]);
                let el = <div id={'cv-'+job}>
                    {keysArr.map((key) => <p id={'cv-' + job + key} key={uniqid()}>{this.state[section][job][key]}</p>)}
                </div>
                els.push(el);
            }
        }
        return (els);
    }
    render() {
        return (
            <div className='CV'>
                <div id='cv-personalData'>
                    {this.createAndFillElements('personalData')} 
                </div>
                <div id='cv-workExperience'>
                    {this.createAndFillElements('workExperience')} 
                </div>
                <div id='cv-education'>
                    {this.createAndFillElements('education')} 
                </div>
            </div>
        )
    }
}

export default CV