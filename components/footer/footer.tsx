import React from 'react'
import SecondaryButton from '../secondaryButton'

const Footer = () => {
  return (
    <footer className="mt-[30rem]">
        <div className='flex justify-between bg-[#151934] p-20 block'>
        <p className='text-sm md:text-lg'>All rights reserved Ascend AI © 2023</p>
        <div className='flex'>
        <SecondaryButton text={'Terms'}/>
        <SecondaryButton text={'Privacy'}/>
        </div>
        </div>
      </footer>
  )
}
export default Footer