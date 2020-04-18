import React, { Component } from "react";
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import { StarFill } from 'react-bootstrap-icons';
import { HouseFill } from "react-bootstrap-icons";
import { Chat } from "react-bootstrap-icons";
import { Gear } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";
import { PeopleCircle } from 'react-bootstrap-icons';
import { Power } from 'react-bootstrap-icons';
import { Search } from 'react-bootstrap-icons';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Form, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

class Header extends Component {
  state = {
    title: "Header Hello this is a text from STATE",
  };
  render() {
    return (
      // JSX expression will get compiled to React.createElement()
      <React.Fragment>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home"><StarFill color="royalblue" size={30} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home"><HouseFill size={30} /></Nav.Link>
              <Nav.Link href="#link"><Chat size={30} /></Nav.Link>
              <NavDropdown title={<List size={30} />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"><PeopleCircle size={30} /></NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3"><Gear size={30} /></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4"><Power size={30} /></NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success"><Search size={20} /></Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>


        {/* <a className="navbar-brand" href="#"><StarFill color="royalblue" size={20} /></a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#"><HouseFill color="royalblue" size={20} /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Chat color="royalblue" size={20} /></a>
            </li>

            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
        </nav> */}
      </React.Fragment >
    );
  }

  title() {
    const { title } = this.state;
    return title;
  }
}

export default Header;
