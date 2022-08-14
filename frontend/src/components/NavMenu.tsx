import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Button, Modal } from "react-bootstrap";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { Search, Moon, Sun } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import axios from "axios";
import config from "../config.json";
import IReleaseHomeTable from "../interfaces/IReleaseHomeTable";
import { useNavigate } from "react-router-dom";
function NavMenu() {
  const [modalController, setModalController] = useState(false);
  const [searchData, setSearchData] = useState<IReleaseHomeTable[]>([]);
  const [searchInput, setSearchInput] = useState<String>("");
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();

  const setDarkModeStyle = (status: boolean) => {
    setDarkMode(status);
    localStorage.setItem("darkModeStyle", `'${status}'`);
  };

  const searchByTitle = () => {
    axios
      .get(`${config.server_url}/release/t/${searchInput}`)
      .then((response) => setSearchData(response.data));
  };

  const redirectToRelease = (id: number) => {
    setModalController(false);
    navigate(`/release/${id}`);
  };

  useEffect(() => {
    if (searchInput.length > 4) searchByTitle();
    else setSearchData([]);
  }, [searchInput]);

  const renderSearchResults = searchData.map(
    (result: IReleaseHomeTable, index: number) => (
      <div
        className="search-result"
        key={index}
        onClick={() => redirectToRelease(result.release_id)}
      >
        <div className="p-3">
          <p className="search-result-title">{result.title}</p>
        </div>
      </div>
    )
  );

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      fixed="top"
      variant="dark"
      style={{ boxShadow: "rgba(149, 157, 165, 0.8) 0px 8px 24px" }}
    >
      <Container>
        <Navbar.Brand>
          <span className="text-warning fw-bold">Vinyl </span> STOCK
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
              style={{ cursor: "pointer", marginRight: 30 }}
              onClick={() => setModalController(true)}
            />
            {!darkMode ? (
              <Sun
                size={25}
                color={"white"}
                style={{ cursor: "pointer" }}
                onClick={() => setDarkModeStyle(true)}
              />
            ) : (
              <Moon
                size={25}
                color={"white"}
                style={{ cursor: "pointer" }}
                onClick={() => setDarkModeStyle(false)}
              />
            )}
            <Modal
              show={modalController}
              size="lg"
              centered={true}
              fullscreen={"true"}
              style={{ backgroundColor: "rgba(0,0,0,0.8" }}
              onHide={() => setModalController(false)}
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body className="p-0">
                <input
                  placeholder="Search vinyl..."
                  type="text"
                  className="search-input"
                  onKeyUp={(e: any) => setSearchInput(e.target.value)}
                />
                {renderSearchResults}
              </Modal.Body>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
