import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation({ active_link }) {

  var active_links = {
    'definitions': '',
    'valuation': ''
  }

  for (var key in active_links) {
    if (key == active_link) {
        active_links[key] = "active";
    }
  }

  return <div><Navbar sticky = "top" bg="light" expand="lg">
      <Navbar.Brand>Buyout</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as="span"><Link href="/"><a>Intro</a></Link></Nav.Link>
          <Nav.Link as="span"><Link href="/capital-structure"><a>Capital Structure</a></Link></Nav.Link>
          <Nav.Link as="span"><Link href="/cash-flow"><a>Cash Flow</a></Link></Nav.Link>
          <Nav.Link as="span"><Link href="/valuation"><a>Valuation</a></Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <br></br>
    </div>

}
