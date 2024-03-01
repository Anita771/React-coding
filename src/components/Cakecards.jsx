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
            
            

        </div >
    );
}