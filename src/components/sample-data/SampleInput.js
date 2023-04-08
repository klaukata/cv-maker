import React from 'react';
import data from './sample-data';

class SampleInput extends React.Component {
    constructor() {
        super();
        this.insertTxt = this.insertTxt.bind(this);
    }
    componentDidMount() {
        let placeholder = this.props.placeholder;
        if (placeholder.startsWith('personal')) {
            document.getElementById('form-' + this.props.placeholder).value = data['personalData'][this.props.placeholder.substring(12)];
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
    slicePlaceholder(ph) {
        if (ph.startsWith('work') || ph.startsWith('educ')) {
            ph = ph.slice(5)
        } else {
            ph = ph.slice(12)
        }
        return ph
    }
    insertTxt(el) {
        let id = 'cv-' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    render() {
        let placeholder = this.props.placeholder;
        console.log(placeholder);
        let classNameToLowerCase = this.props.className.toLowerCase()
        let returnStatement;
        if (placeholder==='personalDataDescription') {
            returnStatement = <textarea id={'form-' + placeholder} className={classNameToLowerCase} rows="4" onInput={(el) => this.insertTxt(el)}></textarea>
        } else {
            returnStatement = <input type="text" id={'form-' + placeholder} className={classNameToLowerCase}
                placeholder={this.slicePlaceholder(placeholder)} onInput={(el) => this.insertTxt(el)}
            />
        }
        return returnStatement
    }
};

export default SampleInput;