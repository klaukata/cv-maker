import React from 'react';
import data from './sample-data/sample-data';
import uniqid from "uniqid";

class CV extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalDataElements: [],
            experienceElements: [],
            educationElements: []
        }
    }
    componentDidMount() {
        for (let x in data) { // executes 3 times
            let keysArr = [];
            let elements = [];
            let stateName;
            if (x === 'personalData') {
                stateName = 'personalDataElements';
                elements = <div id='cv-personalData'>
                    <div>
                        <p id={'cv-personalDataName'}>{data[x]['Name']}</p>
                        <p id={'cv-personalDataPosition'}>{data[x]['Name']}</p>
                    </div>
                    <div>
                        <p id={'cv-personalDataPhone'}>{data[x]['Phone']}</p>
                        <p id={'cv-personalDataMail'}>{data[x]['Mail']}</p>
                        <p id={'cv-personalDataLocation'}>{data[x]['Location']}</p>
                    </div>
                    <p id={'cv-personalDataDescription'}>{data[x]['Description']}</p>
                </div>
            } else if (x === 'workExperience' || x === 'education') {
                let arr = Object.keys(data[x]);
                stateName = (x === 'workExperience') ? 'experienceElements' : 'educationElements';
                for (let y of arr) {
                    keysArr = Object.keys(data[x][y]);
                    let el = <div id={'cv-'+y} key={uniqid()}>
                        {keysArr.map((key) => {
                            let pElement = <p id={'cv-' + y + key} key={uniqid()}>{data[x][y][key]}</p>
                            let signElement = (key === "Company" || key === "University") ? <p>|</p> : (key ==="Start") ? <p>-</p> : false;
                            return (!signElement)? pElement : <>{pElement}{signElement}</>;
                        })}
                    </div>
                    elements.push(el);
                }
                
            }
            this.setState({
                [stateName]: [...this.state[stateName], elements]
            }); 
            
        }
    }
    render() {
        return (
            <div className='CV'>
                <div id='cv-personalData'>
                    {this.state.personalDataElements}
                    {console.log(this.state.personalDataElements[0])}
                </div>
                <div id='cv-workExperience'>
                    <h3 className='text-uppercase'>work experience</h3>
                    {this.state.experienceElements}
                    {this.props.children[0]}
                </div>
                <div id='cv-education'>
                    <h3 className='text-uppercase'>education</h3>
                    {this.state.educationElements}
                    {this.props.children[1]}
                </div>    
                
            </div>
        )
    }
}

export default CV