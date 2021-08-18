import '../styles/InputComponent.css'
import React, { Component } from 'react'
import ExperienceInput from './ExperienceInput';
import EducationInput from './EducationInput';

class InputComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div id="input-container">
                <div id="personal-input">
                    <p className="input-heading">Personal Information</p>
                    <input className="input" name="firstName" value={this.props.stateData.firstName} onChange={this.props.onInput} id="first-name-input" placeholder="First name"/>
                    <input className="input" name="lastName" value={this.props.stateData.lastName} onChange={this.props.onInput} id="last-name-input" placeholder="Last name"/>
                    <input className="input" name="title" value={this.props.stateData.title} onChange={this.props.onInput} id="title-input" placeholder="Title"/>
                    <input className="input" name="address" value={this.props.stateData.address} onChange={this.props.onInput} id="address-input" placeholder="Address"/>
                    <input className="input" name="phoneNumber" value={this.props.stateData.phoneNumber} onChange={this.props.onInput} id="phone-input" placeholder="Phone number"/>
                    <input className="input" name="email" value={this.props.stateData.email} onChange={this.props.onInput} id="email-input" placeholder="Email"/>
                    <input className="input" name="description" value={this.props.stateData.description} onChange={this.props.onInput} id="description-input" placeholder="Description"/>
                </div>
                <p className="input-heading">Experience</p>
                {this.props.stateData.experience.map((elem, index) => <ExperienceInput onDelete={this.props.onDelete} onExperience={this.props.onExperience} key={index} index={index} experienceData={elem}/>)}
                <button className="add" data="experience" onClick={this.props.onAdd}>Add</button>
                <p className="input-heading">Education</p>
                {this.props.stateData.education.map((elem, index) => <EducationInput onDelete={this.props.onDelete} onEducation={this.props.onEducation} key={index} index={index} educationData={elem}/>)}
                <button className="add" data="education" onClick={this.props.onAdd}>Add</button>
                <div id="end-buttons">
                    <button id="reset" onClick={this.props.onReset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default InputComponent;