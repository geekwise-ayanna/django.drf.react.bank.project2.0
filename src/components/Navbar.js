import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-color" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Geekwise Bank</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            
          <MDBNavbarNav right>
            <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Branches</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Accounts</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="#!">Members</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                        <div className="d-none d-md-inline">Profile</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="#!">Login</MDBDropdownItem>
                        <MDBDropdownItem href="#!">Register</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;