import React from 'react';

class DeleteButton extends React.Component {
    eventfunc(e) {
        let el = e.target.parentElement;
        let className = el.classList[0];
        let idName = 'cv-' + className;
        let cvEl = document.getElementById(idName)
        // console.log(cvEl);
        el.remove();
        cvEl.remove()
    }
    render() {
        return (
            <button type='button' onClick={(e) => this.eventfunc(e)}>DELETE</button>
        )
    }
}
export default DeleteButton;