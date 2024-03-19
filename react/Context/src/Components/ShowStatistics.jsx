import React from "react";

function ShowStatistics(props) {
    // Get the number of students
    const studentNum = props.combinations.length;
    
    // Get the number of modules for the first student, if any
    const ModuleCount = props.combinations.length > 0 ? props.combinations[0].notes.length : 0;
    console.log(props.combinations);
    
    const showModulesPors = () => {
        let modulesNotes = new Array(ModuleCount).fill(0);
    
        props.combinations.forEach((student) => {
            student.notes.forEach((note, index) => {
                modulesNotes[index] += Number(note);
            });
        });
    
        return (
            <div>
                {modulesNotes.map((totalNote, index) => (
                    <p style={{color: 'black'}} key={index}>
                        {props.moduleArray[index]} : {totalNote / studentNum / 3 * 100}
                    </p>
                ))}
            </div>
        );
    };
    

    return (
        <div>
            <p1 style={{color: 'black'}}>عدد المتعلمين: {studentNum}</p1> 
            <p1 style={{color: 'black'}}>عدد المواد: {ModuleCount}</p1>
            
            <h2 style={{color: 'black'}}>المتعلمون المتمكنون</h2>
            {props.combinations.map((student, studentIndex) =>{
                let i = 0;
                let count = 0;
                while(student.notes.length > i){
                    count = count + Number(student.notes[i]);
                    i++;
                }
                console.log('cout = ' + count);
                console.log('student.notes.length = ' + student.notes.length);
                if(count / student.notes.length > 2.1){
                    return(
                        <div key={studentIndex}>
                            <p style={{color: 'black'}}> {student.name} note : {count}</p>
                            <p style={{color: 'black'}}> ({count / student.notes.length /3 * 100}%)</p>
                        </div>
                    )
                }
            })}
            <h2 style={{color: 'black'}}>المتعلمون في طور التمكن</h2>
            {props.combinations.map((student, studentIndex) =>{
                let i = 0;
                let count = 0;
                while(student.notes.length > i){
                    count = count + Number(student.notes[i]);
                    i++;
                }
                if(count / student.notes.length > 1.2 && count / student.notes.length < 2.1){
                    return(
                        <div key={studentIndex}>
                            <p style={{color: 'black'}}> {student.name}  : {count}</p>
                            <p style={{color: 'black'}}> ({count / student.notes.length /3 * 100}%) tmkn</p>
                        </div>
                    )
                }
            })}
            <h2 style={{color: 'black'}}>المتعلمون الغير المتمكنون</h2>
            {props.combinations.map((student, studentIndex) =>{
                let i = 0;
                let count = 0;
                while(student.notes.length > i){
                    count = count + Number(student.notes[i]);
                    i++;
                }
                if(count / student.notes.length < 1.2){
                    return(
                        <div key={studentIndex}>
                            <p style={{color: 'black'}}> {student.name}  : {count}</p>
                            <p style={{color: 'black'}}> ({count / student.notes.length /3 * 100}%) tmkn</p>
                        </div>
                    )
                }
            })}
            <h2 style={{color: 'black'}}>نسبة التمكن من كل مكون :</h2>
            {
                showModulesPors()
            }
             


        </div>
    );
}

export default ShowStatistics;
