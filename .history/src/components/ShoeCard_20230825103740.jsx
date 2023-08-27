import React from 'react'

const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

  const handleClick = () => {
    if(bigShoeImg !== ingURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe)
    }
  }

  return (
    <div className={`border-2 rounded-xl
      ${bigShoeImage === imgURL
        ? 'border-coral-red'
        : 'border-transparent'
      } cursor-pointer max-sm:flex-1
    `}>
      onClick={handleClick}

    </div>
  )
}

export default ShoeCard