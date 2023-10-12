import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000";

function PhoneDetails({ phoneId }) {
  const [phoneDetails, setPhoneDetails] = useState(null);
  console.log("Fetching phone details for ID:", phoneId);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/phone/${phoneId}`)
      .then((response) => {
        console.log("Response from API:", response.data); // Debug: Check API response
        setPhoneDetails(response.data);
      })
      .catch((error) => console.error("Error fetching phone details:", error));
  }, [phoneId]);

  if (!phoneDetails) {
    return <div>Loading... </div>;
  }
  console.log("Rendering phone details:", phoneDetails);

  return (
    <div>
      <h2>Phone Details</h2>
      <p style={{ maxWidth: "200px" }}>Price:{phoneDetails.price}</p>
      <p style={{ maxWidth: "200px" }}>
        Manufacturer:{phoneDetails.manufacturer}
      </p>
      <p style={{ maxWidth: "200px" }}>Color:{phoneDetails.color}</p>
      <p style={{ maxWidth: "200px" }}>{phoneDetails.description}</p>
    </div>
  );
}

export default PhoneDetails;
