import React from 'react'

const Card = ({childern, bg = 'bg-gray-100'}) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}> {childern}
    </div>;
};

export default Card;