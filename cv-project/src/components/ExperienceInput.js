import React, { Component } from 'react';
import '../styles/ExperienceInput.css';

class ExperienceInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="experience-input" index={this.props.index}>
                <input name="position" value={this.props.experienceData.position} onChange={this.props.onExperience} className="input" id="position-input" placeholder="Position" />
                <input name="company" value={this.props.experienceData.company} onChange={this.props.onExperience} className="input" id="company-input" placeholder="Company" />
                <input name="city" value={this.props.experienceData.city} onChange={this.props.onExperience} className="input" id="company-city-input" placeholder="City" />
                <input name="from" value={this.props.experienceData.from} onChange={this.props.onExperience} className="input" id="from-experience-input" placeholder="From" />
                <input name="to" value={this.props.experienceData.to} onChange={this.props.onExperience} className="input" id="to-experience-input" placeholder="To" />
                <button name="delete" onClick={this.props.onDelete} className="delete">Delete</button>
            </div>
        )
    }
}

export default ExperienceInput;