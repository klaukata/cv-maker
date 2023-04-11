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
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h1 id={'cv-personalDataName'}>{data[x]['Name']}</h1>
                            <p id={'cv-personalDataPosition'}>{data[x]['Position']}</p>
                        </div>
                        <div>
                            <div id={'cv-personalDataPhoneDiv'} className={'d-flex gap-2'}>
                                <i className="bi bi-telephone"></i>
                                <p id={'cv-personalDataPhone'}>{data[x]['Phone']}</p>
                            </div>
                            <div id={'cv-personalDataMailDiv'} className={'d-flex gap-2'}>
                                <i className="bi bi-envelope"></i>
                                <p id={'cv-personalDataMail'}>{data[x]['Mail']}</p>
                            </div>
                            <div id={'cv-personalDataLocationDiv'} className={'d-flex gap-2'}>
                                <i className="bi bi-geo-alt"></i>
                                <p id={'cv-personalDataLocation'}>{data[x]['Location']}</p>
                            </div>
                        </div>    
                    </div>
                    
                    <p id={'cv-personalDataDescription'} className={'pt-2'}>{data[x]['Description']}</p>
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
            <div className='CV p-3 p-sm-4 px-md-5'>
                <div id='cv-personalData' className='pb-4 border-bottom border-2'>
                    {this.state.personalDataElements}
                </div>
                <div id='cv-workExperience' className='pt-4'>
                    <h4 className='text-uppercase'>work experience</h4>
                    {this.state.experienceElements}
                    {this.props.children[0]}
                </div>
                <div id='cv-education' className='pt-4'>
                    <h4 className='text-uppercase'>education</h4>
                    {this.state.educationElements}
                    {this.props.children[1]}
                </div>    
                
            </div>
        )
    }
}

export default CV