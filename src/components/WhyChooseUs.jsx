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
} from '@mui/material';
import Navbar from './Navbar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PeopleIcon from '@mui/icons-material/People';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DevicesIcon from '@mui/icons-material/Devices';

function WhyChooseUs() {
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
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
            Why Choose Us?
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9 }}>
            Discover the advantages of using our resume builder
          </Typography>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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

      {/* CTA Section */}
      <Box sx={{ bgcolor: 'grey.50', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Create Your Professional Resume?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Join thousands of professionals who have already created their resumes
            with us
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="/create"
            sx={{ px: 4 }}
          >
            Get Started Now
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default WhyChooseUs; 