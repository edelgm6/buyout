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
            body = {[<strong>Assets</strong>, " is the value of the firm's holdings and operations. This is where ", <strong>the common understanding of these terms and the financial understanding can differ.</strong>, "In common speech, we think of assets as stuff you own: money in the bank, your house, the car in your garage. But in financial terms we think of assets not just as stuff but also as present value. In the case of a household, the total assets would be not just the stuff, but also the ", <strong>present value of future income.</strong>, "Similarly, the assets of the business is not just its office buildings and factories and cash balance, but also the present value of its future cash flows."]}
          />
          <Definition
            title = "Enterprise Value"
            body = {["The ", <strong>enterprise value</strong>, " of a firm represents the ", <strong>present value</strong>, " of the firm's assets."]}
          />
        <Container>
        </Container>
      </Container>

      <footer className="cntr-footer">
      </footer>
    </Container>
  )
}
