import Head from 'next/head'
import Definition from '../components/definition'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Buyout</title>
      </Head>
      <Container>
        <h2>
          Let's do a leveraged buyout!
        </h2>
        <p>
          But first, some definitions. Before we proceed, it's important to note that in each case we aren't talking about 'book value' but <i>market value</i>. The importance of this will make itself plain later.
        </p>
          <Definition
            title = "Equity"
            body = {[<strong>Equity</strong>, " is the market value of the outstanding shares, often called the 'market capitalization' (or market cap for short!). Equity holders typically have voting rights, may get a dividend, and will see their value fluctuate with the business. If the firm goes bankrupt, the equity holders are the last to be made whole."]}
          />
          <Definition
            title = "Liabilities"
            body = {[<strong>Liabilities</strong>, " represents the market value of any outstanding debt of the firm (e.g., bank loans, bonds, etc.). of a firm. Banks and bondholders are typically paid back in interest and principal. Outside of special circumstances like convertible bonds, liabilities' value doesn't change with the fortunes of the firm unless there is a bankruptcy."]}
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
                <p>But in a leveraged buyout we aren't buying a few shares of stock. <strong>We're buying the entire asset.</strong></p>
              </div>
            }
          />
          <Definition
            title = "Enterprise Value"
            body = {
              <div>
                <p><strong>Enterprise Value</strong> is the assets of the firm less any excess cash on the balance sheet. We subtract the excess cash because we want to understand the value of the core business rather than the value of the excess cash.</p>

                <p>To illustrate, imagine you are going to buy a house. On Zillow, the house the house is estimated to be worth $300,000. However, in the listing it mentions that the house comes with $100,000 in cash in a box in the basement.</p>

                <p>The <strong>Assets</strong> of the house is $400,000. The Enterprise Value of the house is $300,000. As a buyer, you are indifferent from paying $400,000 and keeping the money in the basement or if the seller takes the money with them and you only pay $300,000. It's the same if you're buying a business.</p>
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
