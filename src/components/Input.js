import React from 'react';

class Input extends React.Component {
    insertTxt(el) {
        let id = 'cv-' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    render() {
        let placeholder = this.props.placeholder;
        let classNameToLowerCase = this.props.className.toLowerCase()
        let returnStatement;
        if (placeholder.includes('Description')) {
            returnStatement = <textarea id={this.props.id} className={classNameToLowerCase} 
            placeholder={this.props.placeholder} rows={2} onInput={(el) => this.insertTxt(el)}></textarea>
        } else {
            returnStatement = <input type="text" placeholder={this.props.placeholder} 
                className={classNameToLowerCase} id={this.props.id} onInput={(el) => this.insertTxt(el)}
            />
        }
        return returnStatement
    }
}

export default Input