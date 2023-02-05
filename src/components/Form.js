import React from 'react';
import SampleInput from './sample-data/SampleInput';
import DeleteButton from './DeleteButton';
import data from './sample-data/sample-data';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            expAddedChildren: []
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
        let parent = e.target.parentElement
        let section = parent.getAttribute('id').slice(5); // section = id name
        let placeholderNames = [];
        if (section === 'workExperience') {
            placeholderNames = ['Company', 'Position', 'Start', 'End', 'Description']
        } else {
            placeholderNames = ['Course', 'University', 'Start', 'End', 'Description']
        };
        let div = (<div className={section}>
            <p>hi</p>
            {/* {placeholderNames.map((placeholder) => 
                <p>hi!</p>
                <Input placeholder={section+placeholder} />
            )} */}
        </div>);
        this.setState({
            expAddedChildren: this.state.expAddedChildren.concat(div)
        })
        console.log(div);
        
        
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
                </div>
            </form>
        )
    }
};

export default Form;