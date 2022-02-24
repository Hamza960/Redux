import React from 'react'
import Header from './Header'
import './App.css';

export default function Contact() {
  return (
    <div>
        <Header/>
        <div className = "contactus">
            
            <div className = "container p-5">
            <h3 className = "nopage">Get In Touch</h3>
                <div className = "col-md-6">
                    <form className = "text-center">
                        <div className = "row mt-5">
                            <div className = "col-md-6">
                                <div className = "form-group">
                                    <input className = "form-control input"
                                     type = "text"
                                     placeholder = "Enter Name"
                                    />
                                </div>
                            </div>
                            <div className = "col-md-6">
                                <div className = "form-group">
                                    <input className = "form-control input"
                                     type = "text"
                                     placeholder = "Enter Contact"
                                    />
                                </div>
                            </div>
                            <div className = "col-md-12">
                                <div className = "form-group">
                                    <input className = "form-control input"
                                     type = "email"
                                     placeholder = "Enter Email"
                                    />
                                </div>
                            </div>
                            <div className = "col-md-12">
                                <div className = "form-group">
                                    <input className = "form-control input"
                                     type = "text"
                                     placeholder = "Enter Address"
                                    />
                                </div>
                            </div>
                            <div className = "col-md-12">
                                <div className = "form-group">
                                    <input className = "form-control input"
                                     type = "text"
                                     placeholder = "Enter Query"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <button className = "submit" type = "submit">Submit</button>
                    </form>
                </div>
                <p className = "footer-note text-center">All Rights Reserved. Designed and developed by Hamza Shaikh</p>
            </div>
        </div>
    </div>
  )
}
