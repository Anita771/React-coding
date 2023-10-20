
import Carousel from 'react-bootstrap/Carousel';

export default function Slides() {
    return (
        <Carousel className='cakes'>
            {/* Added interval for each image */}
      <Carousel.Item interval={1500}>
        <img className='cakes' src="./images/cake2.jpg" alt="" width="500" height="400" />
        <Carousel.Caption>
          <h3>Simple Cakes</h3>
          <p>We bake variety of cakes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='cakes' src="./images/cake.jpg" alt="" width="500" height="400" />
        <Carousel.Caption>
          <h3>Wedding Cakes</h3>
          <p>We bake to make your day special.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className='cakes' src="./images/cake3.jpg" alt="" width="500" height="400" />
        <Carousel.Caption>
          <h3>Party Cakes</h3>
          <p>
            We bake to add more taste to your parties.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    );
}