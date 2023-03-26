import React from 'react';
import Input from './Input';
import DeleteButton from './DeleteButton';
import SampleInput from './sample-data/SampleInput';
import data from './sample-data/sample-data';
import uniqid from "uniqid";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            personalDataSampleChildren: this.createInputs(false, 'personalData'),
            expSampleChildren: this.createInputs(false, 'workExperience'),
            eduSampleChildren: this.createInputs(false, 'education'),
            expAddedChildren: [],
            eduAddedChildren: []
        };
    }
    componentDidMount() {

    }

    createInputs(isCustomData, personalOrExpOrEdu) {
        // placeholderNames === what inputs to create
        let inputElements = [];
        let placeholderNames = [];
        let stateName;
        if (personalOrExpOrEdu === 'personalData') {
            placeholderNames = ['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'];
            stateName = 'personalDataSampleChildren'
            inputElements = <div id={personalOrExpOrEdu}  key={uniqid()}>
                {placeholderNames.map((placeholder, i) => 
                    <SampleInput placeholder={personalOrExpOrEdu+placeholder} key={i} />
                )}
            </div>;
            return (inputElements)
        } else {
            let sectionArr = Object.keys(data[personalOrExpOrEdu]);
            if (personalOrExpOrEdu === 'workExperience') {
                placeholderNames = ['Company', 'Position', 'Start', 'End', 'Description']
                stateName = (isCustomData) ? 'expAddedChildren' : 'expAddedChildren';
                
            } else {
                placeholderNames = ['Course', 'University', 'Start', 'End', 'Description']
                stateName = (isCustomData) ? 'eduSampleChildren' : 'eduAddedChildren';
            }
            for (let section of sectionArr) {
                let x = <div id={section}  key={uniqid()}>
                    {placeholderNames.map((placeholder, i) => 
                        <SampleInput placeholder={section+placeholder} key={i} />
                    )}
                    <DeleteButton />
                </div>;
                inputElements.push(x)
            }
            return (inputElements)
        }
        if (isCustomData) {

        } else {

        }
    }
    appendComponents(e) {
        let parent = e.target.parentElement;
        let section = parent.getAttribute('id').slice(5); // section = id name
        this.props.onAddChild(section); // creates cv section

        let placeholderNames = [];
        let stateName;
        if (section === 'workExperience') {
            placeholderNames = ['Company', 'Position', 'Start', 'End', 'Description'];
            stateName = 'expAddedChildren'
        } else {
            placeholderNames = ['Course', 'University', 'Start', 'End', 'Description'];
            stateName = 'eduAddedChildren'
        };
        let div = (
            <div id={'addedSection-' + section + (this.props.num+1)} key={uniqid()}>
                {placeholderNames.map((placeholder, i) => 
                    <Input placeholder={placeholder} key={i}/>
                )}
                <DeleteButton />
            </div>); 
        this.setState({
            [stateName]: [...this.state[stateName], div]
        });
    
    }
    render() {
        return (
            <form>
                <div>
                    <h2>Pesonal Details</h2>
                    {this.state.personalDataSampleChildren}
                    
                </div>
                <div id='form-workExperience'>
                    <h2>Work Experience</h2>
                    <button type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>
                    {this.state.expSampleChildren.map(x => x)}
                    {this.state.expAddedChildren.map(x => x)}

                </div>
                <div id='form-education'>
                    <h2>Education</h2>
                    <button type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>
                    {this.state.eduSampleChildren.map(x => x)}
                    {this.state.eduAddedChildren.map(x => x)}
                </div>
            </form>
        )
    }
};

export default Form;