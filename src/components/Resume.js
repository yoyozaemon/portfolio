import React, { Fragment } from 'react'
import { SiCodechef, SiHackerrank } from 'react-icons/si';

function Resume() {
  return (
    <Fragment>
        <div className="col p-4"> 
            <div className="p-4 bg-dark slide-in-top">
                
                <div className="row">
                    <div className="col-6">
                        <h2 className="ff-jose fw-bold ls-2"> VIJAY J</h2>
                    </div>
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">EXPERIENCE</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Position</h4>
                                <h6 className="blue-label px-2 py-1">Duration</h6>
                                <p className="m-0"> "Company-Name" · "Full-time/Part-time"</p>
                                <p>Location</p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Position</h4>
                                <h6 className="blue-label px-2 py-1">Duration</h6>
                                <p className="m-0"> "Company-Name" · "Full-time/Part-time"</p>
                                <p>Location</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        
                        <h4 className="ff-jose ls-2">EDUCATION</h4>
                        <ul>
                            <li>
                                <h4 className="ff-jose my-1 text-red">BTech - Computer Science Engineering</h4>
                                <h6 className="blue-label px-2 py-1">2020 - 2024</h6>
                                <p className="m-0">PES University</p>
                                <p>CGPA: </p>
                            </li>
                            <li>
                                <h4 className="ff-jose my-1 text-red">Higher Secondary School</h4>
                                <h6 className="blue-label px-2 py-1">2017</h6>
                                <p className="m-0">School</p>
                                <p>Grade: %</p>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-md-6">
                        <h4 className="ff-jose ls-2">PROFILE</h4>
                        <h1>
                            <a href="https://www.codechef.com/users/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiCodechef className="zoom-on-hover"/>
                            </a> 
                            <a href="https://www.hackerrank.com/" target="/blank" className="text-white text-decoration-none mx-2">
                                <SiHackerrank className="zoom-on-hover"/>
                            </a> 
                        </h1>
                    </div>
                </div>
                
            </div>
        </div>
    </Fragment>
  )
}

export default Resume
