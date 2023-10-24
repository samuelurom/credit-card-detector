import CardInfo from "./components/CardInfo";
import CreditCard from "./components/CreditCard";
import "./App.css";
import { useState } from "react";
import SampleCards from "./components/SampleCards";

function App() {
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expires: "",
  });

  function onChange(e) {
    const input = e.target;
    setCardDetails({ ...cardDetails, [input.name]: input.value });
  }

  return (
    <>
      <h1>Payment Information</h1>

      <div className="container">
        <CreditCard cardDetails={cardDetails} />
        <CardInfo cardDetails={cardDetails} onChange={onChange} />
      </div>

      <SampleCards />
    </>
  );
}

export default App;
