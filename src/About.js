import React from 'react'
import Header from './Header'
import './App.css';

export default function About() {
  return (
    <div>
        <Header/>
        <img src = "./about-us.jpg" alt = "" className = "about img-fluid"/>
        <div className = "container">
            <div className = "row">
                <div className = "col-md-6">
                    <div className = "dark-blue-box">
                        <p className = "light-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus fermentum auctor maximus. Nulla eget tellus et 
                        augue porttitor ornare et nec arcu. Aliquam venenatis 
                        tincidunt est, ac molestie nibh lobortis convallis. 
                        Pellentesque vestibulum risus ut lorem aliquet porta. 
                        In hac habitasse platea dictumst.
                        </p>
                    </div>
                    <div className = "light-blue-box mt-5">
                        <p className = "dark-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus fermentum auctor maximus. Nulla eget tellus et 
                        augue porttitor ornare et nec arcu. Aliquam venenatis 
                        tincidunt est, ac molestie nibh lobortis convallis. 
                        Pellentesque vestibulum risus ut lorem aliquet porta. 
                        In hac habitasse platea dictumst.
                        </p>
                    </div>
                    <div className = "dark-blue-box mt-5">
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
                <div className = "col-md-6 mt-5">
                    <div className = "row">
                        <div className = "col-md-6">
                            <div className = "img-box">
                                <img src = "./doctor1.png" alt = "" className = "img-fluid" height = "200px" />
                            </div>
                            
                        </div>
                        <div className = "col-md-6">
                            <div className = "img-box" id = "box-2">
                                <img src = "./doctor2.png" alt = "" className = "img-fluid"  height = "200px"/>
                            </div>
                            
                        </div>
                        <div className = "col-md-6 mt-3">
                            <div className = "img-box">
                                <img src = "./doctor3.png" alt = "" className = "img-fluid" height = "200px" />
                            </div>
                            
                        </div>
                        <div className = "col-md-6 mt-3">
                            <div className = "img-box">
                                <img src = "./doctor4.png" alt = "" className = "img-fluid" height = "200px" />
                            </div>
                            
                        </div>
                    </div>
    
                </div>
                
            </div>

        </div>
    </div>
  )
}
