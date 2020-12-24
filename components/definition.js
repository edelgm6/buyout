import { Container, Row, Card, Button } from 'react-bootstrap'


export default function Definition({ title, body }) {

  return <Card className="mx-auto my-2">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {body}
      </Card.Text>
    </Card.Body>
  </Card>

}
