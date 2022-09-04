import { Paper, TableHead, TableBody } from '@mui/material';
import Table from '@mui/material/Table/Table';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableRow from '@mui/material/TableRow/TableRow';
import React from 'react';

export default function Skills() {
  const skills = [
    {
      name: 'Kunai',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Skill table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {skills.map((skill) => (
            <TableRow key={skill.name}>
              <TableCell>{skill.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
