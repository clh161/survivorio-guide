import { Paper, TableHead, TableBody } from '@mui/material';
import Table from '@mui/material/Table/Table';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableRow from '@mui/material/TableRow/TableRow';
import React from 'react';
import { SKILLS } from '../data/skills';

const LEVELS = [1, 2, 3, 4, 5, 6];

export default function Skills() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Skill table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            {LEVELS.map((level) => {
              return <TableCell>{level}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {SKILLS.map((skill) => (
            <TableRow key={skill.name}>
              <TableCell component="th">{skill.name}</TableCell>
              {skill.variants.map((variant) => {
                const effectDescriptions = [];
                const { dmgOfAtk } = variant.effect;
                if (dmgOfAtk != null) {
                  effectDescriptions.push(`${dmgOfAtk * 100}% Damage`);
                  const previousLevel = skill.variants.find((otherVariant) => {
                    return otherVariant.level === variant.level - 1;
                  });
                  const previousDmgOfAtk = previousLevel?.effect.dmgOfAtk;
                  if (previousDmgOfAtk != null) {
                    const increase =
                      Math.round(
                        ((dmgOfAtk - previousDmgOfAtk) / previousDmgOfAtk) *
                          10000
                      ) / 100;
                    effectDescriptions.push(`+${increase}%`);
                  }
                }

                return (
                  <TableCell>
                    {effectDescriptions.map((effectDescription) => (
                      <div>{effectDescription}</div>
                    ))}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
