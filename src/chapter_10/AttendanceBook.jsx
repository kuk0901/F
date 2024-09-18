import React from "react";

const students = [
  {
    id: 1,
    name: "Isabel"
  },
  {
    id: 2,
    name: "Elijah"
  },
  {
    id: 3,
    name: "Arthur"
  },
  {
    id: 4,
    name: "Gregory"
  }
];

const AttendanceBook = (props) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={`student-id-${student.id}`}>{student.name}</li>
      ))}
    </ul>
  );
};

export default AttendanceBook;
