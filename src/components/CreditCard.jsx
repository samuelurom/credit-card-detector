import { getCardIcon } from "../utils/cardTypeIcons";
import "./CreditCard.css";

const CreditCard = ({ cardDetails }) => {
  const cardNumber = cardDetails.cardNumber || "0123 4567 8901 2345";
  const cardName = cardDetails.name.toUpperCase() || "JOHN DOE";
  const cardExpiry = cardDetails.expires || "10/23";
  const icon = getCardIcon(cardDetails.cardNumber);

  const cardIconStyle = {
    backgroundImage: `url(${icon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="credit-card">
      <div className="card-header">
        <div className="chip"></div>
        <div className="card-type" style={cardIconStyle}></div>
      </div>
      <div className="card-number">
        <span>{cardNumber}</span>
      </div>
      <div className="card-info">
        <div className="card-holder">
          <label>CARDHOLDER NAME</label>
          <span>{cardName}</span>
        </div>
        <div className="card-expiry">
          <label>EXPIRES</label>
          <div className="expires">
            <div className="valid-thru">
              <p>
                VALID
                <br />
                THRU
              </p>
              <span>▸</span>
            </div>
            <span className="expiry-date">{cardExpiry}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
