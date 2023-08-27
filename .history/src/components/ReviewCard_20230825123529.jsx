import React from 'react'

const ReviewCard = ({ imgURL, customerName, rating, feeback, }) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
        />
    </div>
  )
}

export default ReviewCard