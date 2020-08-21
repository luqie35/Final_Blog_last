import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav
        className='navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar '
        id='navTop'
      >
        <div className='container'>
          <a className='navbar-brand' href='/'>
            <strong>StreetwearKnowledge</strong>
          </a>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home
                  <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/products'>
                  Blog items
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/form'>
                  Contact
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
