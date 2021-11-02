import React from 'react'
import '../../css/styles.css';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements';

import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
    return (
      <> 
        <img src="https://i.redd.it/zt6mzvpvcvk31.jpg" className="banner"/>
        <Nav>
          <NavLink to='/'>
           (Logo) {/*<img src={require('../../images/icons/Icon.png')} alt='logo' />*/}
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/shopby' activeStyle>
              Shop By
            </NavLink>
            <NavLink to='/art' activeStyle>
              Art
            </NavLink>
            <NavLink to='/clothes' activeStyle>
              Clothes
            </NavLink>
            <NavLink to='/designs' activeStyle>
              3D Designs
            </NavLink>
            <NavLink to='/keychains' activeStyle>
              Keychains
            </NavLink>
            <NavLink to='/comming' activeStyle>
              Comming Soon
            </NavLink>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
          </NavMenu>
          <NavLink to='/login' activeStyle>
              <BsFillPersonFill/>
          </NavLink>
        </Nav>
      </>
    );
  };
  
  export default Navbar;