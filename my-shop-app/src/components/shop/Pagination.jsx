import React from 'react';
import leftArrow from '../../assets/icons/left-pagin-arrow.svg';
import rightArrow from '../../assets/icons/right-pagin-arrow.svg';

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="button left">
        <img src={leftArrow} alt="previous" />
      </div>
      <div className="pages">
        <div className="page active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>
      <div className="button right">
        <img src={rightArrow} alt="next" />
      </div>
    </div>
  );
};

export default Pagination;