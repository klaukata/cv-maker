import React from 'react';

class DeleteButton extends React.Component {
    eventfunc(e) {
        let el = e.target.parentElement;
        let idName = ('cv-' + el.id)
        let cvEl = document.getElementById(idName);
        el.style.cssText = 'display: none !important';
        cvEl.style.display = 'none';
    }
    render() {
        return (
            <button type='button' onClick={(e) => this.eventfunc(e)}>DELETE</button>
        )
    }
}
export default DeleteButton;