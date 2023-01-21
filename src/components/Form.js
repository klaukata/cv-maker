import React from 'react';
import Input from './Input'

class Form extends React.Component {
    render() {
        return (
            <form>
                <div>
                    <h2>Pesonal Details</h2>
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                    <Input />
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