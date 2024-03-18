import React, { FC } from 'react';
import Link from 'next/link';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const Contacts: FC = () => {
  return (
    <Container>
      <Link href={'/'}>
        <ArrowBack style={{ marginTop: 24 }} />
      </Link>
      <Typography style={{ marginTop: 24 }} variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Contact Information</Typography>
          <Typography>Email: archiline.ab@gmail.com</Typography>
          <Typography>Phone: +38 098 653 8227</Typography>
          <Typography>
            Address: 57 Poltavska St, Office 97, Irpin, Kiev Oblast, Ukraine{' '}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form noValidate autoComplete="off">
            <TextField id="name" label="Name" fullWidth margin="normal" />
            <TextField id="email" label="Email" fullWidth margin="normal" />
            <TextField
              id="message"
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" fullWidth>
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contacts;
