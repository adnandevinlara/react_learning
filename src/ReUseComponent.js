import React from "react";
ReUseComponent = () => {
  const students = ["adnan", "ali", "danyal"];
  return (
    <div>
      <h1>Reuse Components</h1>
      {students.map((item, i) => (
        <childComponent name={item} />
      ))}
    </div>
  );
};

export default ReUseComponent;
