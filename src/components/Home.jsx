import { Box, Button, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Quick & Easy',
      description: 'Create your professional resume in minutes with our intuitive interface.',
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure & Private',
      description: 'Your data is safe with us. We never store your personal information.',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Professional Templates',
      description: 'Choose from a variety of professionally designed resume templates.',
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'ATS Friendly',
      description: 'Our resumes are optimized for Applicant Tracking Systems.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Resumes Created' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Templates' },
    { number: '24/7', label: 'Support' },
  ];

  return (
    <Box>
      <Navbar />
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          pt: { xs: 15, md: 20 },
          pb: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Create Your Professional Resume
          </Typography>
          <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
            Build a stunning resume in minutes with our easy-to-use resume builder
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
            }}
            onClick={() => navigate('/create')}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          textAlign="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Why Choose Our Resume Builder?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  '&:hover': {
                    borderColor: 'primary.main',
                  },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    component="div"
                    color="primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Create Your Resume?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Join thousands of professionals who have created their resumes with us
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate('/create')}
        >
          Start Building Your Resume
        </Button>
      </Container>
    </Box>
  );
  
}

export default Home; 