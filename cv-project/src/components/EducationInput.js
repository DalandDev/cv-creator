import React, { Component } from 'react';
import '../styles/EducationInput.css';

class EducationInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="education-input" index={this.props.index}>
                <input name="university" value={this.props.educationData.university} onChange={this.props.onEducation} className="input" id="university-input" placeholder="University" />
                <input name="city" value={this.props.educationData.city} onChange={this.props.onEducation} className="input" id="university-city-input" placeholder="City" />
                <input name="degree" value={this.props.educationData.degree} onChange={this.props.onEducation} className="input" id="degree-input" placeholder="Degree" />
                <input name="subject" value={this.props.educationData.subject} onChange={this.props.onEducation} className="input" id="subject-input" placeholder="Subject" />
                <input name="from" value={this.props.educationData.from} onChange={this.props.onEducation} className="input" id="from-education-input" placeholder="From" />
                <input name="to" value={this.props.educationData.to} onChange={this.props.onEducation} className="input" id="to-education-input" placeholder="To" />
                <button name="delete" onClick={this.props.onDelete} className="delete">Delete</button>
            </div>
        )
    }
}

export default EducationInput;