import React from 'react'

const Button = (props: {text: string}) => {
  return (
    <button className='bg-[#7214FF] text-sm py-2 px-8 rounded-full'>
        {props.text}
    </button>
  )
}

export default Button