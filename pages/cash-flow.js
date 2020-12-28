import Head from 'next/head'
import Definition from '../components/definition'
import Navigation from '../components/navigation'
import { Container, Row, Card, Button, Navbar, Nav, NavDropdown, Form, FormControl, Table } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Cash Flow</title>
      </Head>

      <Navigation active_link = "cash-flow"/>

      <Container>
        <h2>Cash Flow</h2>

        <p>To decide how much to pay for the business, we first need to understand its cash flow. At the end of the day, that's all that really matters.</p>

        <p>There are two measures of cash flow that we care about:
          <ul>
            <li><strong>EBITDA:</strong> Earnings Before Interest, Taxes, Depreciation, and Amortization. Investors like to think about EBITDA because it is <i>independent of financing decisions</i>. We'll see the importance of that soon</li>
            <li><strong>Free cash flow:</strong> the dollars available to the shareholders of the business (we'll see later that this is calculated by taking EBITDA and making some adjustments)</li>
          </ul>
        </p>

        <h3>EBITDA</h3>

        <p>Let's start with a simple income statement, below.</p>

        <Table hover size="sm">
          <thead>
            <tr>
              <th>Account</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              <td> $100,000</td>
            </tr>
            <tr>
              <td>Cost of Goods Sold (COGS)</td>
              <td>-$50,000</td>
            </tr>
            <tr>
              <td><strong>Gross Margin</strong></td>
              <td><strong>$50,000</strong></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>Sales, General, and Administrative Expenses (SG&A)</td>
              <td>-$10,000</td>
            </tr>
            <tr>
              <td>Depreciation</td>
              <td>-$1,000</td>
            </tr>
            <tr>
              <td>Amortization</td>
              <td>-$500</td>
            </tr>
            <tr>
              <td><strong>Total Expenses</strong></td>
              <td><strong>-$11,500</strong></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><strong>Operating Income</strong></td>
              <td><strong>$38,500</strong></td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td>Taxes</td>
              <td>-$1000</td>
            </tr>
            <tr>
              <td>Interest</td>
              <td>-$800</td>
            </tr>

            <tr>
              <td></td>
              <td></td>
            </tr>

            <tr>
              <td><strong>Net Income</strong></td>
              <td><strong>$36,700</strong></td>
            </tr>
          </tbody>
        </Table>

        <p>Our eye is trained to look at the very bottom, at <strong>Net Income</strong> for the performance of the business. However, Net Income is just an <i>approximation</i> of cash performance.</p>

        <p>Let's calculate EBITDA do get a better picture:</p>
        <ul>
          <li>Start with Net Income: $36,700</li>
          <li>Add Interest: $800</li>
          <li>Add Taxes: $1000</li>
          <li>Add Depreciation: $1000</li>
          <li>Add Amortization: $500</li>
        </ul>
        <strong>EBITDA = $36,700 + $800 + $1000 + $1000 + $500 = $40,000</strong>
        <br></br><br></br><br></br>
        <h5>Why do we take out Amortization and Depreciation?</h5>
        <p>Because they are an <i>accounting</i> tool, not a <i>cash flow</i> tool. Without getting into the specific definitions of depreciation/amortization, all you need to know is that <strong>they are not actual cash expenses</strong>, so we exclude them.</p>

        <h5>Why don't we include Taxes and Interest, which are cash expenses?</h5>
        <p>Because, while they are actual cash expenses, they are <strong>dependent on financing!</strong> The current owner of the business might have no debt, they might have a lot of debt, or somewhere in between. Whatever their current capital structure, it's unlikely it will exactly match what we as a buyer might apply. So we exclude them.</p>

        <p>We now have a measure of cash flow that both 1) <i>removes key non-cash expenses</i> and is <i>independent of capital structure</i></p>

        <Container>
        </Container>
      </Container>

      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}
