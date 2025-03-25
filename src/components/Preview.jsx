import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemText,
  Chip,
  Alert,
} from '@mui/material';
import html2pdf from 'html2pdf.js';
import { useNavigate } from 'react-router-dom';
import DownloadIcon from '@mui/icons-material/Download';

const templates = [
  {
    id: 1,
    name: 'Professional Classic',
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#0e76dd',
      textColor: '#333333',
      accentColor: '#0e76dd',
      layout: 'classic',
    },
  },
  {
    id: 2,
    name: 'Modern Minimal',
    preview: {
      backgroundColor: '#f8f9fa',
      headerColor: '#2c3e50',
      textColor: '#2c3e50',
      accentColor: '#3498db',
      layout: 'minimal',
    },
  },
  {
    id: 3,
    name: 'Creative Bold',
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#e74c3c',
      textColor: '#2c3e50',
      accentColor: '#e74c3c',
      layout: 'creative',
    },
  },
  {
    id: 4,
    name: 'Executive Pro',
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#34495e',
      textColor: '#2c3e50',
      accentColor: '#34495e',
      layout: 'executive',
    },
  },
  {
    id: 5,
    name: 'Tech Modern',
    preview: {
      backgroundColor: '#1a1a1a',
      headerColor: '#00ff9d',
      textColor: '#ffffff',
      accentColor: '#00ff9d',
      layout: 'tech',
    },
  },
  {
    id: 6,
    name: 'Academic Scholar',
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#2c3e50',
      textColor: '#2c3e50',
      accentColor: '#8e44ad',
      layout: 'academic',
    },
  },
];

function Preview() {
  const navigate = useNavigate();
  const [resumeData, setResumeData] = useState(null);
  const [templateData, setTemplateData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Get resume data from localStorage
      const savedData = localStorage.getItem('resumeData');
      if (savedData) {
        setResumeData(JSON.parse(savedData));
      }

      // Get template data from localStorage
      const savedTemplate = localStorage.getItem('templateData');
      if (savedTemplate) {
        setTemplateData(JSON.parse(savedTemplate));
      }
    } catch (err) {
      setError('Error loading resume data. Please try again.');
      console.error('Error loading data:', err);
    }
  }, []);

  const handleDownload = () => {
    const element = document.getElementById('resume-content');
    const opt = {
      margin: 1,
      filename: `${resumeData?.personalInfo?.name || 'resume'}-resume.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  if (error) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Button
          variant="contained"
          onClick={() => navigate('/templates')}
          sx={{ bgcolor: '#0e76dd' }}
        >
          Select Template
        </Button>
      </Container>
    );
  }

  if (!resumeData || !templateData) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography>No resume data found. Please create a resume first.</Typography>
      </Container>
    );
  }

  const { backgroundColor, headerColor, textColor, accentColor, layout } = templateData.preview;

  return (
    <Box sx={{ py: { xs: 2, sm: 4 }, bgcolor: 'grey.50', position: 'relative', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Paper
          id="resume-content"
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            backgroundColor,
            color: textColor,
            borderRadius: 2,
            mb: { xs: 8, sm: 10 },
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              backgroundColor: headerColor,
              color: 'white',
              p: { xs: 2, sm: 3 },
              mb: { xs: 2, sm: 3 },
              borderRadius: 1,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: { xs: 2, sm: 3 },
            }}
          >
            {resumeData.personalInfo.photo && (
              <Box
                component="img"
                src={resumeData.personalInfo.photo}
                alt="Profile"
                sx={{
                  width: { xs: 100, sm: 120 },
                  height: { xs: 100, sm: 120 },
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '3px solid white',
                }}
              />
            )}
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: { xs: '1.5rem', sm: '2rem' } }}>
                {resumeData.personalInfo.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                {resumeData.personalInfo.email} | {resumeData.personalInfo.phone}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                {resumeData.personalInfo.address}
              </Typography>
            </Box>
          </Box>

          {/* Education Section */}
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h6"
              sx={{
                color: accentColor,
                borderBottom: `2px solid ${accentColor}`,
                pb: 1,
                mb: 2,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Education
            </Typography>
            {resumeData.education.map((edu, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  {edu.degree}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {edu.school} | {edu.year}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Experience Section */}
          <Box sx={{ mb: { xs: 2, sm: 3 } }}>
            <Typography
              variant="h6"
              sx={{
                color: accentColor,
                borderBottom: `2px solid ${accentColor}`,
                pb: 1,
                mb: 2,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Experience
            </Typography>
            {resumeData.experience.map((exp, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                  {exp.position}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {exp.company} | {exp.year}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                  {exp.description}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Skills Section */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: accentColor,
                borderBottom: `2px solid ${accentColor}`,
                pb: 1,
                mb: 2,
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
              }}
            >
              Skills
            </Typography>
            <Grid container spacing={2}>
              {resumeData.skills.map((skill, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Typography variant="body2" sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}>
                    • {skill}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>

        {/* Fixed Download Button */}
        <Box
          sx={{
            position: 'fixed',
            bottom: { xs: 16, sm: 24 },
            right: { xs: 16, sm: 24 },
            zIndex: 1000,
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleDownload}
            className="no-print"
            startIcon={<DownloadIcon />}
            sx={{
              boxShadow: 3,
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 4,
              },
            }}
          >
            Download PDF
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Preview; 