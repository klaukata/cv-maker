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
                keysArr = Object.keys(data[x]);
                elements = keysArr.map((key) => <p id={'cv-personalData' + key} key={uniqid()}>{data[x][key]}</p>);
            } else if (x === 'workExperience' || x === 'education') {
                let arr = Object.keys(data[x]);
                stateName = (x === 'workExperience') ? 'experienceElements' : 'educationElements';
                for (let y of arr) {
                    keysArr = Object.keys(data[x][y]);
                    console.log(keysArr);
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
                </div>
                <div id='cv-workExperience'>
                    <h3 class='text-uppercase'>work experience</h3>
                    {this.props.children[0]}
                    {this.state.experienceElements}
                </div>
                <div id='cv-education'>
                    <h3 class='text-uppercase'>education</h3>
                    {this.props.children[1]}
                    {this.state.educationElements}
                </div>    
                
            </div>
        )
    }
}

export default CV