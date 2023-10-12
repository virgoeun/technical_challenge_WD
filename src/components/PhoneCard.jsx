import { Link } from "react-router-dom";
//import image1 from "../assets/images/Galaxy_S7.png"


function PhoneCard ({name, id, manufacturer, color, image, imageFileName}) {

    return (
        <div className="PhoneCard-box">
          <Link to={`/phone/${id}`}>
            <h3>{name}</h3>
          </Link>
          <p style={{ maxWidth: "400px" }}>Manufacturer: {manufacturer}</p>
          <p style={{ maxWidth: "400px" }}>Color: {color}</p>
         
          {/* <img style={{ maxWidth: "100px" }} src ={`/images/${imageFileName}`} alt={imageFileName} /> */}
        </div>
      );  
}

export default PhoneCard;