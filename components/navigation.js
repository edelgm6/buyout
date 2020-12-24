import { Navbar, Nav, Link } from 'react-bootstrap'

export default function Navigation({}) {

  return <Navbar sticky = "top" bg="light" expand="lg">
      <Navbar.Brand>Buyout</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/#">Definitions</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
}
