import React, { useState } from "react";
import Infos from './Components/Infos'
import Calculation from "./Components/Calculation";
import styles from './App.module.css'

function App() {
  const [infos, setInfos] = useState({
    name: 'non',
    school: 'non',
    year: 'non',
    level: 'non',
    students: 'non',
    module: 'non'
  });

  const [answer, setAnswer] = useState('error infos');

  const editInfos = (_name, _school, _year, _level, _students, _module) => {
    if (_name !== 'non' && _name !== '' && _school !== 'non' && _school !== '' && _year !== 'non' && _year !== '' && _level !== 'non' && _level !== '' && _students !== 'non' && _students !== '' && _module !== 'non' && _module !== '') {
      setAnswer('ok infos');
    } else {
      setAnswer('error infos');
    }

    setInfos({
      name: _name,
      school: _school,
      year: _year,
      level: _level,
      students: _students,
      module: _module,
    });
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: 'red',
    }}>
      <Infos  editInfos={editInfos} infos={infos}></Infos>
      {answer === 'error infos'? <p1 style={{color: 'red'}}>هذه المعلومات خاطئة</p1>: <Calculation infos={infos}></Calculation>}
    </div>
  );
}

export default App;
