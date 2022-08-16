import React from "react";

function NestedMap() {
  const students = ["adnan", "zaib", "Ali"];
  const users = [
    {
      name: "adnan",
      age: 17,
      address: [
        { H: "10", city: "Lahore" },
        { H: "11", city: "karachi" },
        { H: "14", city: "fasilabad" }
      ]
    },
    {
      name: "zaib",
      age: 18,
      address: [
        { H: "145", city: "karachi" },
        { H: "15", city: "karachi" },
        { H: "190", city: "fasilabad" }
      ]
    },
    {
      name: "ali",
      age: 19,
      address: [
        { H: "12", city: "karachi" },
        { H: "154", city: "lahore" },
        { H: "11", city: "fasilabad" }
      ]
    }
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
          <th>Address</th>
        </tr>
        {users.map(
          (obj, i) => (
            // obj.age === 17 ? (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{obj.name}</td>
              <td>{obj.age}</td>

              <td>
                <table>
                  <tr>
                    <th>City</th>
                    <th>House No.</th>
                  </tr>
                  {obj.address.map((data) => (
                    <tr>
                      <td>{data.city}</td>
                      <td>{data.H}</td>
                    </tr>
                  ))}
                </table>
              </td>
            </tr>
          )
          // ) : null
        )}
      </table>
    </div>
  );
}
export default NestedMap;
