import React, { Component } from 'react';
import PersonsDetails from './VaccinatedPatient';
import './App.css'

class Person2 extends Component {
    render() {
      return (
        <div className = "person-container">
          <h1 className='persons-style'>Person2</h1>
          <h3>Name: {this.props.hocName}</h3>
          <h3>Address: {this.props.hocAddress}</h3>
          <h3>Age: {this.props.hocAge}</h3>
          <h3>Vaccine: {this.props.vaccine}</h3>
          <button className='person-btn' onClick={this.props.hocCheckAge}>Check Detail</button>
          <h3>{this.props.hocEligibility}</h3>
        </div>
      );
    }
  }
  
  export default PersonsDetails(Person2);