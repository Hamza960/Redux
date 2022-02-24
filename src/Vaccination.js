import Header from './Header';
import Person1 from './Person1';
import Person2 from './Person2';
import Person3 from './Person3';

function Vaccination() {
  return (
    <>
      <Header/>
      <h1 className = "vaccine-title">Vaccination Details</h1>
    <div className="container text-center">
      
      
      <div className="row mt-5">
        <div className = "col-md-4">
          <Person1 name="Raghunath Rajan" address="Pune" age="17" vaccine="Covaxin" />
        </div>
        <div className = "col-md-4">
          <Person2 name="Anita Shinde" address="Mumbai" age="45" vaccine="Covaxin" />
        </div>
        <div className = "col-md-4">
          <Person3 name="Rizwan Khan" address="Pune" age="23" vaccine="Covishield" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Vaccination;