import React from 'react';

class DeleteButton extends React.Component {
    eventfunc() {
        console.log('hi');
    }
    render() {
        return (
            <button type='button' onClick={this.eventfunc}>DELETE</button>
        )
    }
}
export default DeleteButton;