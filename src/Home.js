import React, {useState} from 'react'
import './App.css';
import DataTable from 'react-data-table-component';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addPatient, deletePatient } from './features/Patients';
import { v4 as uuid } from 'uuid';




export default function Home () {

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
      setSearch(event.target.value);
    }

    const dispatch = useDispatch();
    const patientList = useSelector((state) => state.patients.value);
    console.log(patientList)

    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [diagnosis, setDiagnosis] = useState("");

    const columns = [
      {
  
          name: 'Patient Name',
          selector: row => row.name,
          sortable: true,
      },
      {
          name: 'Patient Contact',
          selector: row => row.contact,
          sortable: true,
      },
      {
        name: 'Patient Email',
        selector: row => row.email,
        sortable: true,
      },
      {
        name: 'Patient Diagnosis',
        selector: row => row.diagnosis,
        sortable: true,
      },
      {
        name: 'Action',
        cell: (patient) => <button className = "delete" type = "button" onClick = {() => {
          dispatch(deletePatient({id : patient.id}));
        }}><FontAwesomeIcon icon = {faTrash} className = "trash-icon" /></button>,
        button: true,
      },
  ];

  const unique_id = uuid();
  
  
  const customStyles = {
    rows: {
        style: {
            minHeight: '50px', 
            
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            backgroundColor: '#012d5e',
            color: 'white',
            fontSize: '18px',
            fontFamily: 'Raleway, sans-serif',
            fontWeight: 'bold'
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
  };

  
  
  
    
    return (
      <div>
        
          <Header/>
          <div className = "container">
            <div className = "row">
              <div className = "col-md-6">
                <div className = "dark-blue-box">
                  <p className = "dark-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Vivamus fermentum auctor maximus. Nulla eget tellus et 
                      augue porttitor ornare et nec arcu. Aliquam venenatis 
                      tincidunt est, ac molestie nibh lobortis convallis. 
                      Pellentesque vestibulum risus ut lorem aliquet porta. 
                      In hac habitasse platea dictumst.
                  </p>
                </div>
                <div className = "light-blue-box">
                  <p className = "light-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Vivamus fermentum auctor maximus. Nulla eget tellus et 
                      augue porttitor ornare et nec arcu. Aliquam venenatis 
                      tincidunt est, ac molestie nibh lobortis convallis. 
                      Pellentesque vestibulum risus ut lorem aliquet porta. 
                      In hac habitasse platea dictumst.
                  </p>
                </div>
              </div>
              <div className = "col-md-6">
                <form className = "form-group form mt-5 p-4">
                  <h4 className = "form-title">Add Patient</h4>
                  <div className = "row">
                    <div className = "col-md-6 mt-4">
                      <input className = "form-control search-input" 
                       type = "text" 
                       name = "name" 
                       placeholder = "Please Enter Name"
                       onChange={(event) => {setName(event.target.value)}}
                       required />
                    </div>
                    <div className = "col-md-6 mt-4">
                      <input className = "form-control search-input" 
                       type = "text" 
                       name = "contact" 
                       placeholder = "Please Enter Contact"
                       onChange={(event) => {setContact(event.target.value)}}
                       required />
                    </div>
                    <div className = "col-md-12 mt-4">
                      <input className = "form-control search-input" 
                      type = "email" 
                      name = "email" 
                      placeholder = "Please Enter Email"
                      onChange={(event) => {setEmail(event.target.value)}}
                      required />
                    </div>
                    <div className = "col-md-12 mt-4">
                      <input className = "form-control search-input" 
                       type = "text" 
                       name = "diagnosis" 
                       placeholder = "Please Enter Diagnosis"
                       onChange={(event) => {setDiagnosis(event.target.value)}}
                       required />
                    </div>
                    
                  </div>
                  <div className = "text-center">
                    <button type = "submit" className = "submit" onClick = {() =>  {dispatch(addPatient({
                      id : unique_id, 
                      name : name, 
                      contact : contact, 
                      email : email, 
                      diagnosis : diagnosis}));
                    }}>Submit</button>  
                  </div>
                  
                </form>
              </div>
            </div>
            <div className = "row mt-5">
              <div className = "col-md-4">
                <input type="text" className="form-control search-input" placeholder="Search By Name" onChange={handleSearch} />
              </div>
              
              
              <div className = "col-md-12">
              
                <DataTable
                    columns={columns}
                    data={patientList.filter((item) => 
                    item.name.toLowerCase().includes(search.toLowerCase()))}
                    customStyles = {customStyles}
                    pagination
                />
              </div>
            </div>
          </div>
        </div>
      
    )
 
}

