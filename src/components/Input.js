import React from 'react';

class Input extends React.Component {
    insertTxt(el) {
        let id = 'cv-' + el.target.getAttribute('id').slice(5);
        let text = el.target.value;
        document.getElementById(id).textContent = text;
    }
    render() {
        let classNameToLowerCase = this.props.className.toLowerCase()
        return (
            <input type="text" placeholder={this.props.placeholder}  className={classNameToLowerCase} id={this.props.id} onInput={(el) => this.insertTxt(el)}/>
        )
    }
}

export default Input