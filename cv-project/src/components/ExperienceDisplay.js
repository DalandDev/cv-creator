import React, { Component } from 'react';
import '../styles/ExperienceDisplay.css';

class ExperienceDisplay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience">
                <div className="year">
                    <span className="content-heading" id="from-experience-display">{this.props.experienceData.from} - {this.props.experienceData.to}</span>
                </div>
                <div className="position">
                    <p className="content-heading" id="position-display">{this.props.experienceData.position}</p>
                    <span id="company-display">{this.props.experienceData.company}, {this.props.experienceData.city}</span>
                </div>
            </div>
        )
    }
}

export default ExperienceDisplay;