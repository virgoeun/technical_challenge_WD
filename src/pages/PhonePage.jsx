import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import PhoneDetails from "../components/PhoneDetails";

const API_URL = "http://localhost:3000";

function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [selectPhoneId, setSelectPhoneId] = useState(null);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phone`) // this is backend server routes that I set
      .then((response) => {setPhones(response.data)
    console.log("😎fetcheddata", response.data)
    })
      //store the list of projects that we will fetch from the backend.
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPhones();
  }, []);


  const handleSelectPhone = (id) => {
    setSelectPhoneId(id);
  };

  return (
    <div className="PhonePage">

    
        <h1>Phone List</h1>
{phones.map((phone)=> (
<PhoneCard key ={phone.id} {...phone}/>

))}

        <ul> 
      {phones.map((phone) => (
        <li key={phone.id} onClick={() => handleSelectPhone(phone.id)}>
          {phone.name}
        </li>
      ))}
</ul>

{selectPhoneId && <PhoneDetails phoneId={selectPhoneId}/>}

    </div>
  );
}

export default PhonePage;
