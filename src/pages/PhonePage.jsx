import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
//import PhoneCard from "../components/PhoneCard";
import PhoneDetails from "../components/PhoneDetails";

const API_URL = "http://localhost:3000";

function PhonePage() {
  const [phones, setPhones] = useState([]);
  const [selectPhoneId, setSelectPhoneId] = useState(null);

  const getAllPhones = () => {
    axios
      .get(`${API_URL}/api/phone`) // this is backend server routes that I set
      .then((response) => {
        setPhones(response.data);
        console.log("😎fetcheddata", response.data);
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
      <h1 className="text-2xl mt-8 mb-10">In Stock Phone List</h1>
      {/* {phones.map((phone)=> (
<PhoneCard key ={phone.id} {...phone}/>

))} */}
      <div className="grid grid-cols-2 gap-5 content-center">
        {phones.map((phone) => (
          // key={phone.id}
          //           className="flex flex-wrap w-full items-center dark:bg-gray-900 py-12 px-6 flex justify-center items-center mb-6"
          <div
            key={phone.id}
            className="dark:bg-gray-900 py-6 mb-6 flex justify-center items-center"
          >
            <div className="w-full h-200 flex flex-row justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-sm text-slate-500 hover:text-blue-600 dark:text-gray-100 font-bold mb-3">
                  {phone.name}
                </h4>
              </div>

              <div>
                <div className="flex items-center justify-end text-gray-800">
                  <p className="text-sm dark:text-gray-100 mr-2">
                    Check Details 👉
                  </p>
                  <div
                    className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center"
                    onClick={() => handleSelectPhone(phone.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-device-mobile-check"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5"></path>
                      <path d="M11 4h2"></path>
                      <path d="M12 17v.01"></path>
                      <path d="M15 19l2 2l4 -4"></path>
                    </svg>
                  </div>
                </div>
              </div>
              {selectPhoneId === phone.id && (
                <PhoneDetails phoneId={phone.id} />
              )}
            </div>
          </div>
        ))}
      </div>
      {/* {selectPhoneId && <PhoneDetails phoneId={selectPhoneId} />} */}
    </div>
  );
}

export default PhonePage;
