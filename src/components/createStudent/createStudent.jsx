import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateStudent() {
    
    const [student, setStudents] = useState({
        stuID: 0,
        StudentName: '',
        grade: '',
        section: '',
    });

    const saveStudent = () => {
        console.log(student);
        axios.post('http://localhost:4000/students/add', student).then(() => {
            window.location.reload(false);
        }).catch(err => {
            alert(err.message);
        })
    }
  
    return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Student Details</h1>

      <TextField id="outlined-basic" label="Student ID" variant="outlined" value = {student.stuID}
      onChange = {(event) => {setStudents({...student, stuID: event.target.value})}} />

      <TextField id="outlined-basic" label="Student Name" variant="outlined" value = {student.StudentName}
      onChange = {(event) => {setStudents({...student, StudentName: event.target.value})}} />

      <TextField id="outlined-basic" label="Grade" variant="outlined" value = {student.grade}
      onChange = {(event) => {setStudents({...student, grade: event.target.value})}} />

      <TextField id="outlined-basic" label="Section" variant="outlined" value = {student.section} 
      onChange = {(event) => {setStudents({...student, section: event.target.value})}} />
      
      <Button variant="contained" color="primary" onClick = {saveStudent}>
        Create
      </Button>
    </Box>
  );
}