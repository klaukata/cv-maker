import React from 'react';

class CVSection extends React.Component {
    render() {
        let idName = (this.props.isExp) ? 'cv-addedSection-workExperience' : 'cv-addedSection-education';
        return (
            <div id={idName + this.props.num}>
                <p>hello</p>  
            </div>
        )
    }
}

export default CVSection