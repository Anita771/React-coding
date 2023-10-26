import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export default function Cakecards() {
    return (
        <div>
            <div className="cards">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/cake2.jpg" />
                    <Card.Body>
                        <Card.Title>Chocolate Cake</Card.Title>
                        <Card.Text>
                            Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                        </Card.Text>
                        <Button variant="primary">Price</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/cake.jpg" />
                    <Card.Body>
                        <Card.Title>Wedding Cake</Card.Title>
                        <Card.Text>
                            Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                        </Card.Text>
                        <Button variant="primary">Price</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="./images/cake3.jpg" />
                    <Card.Body>
                        <Card.Title>Party Cake</Card.Title>
                        <Card.Text>
                            Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                        </Card.Text>
                        <Button variant="primary">Price</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}