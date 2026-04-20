import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import arrowRight from '../../assets/icons/arrow-right.svg';

const PromoCode = ({ onApplyPromo }) => {

  const [code, setCode] = useState("");

  const handleApply = () => {
    if (code.toLowerCase().trim() === "ilovereact") {
      onApplyPromo(true);
    } else {
      onApplyPromo(false);
    }
  };

  return (
    <div className="promo-code-wrapper">
      <div className="info">
        <div className="title">You Have A Promo Code?</div>
        <div className="description">
          To receive up-to-date promotional codes, subscribe to us on social networks.
        </div>
      </div>
      
      <div className="promo-code">
        <Input 
          type="text" 
          name="promo-code" 
          placeholder="Enter promo code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="button-wrapper">
          <Button className="button" onClick={handleApply}>
            <img src={arrowRight} alt="arrow icon" />
          </Button>
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className="find-us">
        <div className="find-us-text">Find us here:</div>
        <div className="find-us-links">
          <div className="find-us-link"><a href="">FB</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="">TW</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="">INS</a></div>
          <div className="line"></div>
          <div className="find-us-link"><a href="">PT</a></div>
        </div>
      </div>
    </div>
  );
};

export default PromoCode;