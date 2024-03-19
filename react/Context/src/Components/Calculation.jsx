import React, { useState } from "react";
import ShowStatistics from "./ShowStatistics";

function Calculation(props) {
  let studentArray = props.infos.students.split("\t");
  let moduleArray = props.infos.module.split("\t");
  const [combinations, setCombinations] = useState(() =>
    studentArray.map(student => ({ name: student, notes: new Array(moduleArray.length).fill('') }))
  );
  const [showStatistics, setShowStatistics] = useState(false);

  const handleInputChange = (studentIndex, moduleIndex, value) => {
    const updatedCombinations = [...combinations]; // Create a copy of combinations array
    updatedCombinations[studentIndex].notes[moduleIndex] = value; // Update the copy
    // Now update the state with the modified copy
    setCombinations(updatedCombinations);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <p1 style={{color: 'black'}}>مؤسسة: {props.infos.school}</p1>
      <p1 style={{color: 'black'}}>السنه الدراسيه: {props.infos.year}</p1>
      <p1 style={{color: 'black'}}>المستوى الدراسي: {props.infos.level}</p1>
      {combinations.map((student, studentIndex) => (
        <div key={studentIndex}>
          <p1 style={{color: 'red'}}>{student.name}: </p1>
          {moduleArray.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <label  style={{color: 'black'}}>{module}</label>
              <input
                type="number"
                min={1}
                max={3}
                onChange={(event) => {
                  const { value } = event.target;
                  handleInputChange(studentIndex, moduleIndex, value); // Call the handler
                }}
              />
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => setShowStatistics(!showStatistics)}>Show Statistics</button>
      {showStatistics && <ShowStatistics combinations={combinations} moduleArray={moduleArray} />}
    </div>
  );
}

export default Calculation;
