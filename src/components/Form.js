import React from 'react';
import Input from './Input';

class Form extends React.Component {
    mountInputs(placeholderNames) {
        let inputs = placeholderNames.map((placeholder) => 
            <Input placeholder={placeholder} />
        );
        return (inputs)

    }
    render() {
        return (
            <form>
                <div>
                    <h2>Pesonal Details</h2>
                    {this.mountInputs(['Name', 'Position', 'Phone', 'Mail', 'Location', 'Description'])}
                    
                </div>
                <div>
                    <h2>Work Experience</h2>

                </div>
                <div>
                    <h2>Education</h2>
                </div>
            </form>
        )
    }
};

export default Form;