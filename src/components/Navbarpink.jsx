import { Link } from "react-router-dom";

const style = {
    textDecoration: "none",
    color: "white"
}


export default function Navbarpink() {


    return (
        <div >
            <div className="navbarpink">
            {/* Linked logo to home page by rapping image into link */}
                <Link to='/'>
                    <div>
                        <img className="stylelogo" src="./images/logo.jpg" alt="" width="75" height="75" />
                    </div>
                </Link>

                <div>

                    <button className="style"><Link to="/" style={style}>Home</Link></button>
                    <button className="style"><Link to="/About" style={style}>About Us</Link></button>
                    <button className="style"><Link to="/Contact" style={style}>Contact Us</Link></button>
                    <button className="style"><Link to="/services" style={style}>Services</Link></button>
                </div>

            </div>
        </div>

    );
}