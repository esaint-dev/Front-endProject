import React, { useState } from "react";

const ClickCount = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="flex justify-around gap-10 items-center">
      <button
        onClick={handleClick}
        className="p-2 bg-blue-600 text-white rounded-m"
      >
        Click to Change
      </button>
      <div className="text-xl text-white font-medium">{count}</div>
      <button
        onClick={handleReset}
        className="p-2 bg-blue-600 text-white rounded-m"
      >
        Reset
      </button>
    </div>
  );
};

export default ClickCount;
