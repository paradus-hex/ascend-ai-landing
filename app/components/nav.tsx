import React from 'react'
import Button from './button'

const Nav = () => {
  return (
    <div className='flex justify-between items-center font-nunito'>
        <div className='font-extrabold text-3xl  tracking-[0.375rem]'>Ascend.Ai</div>
        <div className='flex gap-4 text-sm'>
            <div>Home</div>
            <div>About</div>
            <div>Features</div>
            <div>Contact</div>
        </div>
        <div>
            <Button text={'Login'}/>
        </div>
    </div>
  )
}

export default Nav