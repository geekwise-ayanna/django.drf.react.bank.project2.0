import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <div>
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
                <MDBNavLink to="/branch">Branches</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/account">Accounts</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>    
                <MDBNavLink to="/customer">Members</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                        <div className="d-none d-md-inline">Profile</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                        <MDBDropdownItem href="/sign-in">Login</MDBDropdownItem>
                        <MDBDropdownItem href="/sign-up">Sign Up</MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }
}

export default NavbarPage;