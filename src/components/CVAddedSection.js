import React from 'react';

class CVSection extends React.Component {
    render() {
        let idName = (this.props.isExp) ? 'cv-addedSection-workExperience' : 'cv-addedSection-education';
        let section;
        let sectionNum = this.props.num;
        idName = idName + sectionNum;
        if (this.props.isExp) {
            section = <div id={idName}>
                <p id={idName + "Position"}>Position</p>
                <p id={idName + "Company"}>Company</p>
                <p>|</p>
                <p id={idName + "Start"}>Start</p>
                <p>-</p>
                <p id={idName + "End"}>End</p>
                <p id={idName + "Description"}>Description</p>
            </div>
        } else {
            section = <div id={idName}>
                <p id={idName + "Course"}>Course</p>
                <p id={idName + "University"}>University</p>
                <p>|</p>
                <p id={idName + "Start"}>Start</p>
                <p>-</p>
                <p id={idName + "End"}>End</p>
                <p id={idName + "Description"}>Description</p>
            </div>

        }
        return section
    }
}

export default CVSection