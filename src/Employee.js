import React from "react";

function Employee({ name, surname, age, wage }) {
  return (
    <p>
      <span>name: {name}</span> <br />
      <span>surname: {surname}</span> <br />
      <span>age: {age}</span> <br />
      <span>wage: {wage}</span> <br />
    </p>
  );
}
export default Employee;
