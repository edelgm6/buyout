import Head from 'next/head'
import Definition from '../components/definition'
import Navigation from '../components/navigation'
import { Container, Row, Card, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Cash Flow</title>
      </Head>

      <Navigation active_link = "cash-flow"/>

      <Container>
        <h2>
          Cash Flow
        </h2>

        <Container>
        </Container>
      </Container>

      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}
