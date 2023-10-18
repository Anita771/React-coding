import Slides from "./Slides";


export default function Homepagecontent() {
    return (
        <div>

            <h1 className="bakery">Anita's Bakery</h1>
            <br/>

            {/*<div className="cakes">
                <img src="./images/cake2.jpg" alt="" width="500" height="400" />
                <img src="./images/cake.jpg" alt="" width="500" height="400" />
                <img src="./images/cake3.jpg" alt="" width="500" height="400" />

    </div>*/}
            <div>
                <Slides/>
            </div>
            <br/>
            <div>
                <h3 className="bakery2">We Bake with love and Passion</h3>
            </div>
        </div>
    );
}