import Carousel from 'react-bootstrap/Carousel';
import {Container,  Row, Col} from 'react-bootstrap';
import pic_1 from "./pic_1.png";


export default function Slideshow() {
  return (
    <Container>
      <Row>
        <Col>
        <Carousel>
          <Carousel.Item>
            <img src={"images/pic_1.png"} />
            </Carousel.Item>
            <Carousel.Item>
            <img src={pic_1} />
            </Carousel.Item>
            <Carousel.Item>
            <Image src={"/images/pic_1.png"} />
            </Carousel.Item>
            
          </Carousel>

        </Col>
        </Row>
      </Container>


    
  );
}

