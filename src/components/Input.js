import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.insertTxt = this.insertTxt.bind(this)
      }
    insertTxt(el) {
        let id = 'cv-' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    render() {
        return (
            <input type="text" id={'form-' + this.props.placeholder.toLowerCase()} placeholder={this.props.placeholder} onInput={(el) => this.insertTxt(el)}/>
        )
    }
};

export default Input;