import Form from 'react-bootstrap/Form';




export default function Infoinput() {
    /* Added an event handler to the submit button */
    const shoot = () => {
        alert("Thank you! We will get back to you soon!");
    }

    return (
        <div>

            <h1 className="bakery">Contact Us</h1>
            <div className='form'><Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Inquaries</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write Here" />
                    <div>

                        <button className="formstyle" onClick={shoot}>Submit</button>

                    </div>
                </Form.Group>
            </Form></div>


            <br />
            <div>
                <h3 className="bakery2">We Bake with love and Passion</h3>
                <div className="bakery3">
                    <h3>Call us 0800 444 8894</h3>
                    <h4> Monday-Friday 9:00 am -5:00 pm</h4>
                    <h4> Saturday & Sunday 10:00 am -4:00 pm</h4>
                </div>
            </div>
        </div>
    );
}