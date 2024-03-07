import React from 'react'
import Images from '../Images/Images'
import { useState } from 'react';

export function Task({ txt }) {

  return (
    <>
      <div className='flex justify-between bg-white p-4 rounded-lg  mr-3'>
        <div className='flex gap-4'>
          <input type="checkbox" />
          <p>{txt}</p>
        </div>
        <div className='flex gap-2'>
          <button><img src={Images.edit} alt="" /></button>
          <button><img src={Images.bin} alt="" /></button>
        </div>
      </div>
    </>
  )
}
