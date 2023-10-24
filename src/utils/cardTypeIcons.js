import amexIcon from "../assets/icons/amex.svg";
import dinersIcon from "../assets/icons/diners.svg";
import discoverIcon from "../assets/icons/discover.svg";
import jcbIcon from "../assets/icons/jcb.svg";
import maestroIcon from "../assets/icons/maestro.svg";
import mastercardIcon from "../assets/icons/mastercard.svg";
import unionpayIcon from "../assets/icons/unionpay.svg";
import visaIcon from "../assets/icons/visa.svg";

const cardIcons = {
  amex: amexIcon,
  diners: dinersIcon,
  discover: discoverIcon,
  jcb: jcbIcon,
  maestro: maestroIcon,
  mastercard: mastercardIcon,
  unionpay: unionpayIcon,
  visa: visaIcon,
};

// reference: https://en.wikipedia.org/wiki/Payment_card_number
const cardPatterns = {
  amex: /^3[47]/,
  diners: /^3(?:0[0-5]|[68])/,
  discover: /^6(?:011|5[0-9])/,
  jcb: /^(?:2131|1800|35\d)/,
  maestro: /^(5018|5020|5038|6304|6759|6761|6763)/,
  mastercard: /^5[1-5]/,
  unionpay: /^62/,
  visa: /^4/,
};

function getCardIcon(cardNumber) {
  for (const cardType in cardPatterns) {
    if (cardPatterns[cardType].test(cardNumber)) {
      return cardIcons[cardType];
    }
  }
  return null;
}

export { getCardIcon };
