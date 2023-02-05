import React from 'react';
import data from './sample-data';

class SampleInput extends React.Component {
    constructor() {
        super();
        this.insertTxt = this.insertTxt.bind(this);
    }
    componentDidMount() {
        let placeholder = this.props.placeholder;
        if (Object.keys(data['personalData']).includes(placeholder)) {
            document.getElementById('form-' + this.props.placeholder).value = data['personalData'][this.props.placeholder];
        } else if (placeholder.startsWith('work')) {
            let work = placeholder.slice(0, 5);
            let key = placeholder.slice(5);
            document.getElementById('form-' + this.props.placeholder).value = data['workExperience'][work][key];
        } else if (placeholder.startsWith('edu')) {
            let edu = placeholder.slice(0, 5);
            let key = placeholder.slice(5);
            document.getElementById('form-' + this.props.placeholder).value = data['education'][edu][key];
        }
    }
    insertTxt(el) {
        let id = 'cv-' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    slicePlaceholder(ph) {
        if (ph.startsWith('work') || ph.startsWith('educ')) {
            ph = ph.slice(5)
        } 
        return ph
    }
    render() {
        let placeholder = this.props.placeholder;
        return (
            <input type="text" id={'form-' + placeholder} 
                placeholder={this.slicePlaceholder(placeholder)} onInput={(el) => this.insertTxt(el)}
            />
        )
    }
};

export default SampleInput;