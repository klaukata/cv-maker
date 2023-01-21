import React from 'react';

class Input extends React.Component {
    constructor() {
        super();
        this.insertTxt = this.insertTxt.bind(this)
      }
    insertTxt(el) {
        let text = el.value;
        document.getElementById('ass').textContent = text; 
    }
    render() {
        return (
            <input type="text" id='' placeholder='' onInput={(el) => this.insertTxt(el.target)}/>
        )
    }
};

export default Input;