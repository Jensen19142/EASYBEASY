import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "./EASYBEASYLogo.png";

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: "#001f3f" }} variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" > 
                    <img 
                        src={logo}
                        alt="EASYBEASY Logo"
                        style={{height:"40px"}}
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/about" > 
                About Us
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Bioinformatics Tools" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/proteinstructurevisualization"> Protein Structure Visualization </NavDropdown.Item>
                            <NavDropdown.Item href="/phylogenetics"> Phylodynamics </NavDropdown.Item>
                            <NavDropdown.Item href="/surveillance"> Infectious Disease Surveillance</NavDropdown.Item>
                            <NavDropdown.Item href="/dnasequenceanalysis"> DNA Sequence Analysis </NavDropdown.Item>
                            <NavDropdown.Item href="/cellularimageanalysis"> Bioimage Informatics </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;