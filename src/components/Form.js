import React from 'react';
import Input from './Input';
import DeleteButton from './DeleteButton'
import data from './sample-data';

class Form extends React.Component {
    mountInputs(section, placeholderNames) {
        let inputs = [];
        if (section === 'personalDetails') {
            inputs = placeholderNames.map((placeholder) => 
                <Input placeholder={placeholder} />
            );
        } else if (section === 'workExperience' || section === 'education') {
            let sectionArr = Object.keys(data[section]);
            for (let section of sectionArr) {
                let x = <div>
                    {placeholderNames.map((placeholder) => 
                        <Input placeholder={section+placeholder} />
                    )}
                    <DeleteButton />
                </div>;
                inputs.push(x)
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
                    {this.mountInputs('workExperience', ['Company', 'Position', 'Start', 'End', 'Description'])}

                </div>
                <div>
                    <h2>Education</h2>
                    {this.mountInputs('education', ['Course', 'University', 'Start', 'End', 'Description'])}
                </div>
            </form>
        )
    }
};

export default Form;