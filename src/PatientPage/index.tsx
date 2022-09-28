import { Box, Typography } from '@material-ui/core';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { useParams } from 'react-router-dom';

import { useStateValue } from '../state';
import { Patient } from '../types';

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();

  const patient = Object.values(patients).find((p: Patient) => p.id === id);

  if (patient === undefined) {
    return (
      <Box>
        <Typography variant='h2' style={{ marginBottom: '0.5em' }}>
          Patient not found
        </Typography>
      </Box>
    );
  }

  return (
    <div className='App'>
      <Box>
        <Typography
          variant='h3'
          component='h2'
          style={{ marginBottom: '0.5em' }}
        >
          {patient.name}{' '}
          {patient.gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
        </Typography>
        <p>
          ssn: {patient.ssn} <br />
          occupation: {patient.occupation}
        </p>
      </Box>
    </div>
  );
};

export default PatientPage;
