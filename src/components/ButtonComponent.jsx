import React from "react";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <div
      className="p-8 border border-gray-800 text-2xl flex justify-center items-center h-8 w-8"
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default ButtonComponent;
