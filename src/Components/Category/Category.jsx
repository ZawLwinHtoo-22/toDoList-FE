import React from 'react'
import Images from '../Images/Images'


export function Category({txt, imageUrl}) {
  return (
    <>
      <div className='flex flex-col gap-2 items-center'>
        <button className='bg-[#F2F2F2] p-2 rounded-[20px] w-[50px] h-[50px]'>
          <img className='max-w-full' src={imageUrl} alt="category_image" />
          {/* <img className='max-w-full' src={Images.cross} alt="category_image" /> */}
          </button>
        <p className='w-10 overflow-x-hidden text-center'>{ txt }</p>
      </div>
    </>
  )
}
