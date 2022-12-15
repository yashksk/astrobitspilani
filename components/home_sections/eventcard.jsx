
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic_1 from './pic_1.png';
import styles from "./eventcard.module.css";
export default function Event_Card() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"/images/sample.png"} height = "230px" width = "350px" />
      <Card.Body>
        <Card.Title className = {styles.cardtitle}>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="link">Read More</Button>
      </Card.Body>
    </Card>
  );
}

