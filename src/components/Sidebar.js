import React, { Fragment } from 'react'
import { VscHome } from 'react-icons/vsc'
//import { Fiuser} from 'react-icons/fi'
//import { Bscode } from 'react-icons/bs'
//import {MdOutlineDashboard, MdOutlineContactPage, MdEmail} from 'react-icons/md'
//import {AiFillLinkedin, AiFillSkype, AiFillGithub, AiOutlineUnorderedList} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'
import {Link, NavLink} from "react-router-dom"; 

function Siderbar() {
  return(
    <Fragment>
    <div className = "col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark slide-in-left">
      <div className = "d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <Link to="/" className = "d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className = "fs-5 d-none d-sim-inline ff-jost fw-600">YoYo</span>
        </Link>
        <ul className = "nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id = "menu">
          <li className = "nav-item">
            <NavLink to="/" className ="nav-link align-middle px-0 text-white">
              <VscHome className = "fs-5"/><span className = "ms-1 d-none d-sim-inline">Home</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    </Fragment>
  ); 
}
export default Siderbar
