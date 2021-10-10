import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HeaderAppBar from './components/header';
import CreateStudent from './components/createStudent/createStudent';
import ShowStudents from './components/showStudents/showStudents';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <HeaderAppBar/>      
      <Box sx={{ flexGrow: 1 }} paddingTop="10px">
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item><ShowStudents/></Item>
          </Grid>
          <Grid item xs={4}>
            <Item><CreateStudent/></Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
