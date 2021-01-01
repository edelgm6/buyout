import Head from 'next/head'
import Definition from '../components/definition'
import Navigation from '../components/navigation'
import BarChart from '../components/bar-chart'
import { Container, Row, Card, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Buyout</title>
      </Head>

      <Navigation active_link = "definitions"/>

      <Container>
        <h2>Let's do a leveraged buyout!</h2>
        <br></br>
        <h3>Introduction</h3>
        <p>
          I see a lot of common misunderstandings out there about the nature of buying a business. For example, I'm hoping this tutorial can answer the following questions —
          <ul>
            <li>if a private equity firm buys a SaaS company for $2.0B and sells it for $2.2B five years later, was that necessarily a bad investment?</li>
            <li>if valuations go up (i.e., firms trade at a higher EBITDA multiple), why does that make buying businesses less attractive?</li>
            <li>is it possible to buy a small business in my town and make a decent return?</li>
          </ul>
        </p>

        <h3>Our two examples</h3>
        <p>
          Throughout the tutorial I'll commonly refer to two examples to illustrate my points.
        </p>

        <h4>Buying a house: 1356 Jefferson Street</h4>
        <p>
          Many of the principles we'll consider for buying a business also apply to a more familiar transaction: buying a home.
        </p>


        <p>
          For the purposes of this tutorial, we'll consider <strong>1356 Jefferson Street</strong> which has the following characteristics —
          <ul>
            <li>Market value: $500,000</li>
            <li>Outstanding mortgage: $200,000</li>
            <li>Interest rate: 4.0%</li>
            <li>Yearly mortgage payment: $22,900</li>
          </ul>
        </p>

        <h4>Buying a business: Parrish Shoe Company</h4>
        <p>
          The <strong>Parrish Shoe Company</strong> is a family-owned business making shoes —
          <ul>
            <li>Market value: We'll figure it out!</li>
            <li>Yearly revenue: $1,000,000</li>
            <li>Yearly net income: $200,000</li>
            <li>Outstanding debt: $300,000</li>
          </ul>
        </p>
        <Container>
        </Container>
      </Container>

      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}
