import React from 'react'
import logo from '../assets/plannepal.gif'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
        <div className="top-header py-2">
          <div className="container">
            <div className="row text-light">
              <div className="col-xl-3 offset-xl-2 offset-lg-3 d-none d-lg-block">
                <marquee>Agency for Tour &amp; Trekking in Nepal</marquee>
              </div>
              <div className="col-xl-3 text-center">
                <a href><i className="bi pe-3 bi-facebook" /></a>
                <a href><i className="bi pe-3 bi-facebook" /></a>
                <a href><i className="bi pe-3 bi-facebook" /></a>
                <a href><i className="bi pe-3 bi-facebook" /></a>
                <a href><i className="bi pe-3 bi-facebook" /></a>
                <a href><i className="bi bi-facebook" /></a>
              </div>
              <div className="col-xl-4 text-end d-none d-lg-block">
                <a className="pe-3" href="tel:9924927543">
                  <i className="bi pe-2 bi-telephone-fill" /> 9924927543</a>
                <a href="tel:9924927543">
                  <i className="bi pe-2 bi-envelope-fill" /> info@plannepal.com</a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
              <ul className="navbar-nav  mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"> About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nepal"> Nepal</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Tibet</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Bhutan</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Multi Country</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"> Heli Tour</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Day Tours</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header
