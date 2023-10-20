import React from 'react'

const Button = (props: {text: string, onClick: React.MouseEventHandler<HTMLButtonElement>}) => {
  return (
    <button className='bg-[#7214ffe2] hover:bg-[#7214FF] text-lg py-2 px-8 rounded-full' onClick={props.onClick}>
        {props.text}
    </button>
  )
}

export default Button