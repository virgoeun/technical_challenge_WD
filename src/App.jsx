import { Routes, Route } from "react-router-dom";
import PhonePage from "./pages/PhonePage";
import PhoneDetails from "./components/PhoneDetails";
import './App.css'

function App() {


  return (   <div className="App">
  <h1 className="text-3xl font-bold mb-10 mt-5">
      Welcome to Phone Cave! 📱
    </h1>
  <Routes>
    <Route path="/phone" element={<PhonePage />} />
    <Route path="/phone/:phoneId" element={<PhoneDetails />} />
   
  </Routes>
</div>
  
  )
}

export default App