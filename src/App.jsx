import { Routes, Route } from "react-router-dom";
import PhonePage from "./pages/PhonePage";
import PhoneDetails from "./components/PhoneDetails";

import './App.css'

function App() {


  return (   <div className="App">

  <Routes>
    <Route path="/phone" element={<PhonePage />} />
    <Route path="/phone/:phoneId" element={<PhoneDetails />} />
   
  </Routes>
</div>
  
  )
}

export default App
