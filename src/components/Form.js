import React from 'react';
import Input from './Input';
import data from './sample-data';

class Form extends React.Component {
    mountInputs(section, placeholderNames) {
        let inputs = [];
        if (section === 'personalDetails') {
            inputs = placeholderNames.map((placeholder) => 
                <Input placeholder={placeholder} />
            );
        } else if (section === 'workExperience') {
            let numOfJobs = Object.keys(data['workExperience']).length;
            for (let x = 0; x < numOfJobs; x++) {
                let job = <div>{placeholderNames.map((placeholder) => 
                    <Input placeholder={placeholder} />
                )}</div>;
                inputs.push(job)
            }
        }
        return (inputs)
        
    }
    render() {
        return (
            <form>
                <div>
                    <h2>Pesonal Details</h2>
                    {this.mountInputs('personalDetails', ['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'])}
                    
                </div>
                <div>
                    <h2>Work Experience</h2>
                    {this.mountInputs('workExperience', ['Company', 'Position', 'DateStart', 'DateEnd', 'Description'])}

                </div>
                <div>
                    <h2>Education</h2>
                </div>
            </form>
        )
    }
};

export default Form;