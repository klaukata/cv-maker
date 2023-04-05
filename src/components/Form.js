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
            expSampleChildren: this.mountInputs('workExperience', ['Company', 'Position', 'Start', 'End', 'Description']),
            eduSampleChildren: this.mountInputs('education', ['Course', 'University', 'Start', 'End', 'Description']),
            expAddedChildren: [],
            eduAddedChildren: []
        };
    }
    mountInputs(section, placeholderNames) {
        let inputs = [];
        if (section === 'personalData') {
            inputs = <div id={section}  key={uniqid()}>
                    {placeholderNames.map((placeholder, i) => 
                        <SampleInput className={placeholderNames[i]} placeholder={section+placeholder} key={i} />
                    )}
                </div>;
        } else if (section === 'workExperience' || section === 'education') {
            let sectionArr = Object.keys(data[section]);
            for (let section of sectionArr) {
                let x = <div id={section}  key={uniqid()}>
                    {placeholderNames.map((placeholder, i) => 
                        <SampleInput className={placeholderNames[i]} placeholder={section+placeholder} key={i} />
                    )}
                    <DeleteButton />
                </div>;
                inputs.push(x)
            }
        }
        return (inputs)
    }
    appendComponents(e) {
        let parent = e.target.parentElement.parentElement;
        let section = parent.getAttribute('id').slice(5);
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
                    <Input className={placeholderNames[i]} placeholder={placeholder} key={i} id={'form-addedSection-' + section + (this.props.num+1) + placeholder}/>
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
                    <h2 className='sectionHeader'>Pesonal Details</h2>
                    {this.mountInputs('personalData', ['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'])}
                    
                </div>
                <div id='form-workExperience'>
                    <div>
                        <h2 className='sectionHeader'>Work Experience</h2>
                        <button type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>    
                    </div>
                    {this.state.expSampleChildren.map(x => x)}
                    {this.state.expAddedChildren.map(x => x)}

                </div>
                <div id='form-education'>
                    <div>
                        <h2 className='sectionHeader'>Education</h2>
                        <button type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>    
                    </div>
                    {this.state.eduSampleChildren.map(x => x)}
                    {this.state.eduAddedChildren.map(x => x)}
                </div>
            </form>
        )
    }
};

export default Form;