import React from 'react';
import data from './sample-data/sample-data';
import uniqid from "uniqid";

class CV extends React.Component {
    constructor(props) {
        super(props);
    }
    createAndFillElements(section) {
        let els = []
        let keysArr = [];
        if (section === 'personalData') {
            keysArr = Object.keys(data[section]);
            els = keysArr.map((key) => <p id={'cv-personalDetails' + key} key={uniqid()}>{data[section][key]}</p>);
        } else if (section === 'workExperience' || section === 'education') {
            let jobArr = Object.keys(data[section]);
            
            for (let job of jobArr) {
                keysArr = Object.keys(data[section][job]);
                let el = <div id={'cv-'+job} key={uniqid()}>
                    {keysArr.map((key) => <p id={'cv-' + job + key} key={uniqid()}>{data[section][job][key]}</p>)}
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
                    {this.props.children}
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