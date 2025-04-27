import React from 'react'

const Button = ({ onClick, text }: { onClick(): void, text: string}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-8 py-5 bg-green-500 rounded text-2xl text-white"
    >
      {text}
    </button>
  );
}

export default Button