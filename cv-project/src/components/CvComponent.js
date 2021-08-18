import '../styles/CvComponent.css';
import React, { Component } from 'react';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';

class CvComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id = "cv-container">
                <div id="cv-header">
                    <h1 id="name-display">{this.props.stateData.firstName} {this.props.stateData.lastName}</h1>
                    <p id="title-display">{this.props.stateData.title}</p>
                </div>
                <div id="cv-content">
                <div id="primary-content">
                    <div id="cv-description">
                        <p className="display-heading">Description</p>
                        <hr/>
                        <p id="description-display">{this.props.stateData.description}</p>
                    </div>
                    <div id="experience-div">
                        <p className="display-heading">Experience</p>
                        <hr/>
                        {this.props.stateData.experience.map((elem, index) => <ExperienceDisplay key={index} experienceData={elem}/>)}
                    </div>
                    <div id="education-div">
                        <p className="display-heading">Education</p>
                        <hr/>
                        {this.props.stateData.education.map((elem, index) => <EducationDisplay key={index} educationData={elem}/>)}
                    </div>
                </div>
                <div id="sidebar-content">
                    <div id="personal-div">
                        <p className="display-heading">Personal Details</p>
                        <hr/>
                        <p className="content-heading">Address</p>
                        <p id="address-display">{this.props.stateData.address}</p>
                        <p className="content-heading">Phone Number</p>
                        <p id="phone-display">{this.props.stateData.phoneNumber}</p>
                        <p className="content-heading">Email</p>
                        <p id="email-display">{this.props.stateData.email}</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default CvComponent;