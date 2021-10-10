import React, {useEffect, useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';

export default function ShowStudents() {
    const [studentsList, setStudentList] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:4000/students/').then( (fetchedList) => {
            setStudentList(fetchedList.data);
        })
    }, []);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:4000/students/${id}`).then( () => {
          window.location.reload(false);
        })
      }

    return (
        <>
        <h1>Show Student Data</h1>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell align="right">Student Name</TableCell>
                <TableCell align="right">Grade</TableCell>
                <TableCell align="right">Section</TableCell>
                <TableCell align="right">Delete</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {studentsList.map((student, key) => (
                <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {student.stuID}
                </TableCell>
                <TableCell align="right">{student.StudentName}</TableCell>
                <TableCell align="right">{student.grade}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right">
                    <IconButton aria-label="delete" size="small" onClick={() => deleteStudent(student._id)}>
                    <DeleteIcon fontSize="small"/>
                    </IconButton>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    );
}