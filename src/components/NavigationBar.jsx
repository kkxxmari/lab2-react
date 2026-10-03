import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" collapseOnSelect>
      <Container>
        <Navbar.Brand as={NavLink} to="/">React Lab</Navbar.Brand>
        <Navbar.Toggle aria-controls="page-menu" />
        <Navbar.Collapse id="page-menu">
          <Nav className="ms-auto">
            {/* 'end' keeps Home from being selected on /read or /create. */}
            <Nav.Link as={NavLink} to="/" end eventKey="1">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/read" eventKey="2">Read</Nav.Link>
            <Nav.Link as={NavLink} to="/create" eventKey="3">Create</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
