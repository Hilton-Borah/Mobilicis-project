import { getLocalData } from '@/Utils/LocalStorage';
import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async() => {
    // Handle form submission here
    console.log('Submitted:', inputValue);
    let result = await fetch(`http://localhost:3000/api/register/${getLocalData("userId")}`, {
      method: "PATCH",
      body: JSON.stringify({ email, password })
    })
    result = await result.json();
   console.log(result)
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-3">Modal Heading</h2>
        <input
          type="text"
          placeholder="Enter something"
          className="border border-gray-300 px-3 py-2 rounded-md w-full mb-3"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="flex justify-between">
          <button
            className="text-mobilicis hover:text-gray-700"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-mobilicis text-white px-4 py-2 rounded-md hover:bg-mobilicisLite"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
