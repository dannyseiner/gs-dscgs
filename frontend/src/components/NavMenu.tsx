import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

function NavMenu() {
  const [modalController, setModalController] = useState(false);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [searchInput, setSearchInput] = useState<String>("");
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <span className="text-warning">Vinyl </span> STOCK
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Search
              size={25}
              color={"white"}
              style={{ cursor: "pointer" }}
              onClick={() => setModalController(true)}
            />
            <Modal
              show={modalController}
              size="lg"
              centered={true}
              fullscreen={"true"}
              style={{ backgroundColor: "rgba(0,0,0,0.8" }}
              onHide={() => setModalController(false)}
            >
              <Modal.Header closeButton>
                <p></p>
              </Modal.Header>
              <Modal.Body className="p-0">
                <input
                  placeholder="Search vinyl..."
                  type="text"
                  className="search-input"
                  onKeyDown={(e: any) => setSearchInput(e.target.value)}
                />
              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
