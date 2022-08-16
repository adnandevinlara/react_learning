import React from "react";

function Map() {
  const students = ["adnan", "zaib", "Ali"];
  const users = [
    { name: "adnan", age: 17 },
    { name: "zaib", age: 18 },
    { name: "ali", age: 19 }
  ];
  // // map looping
  // students.map((item) => {
  //   console.warn("My name is", { item });
  // });

  // // for loop
  // for (let i = 0; i < students.length; i++) {
  //   console.warn("My name is", students[i]);
  // }
  return (
    <div>
      <h1>List Mapping in React</h1>
      <ul>
        {students.map((item) => (
          <li>My name is: {item}</li>
        ))}
      </ul>
      <h1>List Mapping with Objects</h1>
      <table class="table">
        <tr>
          <th>Sr</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {users.map(
          (obj, i) => (
            // obj.age === 17 ? (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{obj.name}</td>
              <td>{obj.age}</td>
            </tr>
          )
          // ) : null
        )}
      </table>
    </div>
  );
}
export default Map;
