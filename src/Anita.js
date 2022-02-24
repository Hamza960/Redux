import React from 'react'
import VaccinatedPatient from './VaccinatedPatient'

class Anita extends React.Component {
  render() {
    return (
        <div>
            <h3>Anita's Details</h3>
            <h3>{this.state.pname}</h3>
            <h3>{this.state.page}</h3>
        </div>
      

    )
  }
}

export default VaccinatedPatient(Anita);

