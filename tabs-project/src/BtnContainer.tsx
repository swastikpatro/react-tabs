import React, { useState } from 'react';
import { BtnContainerProps } from './types';

const BtnContainer = ({
  companies,
  handleClick,
}: BtnContainerProps): JSX.Element => {
  const [active, setActive] = useState(0);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const element = e.target as HTMLElement;
    if (!('index' in (element.dataset as DOMStringMap))) {
      return;
    }

    setActive(Number(element.dataset.index));

    handleClick(Number(element.dataset.index));
  };

  return (
    <div className='btn-container' onClick={handleContainerClick}>
      {companies.map((singleCompany, i) => {
        return (
          <button
            key={singleCompany}
            data-index={i}
            className={active === i ? 'job-btn active-btn' : 'job-btn'}
          >
            {singleCompany}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
