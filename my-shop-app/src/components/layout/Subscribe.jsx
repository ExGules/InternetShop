import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import ImageNews from '../../assets/images/newslette.jpg';

const Subscribe = () => {
  return (
    <div 
      className="subscribe"
      style={{ backgroundImage: `url(${ImageNews})` }}
    >
      <div className="subscribe-info">
        <div className="info">
          <div className="title">Newsletter</div>
          <div className="info-text">
            Be the first to hear about deals, offers and upcoming collections.
          </div>
        </div>

        <div className="email">
          <Input type="text" name="email" placeholder="Enter your email" />
          <div className="button-wrapper">
            <Button>Subscribe</Button>
            <div className="vertical-line"></div>
          </div>
        </div>
      </div>

      <div className="dot-patterny"></div>
    </div>
  );
};

export default Subscribe;