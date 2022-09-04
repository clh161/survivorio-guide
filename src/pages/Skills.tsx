import {
  Paper,
  TableHead,
  TableBody,
  Container,
  Grid,
  Radio,
  FormControlLabel,
  RadioGroup,
} from '@mui/material';
import Table from '@mui/material/Table/Table';
import TableCell from '@mui/material/TableCell/TableCell';
import TableContainer from '@mui/material/TableContainer/TableContainer';
import TableRow from '@mui/material/TableRow/TableRow';
import { SKILLS } from '../data/skills';

const LEVELS = [1, 2, 3, 4, 5, 6];

export default function Skills() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <SelectedSkillTable />
        </Grid>
        <Grid item xs={8}>
          <AllSkillTable />
        </Grid>
      </Grid>
    </Container>
  );
}

function SelectedSkillTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Skill table">
        <TableHead>
          <TableRow>
            <TableCell>Skill</TableCell>
            <TableCell>Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {SKILLS.map((skill) => {
            return (
              <TableRow key={skill.name}>
                <TableCell component="th">{skill.name}</TableCell>
                <TableCell component="th">
                  <RadioGroup row defaultValue={0}>
                    {[0, 1, 2, 3, 4, 5, 6].map((level) => {
                      return (
                        <FormControlLabel
                          value="top"
                          control={<Radio />}
                          label={level}
                          labelPlacement="top"
                        />
                      );
                    })}
                  </RadioGroup>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function AllSkillTable() {
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
                    const increase = Math.round(
                      (dmgOfAtk - previousDmgOfAtk) * 100
                    );
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
