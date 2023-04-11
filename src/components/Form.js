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
            expSampleChildren: this.mountInputs('workExperience', ['Position','Company',  'Start', 'End', 'Description']),
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
                let x = <div className='mt-2' id={section}  key={uniqid()}>
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
            placeholderNames = ['Position', 'Company', 'Start', 'End', 'Description'];
            stateName = 'expAddedChildren'
        } else {
            placeholderNames = ['Course', 'University', 'Start', 'End', 'Description'];
            stateName = 'eduAddedChildren'
        };
        let div = (
            <div className='mt-2' id={'addedSection-' + section + (this.props.num+1)} key={uniqid()}>
                {placeholderNames.map((placeholder, i) => 
                    <Input className={placeholderNames[i]} placeholder={placeholder} key={i} id={'form-addedSection-' + section + (this.props.num+1) + placeholder}/>
                )}
                <DeleteButton />
            </div>); 
        this.setState({
            [stateName]: [div, ...this.state[stateName]]
        });
    
    }
    render() {
        return (
            <form className='p-3 p-sm-4 px-md-5'>
                <div className='pb-3 border-bottom'>
                    <div>
                        <h4 className='sectionHeader'>Pesonal Details</h4>    
                    </div>
                    {this.mountInputs('personalData', ['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'])}
                    
                </div>
                <div id='form-workExperience' className='pb-3 border-bottom'>
                    <div>
                        <h4 className='sectionHeader'>Work Experience</h4>
                        <button className='btn btn-primary' type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>    
                    </div>
                    {this.state.expAddedChildren.map(x => x)}
                    {this.state.expSampleChildren.map(x => x)}

                </div>
                <div id='form-education'>
                    <div>
                        <h4 className='sectionHeader'>Education</h4>
                        <button className='btn btn-primary' type='button' onClick={(e) => this.appendComponents(e)}>ADD</button>    
                    </div>
                    {this.state.eduAddedChildren.map(x => x)}
                    {this.state.eduSampleChildren.map(x => x)}
                </div>
            </form>
        )
    }
};

export default Form;