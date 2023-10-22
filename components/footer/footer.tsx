import React from 'react'
import SecondaryButton from '../secondaryButton'

const Footer = () => {
  return (
    <footer className="mt-[15rem] block justify-between bg-[#151934] p-10">
        <p className='text-xs md:text-lg text-center lg:text-left'>All rights reserved Ascend AI © 2023</p>
        <div className='lg:block text-center lg:text-right pt-[2rem]'>
        <SecondaryButton text={'Terms'}/>
        <SecondaryButton text={'Privacy'}/>
        </div>
      </footer>
  )
}
export default Footer