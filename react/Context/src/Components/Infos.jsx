import React, { useState } from "react";
import styles from './infos.module.css'

function Infos(props) {
  let name = props.infos.name;
  let school = props.infos.school;
  let year = props.infos.year;
  let level = props.infos.level;
  let students = props.infos.students;
  let module = props.infos.module;
  let infos = props.infos.infos;

  return (
    <div className={styles.info_container}>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>الاسم</label>
        <input type="text" onChange={(event) => name = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />
      </div>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>مدرسة</label>
        <input type="text" onChange={(event) => school = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />
      </div>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>سنة</label>
        <input type="text" onChange={(event) => year = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />
      </div>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>مستوى</label>
        <input type="text" onChange={(event) => level = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />
      </div>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>طلاب</label>
        <input type="text" onChange={(event) => students = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />
      </div>
      <div className={styles.imput_container}>
        <label style={{ marginbuttom: '10px', padding: '5px', color: 'black' }}>الوحدات</label>
        <input type="text" onChange={(event) => module = event.target.value} style={{ marginbuttom: '10px', padding: '5px' }} />

      </div>
      <button type="submit" onClick={() => props.editInfos(name, school, year, level, students, module)}>إرسال</button>
    </div>
  );
}

export default Infos;
