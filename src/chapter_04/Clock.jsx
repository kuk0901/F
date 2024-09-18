import React from "react";

const Clock = (props) => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <h2>Time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
