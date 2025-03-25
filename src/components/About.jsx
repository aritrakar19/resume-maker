import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

function About() {
  return (
    <Box sx={{ pt: 8, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          About Us
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          We are dedicated to helping you create professional resumes that stand out
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '2px solid #0e76dd',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: '#0e76dd' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                Our mission is to empower job seekers with professional resume-building tools
                that help them showcase their skills and experience effectively.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                border: '2px solid #0e76dd',
                borderRadius: '10px',
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ color: '#0e76dd' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                We envision a world where everyone has access to professional resume-building
                tools that help them achieve their career goals.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default About; 