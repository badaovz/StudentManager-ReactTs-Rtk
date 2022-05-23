import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './CustomTheme';
import SendIcon from '@mui/icons-material/Send';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Box, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';


export default function Palette() {
  const [name, setName] = useState('');
  const [detail, setDetail] = useState('');

  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography>Form TextField</Typography>
        <form noValidate autoComplete='off' onSubmit={(event) => handleSubmit(event)}>
          <Box>
            <TextField
              label='Name'
              variant='standard'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <TextField
              label='Detail'
              variant='standard'
              fullWidth
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              multiline
              rows={2}
            />
          </Box>
          <Button type='submit' color="myColor" variant="contained" startIcon={<SendIcon />}>
            Send
          </Button>

        </form>
        <Button color="neutral" variant="contained" startIcon={<LocalShippingIcon />}>
          neutral
        </Button>
        
      </Container>
    </ThemeProvider>
  );
}