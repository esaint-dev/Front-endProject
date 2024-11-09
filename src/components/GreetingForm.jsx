import React, { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Welcome, ${name}`);
  };

  return (
    <div className="text-center mt-8">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border border-gray-300 rounded-md mr-2 outline-none"
        />
        <button
          type="submit" className="p-2 bg-blue-600 text-white rounded-md">Greet</button>
      </form>
      
      {greeting && <h3 className="text-xl text-white font-medium">{greeting}</h3>}
    </div>
  );
};

export default GreetingForm;
