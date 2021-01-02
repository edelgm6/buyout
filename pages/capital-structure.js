import Head from 'next/head'
import Definition from '../components/definition'
import Navigation from '../components/navigation'
import BarChart from '../components/bar-chart'
import Link from 'next/link'
import { Container, Row, Card, Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Buyout</title>
      </Head>

      <Navigation active_link = "definitions"/>

      <Container>
        <h2>Understanding Capital Structure</h2>

        <p>
          A critical first principle when we think about buying a business is that <strong>a business's <i>current</i> capital structure and valuation are independent concerns.</strong> However, the <i>potential</i> capital structure is tightly linked to a business's valuation.
        </p>

        <h5>1356 Jefferson</h5>
        <p>
          While this may be unintuitive at first, it's plainly obvious when we think about our home example.
        </p>

        <p>
          As stated in the <Link href="/"><a>Introduction</a></Link>, <strong>1356 Jefferson</strong> is worth $500,000 and its current owners have a $200,000 balance on their mortgage (i.e., or $300,000 in Equity).
        </p>

        <p>
          Does the mortgage balance of the current owner affect the amount <i>you</i> would be willing to pay for it? Clearly not! <strong>Whether the current owner has the home paid off or have a substantial balance is immaterial to you.</strong>
        </p>

        <p>
          However, imagine that interest rates ballooned from 3% to 10% (pushing a $400,000 mortgage from ~$1700/month to ~$3500/month). I suspect your willingness to pay would drop as the cost of ownership of home goes up (we observe this empirically in the market — home values and mortgage rates are tightly linked).
        </p>

        <p>
          I.e., the <i>existing capital structure</i> doesn't affect your valuation on the home, but your <i>potential</i> capital structure does.
        </p>

        <h5>Parrish Shoe Company</h5>

        <p>
          When we think about a business, we think about their capital structure in terms of <strong>how the assets of the business are 'funded'</strong>.
        </p>

          <Definition
            title = "Equity"
            body = {[<strong>Equity</strong>, " is the market value of the outstanding shares, often called the 'market capitalization' (or market cap for short!). Equity holders typically have voting rights, may get a dividend, and will see their value fluctuate with the business. If the firm goes bankrupt, the equity holders are the last to be made whole."]}
          />
          <Definition
            title = "Liabilities"
            body = {[<strong>Liabilities</strong>, " represents the market value of any outstanding debt (e.g., bank loans, bonds). of a firm. Banks and bondholders are typically paid back in interest and principal. Outside of special circumstances like convertible bonds, liabilities' value doesn't change with the fortunes of the firm unless there is a bankruptcy."]}
          />
          <Definition
            title = "Assets"
            body = {
              <p><strong>Assets</strong>, is the value of the firm's holdings and operations. This is where <strong>the common understanding of these terms and the financial understanding can differ.</strong> In common speech, we think of assets as stuff you own: money in the bank, your house, the car in your garage. But in financial terms we think of assets not just as stuff but also as present value. In the case of a household, the total assets would be not just the stuff, but also the <strong>present value of future income.</strong> Similarly, the assets of the business is not just its office buildings and factories and cash balance, but also the present value of its future cash flows.</p>
            }
          />
          <Definition
            title = "The Accounting Identity"
            body = {
              <div>
                <p><strong>Assets = Liablilities + Stockholder's Equity</strong></p>
                <p>This can be rewritten (and often more intuitively understood) as Stockholder's Equity = Assets - Liabilities becaus we are typically thinking of ourselves as equity holders.</p>
                <p>But in a leveraged buyout we aren't buying a few shares of stock. <strong>We're buying the entire asset and are indifferent to how those assets are funded.</strong></p>
              </div>
            }
          />
          <Definition
            title = "Enterprise Value"
            body = {
              <div>
                <p><strong>Enterprise Value = Assets - Excess Cash</strong></p>
                <p><strong>Enterprise Value</strong> is the assets of the firm less any excess cash on the balance sheet. We subtract the excess cash because we want to understand the value of the core business as a stand-alone asset rather than including value of whatever excess cash happens to be on the balance sheet.</p>

                <p>To illustrate, imagine you are going to buy a house. On Zillow, the house the house is estimated to be worth $300,000. However, in the listing it mentions that the house comes with $100,000 in cash in a box in the basement.</p>

                <p>The <strong>Assets</strong> of the house is $400,000. The <strong>Enterprise Value</strong> of the house is $300,000. As a buyer, <strong>you are indifferent</strong> from paying $400,000 and keeping the money in the basement or payung $300,000 without the money in the basement. It's the same if you're buying a business: the excess cash is irrelevant.</p>
              </div>
            }
          />
          <Container>
          </Container>
        </Container>

        <footer className="cntr-footer">
        </footer>
      </Container>
    )
  }
