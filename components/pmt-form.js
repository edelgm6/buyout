import { Form, Button, Col } from 'react-bootstrap'


export default function PMTForm() {
  return <div>
  <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Row>
        <Form.Label column="sm" lg={2}>
          Starting Balance
        </Form.Label>
        <Col>
          <Form.Control size="sm" type="number" placeholder="400000" />
        </Col>
      </Form.Row>
      <Form.Row>
        <Form.Label column="sm" lg={2}>
          Interest Rate
        </Form.Label>
        <Col>
          <Form.Control size="sm" type="number" placeholder=".04" />
        </Col>
      </Form.Row>
    </Form.Group>
  </Form>
  <br></br>
  </div>
}
