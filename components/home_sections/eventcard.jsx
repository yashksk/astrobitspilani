
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic_1 from './pic_1.png';
export default function Event_Card() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pic_1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="link">Read More</Button>
      </Card.Body>
    </Card>
  );
}

