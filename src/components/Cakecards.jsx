import Card from 'react-bootstrap/Card';



export default function Cakecards() {
    return (
        <div className='kakku'>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake2.jpg" alt="" />
                <Card.Body>
                    <Card.Title>Chocolate Cake</Card.Title>
                    <Card.Text>
                        Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake.jpg" alt="" />
                <Card.Body>
                    <Card.Title>Wedding Cake</Card.Title>
                    <Card.Text>
                        Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake3.jpg" alt="" />
                <Card.Body>
                    <Card.Title>Party Cake</Card.Title>
                    <Card.Text>
                        Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake5.jpg" alt="" />
                <Card.Body>
                    <Card.Title>Wedding Cake</Card.Title>
                    <Card.Text>
                        Red velvet, Cream Cheese Filling, Decorated with fondant.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake13.jpeg" alt="" />
                <Card.Body>
                    <Card.Title>Party Cake</Card.Title>
                    <Card.Text>
                        Soft chocolate base, Mocca Filling, Covered with Chocolate Genache.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>

            <Card className="cards" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="./images/cake4.jpg" alt="" />
                <Card.Body>
                    <Card.Title>Theme Cake</Card.Title>
                    <Card.Text>
                        Vanilla Cake, Decorated with fondant.
                    </Card.Text>
                    <a href="/" class="btn btn-primary">Price</a>
                </Card.Body>
            </Card>
            
            

        </div >
    );
}