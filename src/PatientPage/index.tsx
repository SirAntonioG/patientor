import { Box, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import { useStateValue } from '../state';

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();

  const patient = Object.values(patients).find((p) => p.id === id);

  return (
    <div className='App'>
      <Box>
        <Typography
          variant='h3'
          component='h1'
          style={{ marginBottom: '0.5em' }}
        >
          {patient.name}
        </Typography>
      </Box>
    </div>
  );
};

export default PatientPage;
