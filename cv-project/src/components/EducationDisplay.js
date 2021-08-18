import React, { Component } from 'react';
import '../styles/EducationDisplay.css';

class EducationDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education">
                <div className="year">
                    <span className="content-heading" id="from-education-display">{this.props.educationData.from} - {this.props.educationData.to}</span>
                </div>
                <div className="position">
                    <span className="content-heading" id="university-display">{this.props.educationData.university}, {this.props.educationData.city}</span>
                    <p id="degree-display">Degree: {this.props.educationData.degree}</p>
                    <p id="subject-display">Subject: {this.props.educationData.subject}</p>
                </div>
            </div>
        )
    }
}

export default EducationDisplay;