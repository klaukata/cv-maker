import React from 'react';
import Input from './Input';
import DeleteButton from './DeleteButton';
import SampleInput from './sample-data/SampleInput';
import CVSection from './CVAddedSection';
import data from './sample-data/sample-data';
import uniqid from "uniqid";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            expAddedChildren: [],
            eduAddedChildren: []
        };
    }
    mountInputs(section, placeholderNames) {
        let inputs = [];
        if (section === 'personalDetails') {
            inputs = placeholderNames.map((placeholder) => 
                <SampleInput placeholder={placeholder} />
            );
        } else if (section === 'workExperience' || section === 'education') {
            let sectionArr = Object.keys(data[section]);
            for (let section of sectionArr) {
                let x = <div className={section}>
                    {placeholderNames.map((placeholder) => 
                        <SampleInput placeholder={section+placeholder} />
                    )}
                    <DeleteButton />
                </div>;
                inputs.push(x)
            }
        }
        return (inputs)
    }
    addSection(e) {
        let parent = e.target.parentElement;
        let section = parent.getAttribute('id').slice(5); // section = id name
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
            <div className={uniqid()}>
                {placeholderNames.map((placeholder) =>
                    <Input placeholder={placeholder} />
                )}
                <DeleteButton />
            </div>); 
        this.setState({
            [stateName]: this.state[stateName].concat(div)
        });
        this.createCVSection(section);
        console.log(section);
    }
    createCVSection(id) {
        let CVParentId = 'cv-' + id;
        let parent = document.getElementById(CVParentId);
        //parent.appendChild(<CVSection />)
        console.log(parent);
    }
    render() {
        return (
            <form>
                <div>
                    <h2>Pesonal Details</h2>
                    {this.mountInputs('personalDetails', ['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'])}
                </div>
                <div id='form-workExperience'>
                    <h2>Work Experience</h2>
                    <button type='button' onClick={(e) => this.addSection(e)}>ADD</button>
                    {this.mountInputs('workExperience', ['Company', 'Position', 'Start', 'End', 'Description'])}
                    {this.state.expAddedChildren.map(x => x)}

                </div>
                <div id='form-education'>
                    <h2>Education</h2>
                    <button type='button' onClick={(e) => this.addSection(e)}>ADD</button>
                    {this.mountInputs('education', ['Course', 'University', 'Start', 'End', 'Description'])}
                    {this.state.eduAddedChildren.map(x => x)}
                </div>
            </form>
        )
    }
};

export default Form;