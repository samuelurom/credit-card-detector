import { getCardIcon } from "../utils/cardTypeIcons";
import "./CardInfo.css";

const CardInfo = ({ cardDetails, onChange }) => {
  const icon = getCardIcon(cardDetails.cardNumber);

  const cardTypeStyle = {
    backgroundImage: `url(${icon})`,
    backgroundSize: "contain",
    backgroundPosition: "98%",
    backgroundRepeat: "no-repeat",
  };

  return (
    <form onChange={onChange} className="payment-info">
      <div className="form-group">
        <label>Name</label>
        <input type="text" name="name" />
      </div>
      <div className="form-group">
        <label>Card Number</label>
        <input style={cardTypeStyle} type="text" name="cardNumber" />
      </div>
      <div className="col-2">
        <div className="form-group">
          <label>Expires (MM/YY)</label>
          <input type="text" name="expires" />
        </div>
        <div className="form-group">
          <label>Security Code</label>
          <input type="text" name="security-code" />
        </div>
      </div>
    </form>
  );
};

export default CardInfo;
