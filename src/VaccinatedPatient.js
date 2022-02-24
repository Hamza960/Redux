import React from "react";

const PersonsDetails = (Person) => {
    class NewPerson extends React.Component {
      constructor(props) {
        super(props);
  
        this.state = {
          name: this.props.name,
          vaccine: this.props.vaccine,
          address: this.props.address,
          age: this.props.age,
          eligibility: "",
        };
      }
      CheckAge = () => {
        let Age = this.state.age;
        if (Age >= 18) {
          alert("Get Vaccinated soon!");
        } else {
            alert("Sorry! You Are Not Eligible For Vaccination");
        }
      };
      render() {
        return (
          <div>
              
                <Person
                    hocGrade="Vaccine"
                    hocName={this.state.name}
                    hocAddress={this.state.address}
                    //   hocVaccineType={this.state.vaccine}
                    hocAge={this.state.age}
                    hocEligibility={this.state.eligibility}
                    hocCheckAge={this.CheckAge}
                    {...this.props}
                    />
              
          </div>
        );
      }
    }
    return NewPerson;
  };
  
  export default PersonsDetails;