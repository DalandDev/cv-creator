import React, { Component } from 'react';
import './App.css';
import CvComponent from './components/CvComponent';
import InputComponent from './components/InputComponent';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: '',
            education: [
                {
                    university: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                },
            ],
            experience: [
                {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: '',
                },
            ],
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEducation = this.handleEducation.bind(this);
        this.handleExperience = this.handleExperience.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onReset = this.onReset.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.storeData = this.storeData.bind(this);

        if (localStorage.getItem("stateData")) {
            let stateData = JSON.parse(localStorage.getItem("stateData"));
            this.state = stateData;
        }
    }

    storeData() {
        localStorage.setItem("stateData", JSON.stringify(this.state));
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        }, this.storeData);
    }

    handleEducation(e) {
        let arr = [...this.state.education];
        let index = e.target.parentNode.getAttribute("index");
        arr[index][e.target.name] = e.target.value;
        this.setState({
            education: arr,
        }, this.storeData)
    }

    handleExperience(e) {
        let arr = [...this.state.experience];
        let index = e.target.parentNode.getAttribute("index");
        arr[index][e.target.name] = e.target.value;
        this.setState({
            experience: arr,
        }, this.storeData)
    }

    onAdd(e) {
        if (e.target.getAttribute("data") === "education") {
            this.setState({
                education: this.state.education.concat({
                    university: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                })
            }, this.storeData)
        }

        else if (e.target.getAttribute("data") === "experience") {
            this.setState({
                experience: this.state.experience.concat({
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: '',
                })
            }, this.storeData)
        }
    }

    onDelete(e) {
        if (e.target.parentNode.getAttribute("id") === "experience-input") {
            let arr = this.state.experience.slice(0, this.state.experience.length - 1)
            this.setState({
                experience: arr,
            }, this.storeData)
        }

        else if (e.target.parentNode.getAttribute("id") === "education-input") {
            let arr = this.state.education.slice(0, this.state.education.length - 1)
            this.setState({
                education: arr,
            }, this.storeData)
        }
        
    }

    onReset(e) {
        this.setState({
            firstName: '',
            lastName: '',
            title: '',
            address: '',
            phoneNumber: '',
            email: '',
            description: '',
            education: [
                {
                    university: '',
                    city: '',
                    degree: '',
                    subject: '',
                    from: '',
                    to: '',
                },
            ],
            experience: [
                {
                    position: '',
                    company: '',
                    city: '',
                    from: '',
                    to: '',
                },
            ],
        }, this.storeData)
    }

    render() {
        return (
            <main>
                <div id="header">
                    <i className="fas fa-edit"></i>
                    <h1>CV Writer</h1>
                </div>
                <div id="content">
                    <InputComponent onAdd={this.onAdd} onDelete={this.onDelete} onReset={this.onReset} onInput={this.handleInputChange} onExperience={this.handleExperience} onEducation={this.handleEducation} stateData={this.state}/>
                    <CvComponent stateData={this.state}/>
                </div>
            </main>
        )
    }
}

export default App;
