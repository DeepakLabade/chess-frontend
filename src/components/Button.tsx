import React from 'react'

const Button = ({ onClick, text }: { onClick(): void, text: string}) => {
  return (
    <button
      onClick={onClick}
      className="cursor-pointer px-8 w-3/4 py-5 bg-[#81B64C] rounded text-2xl text-white"
    >
      {text}
    </button>
  );
}

export default Button