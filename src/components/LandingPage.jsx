import { useEffect, useRef, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Stack,
  TextField,
} from '@mui/material';
import Navbar from './Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DevicesIcon from '@mui/icons-material/Devices';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function LandingPage() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const whyChooseUsRef = useRef(null);
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = [homeRef, aboutRef, whyChooseUsRef, contactRef];
      sections.forEach((ref) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            const sectionId = ref.current.id;
            window.history.replaceState(null, '', `#${sectionId}`);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    enqueueSnackbar('Message sent successfully!', { variant: 'success' });
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const features = [
    {
      icon: <SpeedIcon sx={{ fontSize: 40 }} />,
      title: 'Quick & Easy',
      description:
        'Create your professional resume in minutes with our intuitive interface. No technical skills required.',
      benefits: [
        'Simple step-by-step process',
        'Auto-save functionality',
        'Instant preview',
        'Mobile-friendly interface',
      ],
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40 }} />,
      title: 'Secure & Private',
      description:
        'Your data is safe with us. We never store your personal information and ensure complete privacy.',
      benefits: [
        'Data encryption',
        'No data sharing',
        'Secure storage',
        'Privacy protection',
      ],
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Professional Templates',
      description:
        'Choose from a variety of professionally designed resume templates that stand out to employers.',
      benefits: [
        'Multiple template options',
        'Customizable designs',
        'Industry-specific layouts',
        'Modern aesthetics',
      ],
    },
    {
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      title: 'ATS Friendly',
      description:
        'Our resumes are optimized for Applicant Tracking Systems to increase your chances of getting hired.',
      benefits: [
        'ATS-compatible format',
        'Keyword optimization',
        'Proper formatting',
        'Industry standards',
      ],
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: '24/7 Support',
      description:
        'Get help whenever you need it with our round-the-clock customer support team.',
      benefits: [
        'Live chat support',
        'Email assistance',
        'Video tutorials',
        'FAQ section',
      ],
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40 }} />,
      title: 'Cross-Platform',
      description:
        'Access your resume builder from any device, anywhere, at any time.',
      benefits: [
        'Mobile responsive',
        'Desktop compatible',
        'Cloud storage',
        'Sync across devices',
      ],
    },
  ];

  return (
    <Box>
      <Navbar
        onHomeClick={() => scrollToSection(homeRef)}
        onAboutClick={() => scrollToSection(aboutRef)}
        onWhyChooseUsClick={() => scrollToSection(whyChooseUsRef)}
        onContactClick={() => scrollToSection(contactRef)}
      />

      {/* Hero Section */}
      <Box
        id="home"
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
        }}
      >
        <Container 
          maxWidth="md" 
          sx={{ 
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Create Your Professional Resume
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4, 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Build a stunning resume in minutes with our easy-to-use builder
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/create')}
              sx={{ 
                px: 4, 
                py: 1.5,
                bgcolor: '#0e76dd',
                '&:hover': {
                  bgcolor: '#0e76dd',
                  opacity: 0.9,
                }
              }}
            >
              Get Started Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate('/templates')}
              sx={{ 
                px: 4, 
                py: 1.5,
                borderColor: '#0e76dd',
                color: 'white',
                '&:hover': {
                  borderColor: '#0e76dd',
                  bgcolor: 'rgba(14, 118, 221, 0.04)',
                  color: '#0e76dd',
                }
              }}
            >
              View Templates
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        id="about"
        sx={{
          py: 8,
          px: 4,
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              color: '#0e76dd',
              fontWeight: 'bold',
            }}
          >
            About Us
          </Typography>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  src="https://geeko.netlify.app/img/core-img/banner2.png"
                  alt="About Us"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 20,
                    right: -20,
                    bottom: -20,
                    left: 20,
                    border: '2px solid #0e76dd',
                    borderRadius: 4,
                    zIndex: 1,
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ pl: { md: 4 } }}>
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  sx={{ 
                    color: '#0e76dd',
                    fontWeight: 'bold',
                    mb: 3,
                  }}
                >
                  Our Mission
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                  }}
                >
                  We're dedicated to helping job seekers create professional resumes
                  that stand out to employers. Our platform combines ease of use with
                  powerful features to ensure your resume makes a lasting impression.
                </Typography>
                <Typography 
                  paragraph 
                  sx={{ 
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 4,
                  }}
                >
                  With years of experience in the recruitment industry, we understand
                  what employers are looking for and how to present your skills and
                  experience effectively.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      flex: 1,
                      minWidth: 200,
                      textAlign: 'center',
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      '&:hover': {
                        borderColor: '#0e76dd',
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Typography variant="h3" sx={{ color: '#0e76dd', mb: 1 }}>
                      10K+
                    </Typography>
                    <Typography color="text.secondary">
                      Resumes Created
                    </Typography>
                  </Paper>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2,
                      flex: 1,
                      minWidth: 200,
                      textAlign: 'center',
                      bgcolor: 'white',
                      border: '1px solid',
                      borderColor: 'grey.200',
                      '&:hover': {
                        borderColor: '#0e76dd',
                        transform: 'translateY(-5px)',
                        transition: 'all 0.3s ease-in-out',
                      },
                    }}
                  >
                    <Typography variant="h3" sx={{ color: '#0e76dd', mb: 1 }}>
                      95%
                    </Typography>
                    <Typography color="text.secondary">
                      Success Rate
                    </Typography>
                  </Paper>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Box
        id="why-choose-us"
        sx={{
          py: 8,
          px: 4,
          bgcolor: 'grey.50',
        }}
      >
        <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          // color="text.primary"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#0e76dd' }}
        >
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    height: '100%',
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
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <List>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <ListItem key={benefitIndex}>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={benefit} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Templates Section */}
      <Box
        id="templates"
        sx={{
          py: 8,
          px: 4,
          bgcolor: 'background.paper',
        }}
      >
        {/* ... existing templates content ... */}
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: 8,
          px: 4,
          bgcolor: 'grey.50',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{ 
              textAlign: 'center', 
              mb: 6,
              color: '#0e76dd',
              fontWeight: 'bold',
            }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: 2,
                }}
              >
                <Stack spacing={3}>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#0e76dd' }}>
                      Email
                    </Typography>
                    <Typography color="text.secondary">
                      abc@resumebuilder.com
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#0e76dd' }}>
                      Phone
                    </Typography>
                    <Typography color="text.secondary">
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ color: '#0e76dd' }}>
                      Address
                    </Typography>
                    <Typography color="text.secondary">
                      123 Resume Street
                      <br />
                      New York, 
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.200',
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ color: '#0e76dd' }}>
                  Send us a message
                </Typography>
                <Stack spacing={3}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                  />
                  <TextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ 
                      mt: 2,
                      bgcolor: '#0e76dd',
                      '&:hover': {
                        bgcolor: '#0e76dd',
                        opacity: 0.9,
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default LandingPage; 