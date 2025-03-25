import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const templates = [
  {
    id: 1,
    name: 'Professional Classic',
    description: 'A clean and traditional resume template perfect for any industry.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Professional',
    features: ['Clean Design', 'ATS Friendly', 'Professional Layout'],
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
    description: 'A contemporary design with plenty of white space for readability.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Modern',
    features: ['Minimal Design', 'Easy to Read', 'Modern Layout'],
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
    description: 'Stand out with this eye-catching template for creative professionals.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Creative',
    features: ['Bold Design', 'Creative Layout', 'Visual Appeal'],
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
    description: 'A sophisticated template designed for senior professionals and executives.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Executive',
    features: ['Executive Style', 'Professional Look', 'Detailed Sections'],
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
    description: 'Perfect for tech professionals with a modern and sleek design.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Technology',
    features: ['Tech Focus', 'Modern Design', 'Skills Highlight'],
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
    description: 'Ideal for academic professionals and researchers.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
    category: 'Academic',
    features: ['Academic Style', 'Publication Focus', 'Research Emphasis'],
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#2c3e50',
      textColor: '#2c3e50',
      accentColor: '#8e44ad',
      layout: 'academic',
    },
  },
];

function Templates() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  const handleUseTemplate = (templateId) => {
    // Store the selected template ID in localStorage
    localStorage.setItem('selectedTemplate', templateId);
    // Store the template data for preview
    const template = templates.find(t => t.id === templateId);
    localStorage.setItem('templateData', JSON.stringify(template));
    navigate('/create');
  };

  const handlePreviewClick = (template) => {
    setSelectedTemplate(template);
    setCurrentPreviewIndex(templates.findIndex(t => t.id === template.id));
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
    setSelectedTemplate(null);
  };

  const handlePreviousTemplate = () => {
    setCurrentPreviewIndex((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
    setSelectedTemplate(templates[currentPreviewIndex === 0 ? templates.length - 1 : currentPreviewIndex - 1]);
  };

  const handleNextTemplate = () => {
    setCurrentPreviewIndex((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
    setSelectedTemplate(templates[currentPreviewIndex === templates.length - 1 ? 0 : currentPreviewIndex + 1]);
  };

  const renderTemplatePreview = (template) => {
    const { backgroundColor, headerColor, textColor, accentColor, layout } = template.preview;
    
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor,
          color: textColor,
          p: 4,
          borderRadius: 2,
          position: 'relative',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            backgroundColor: headerColor,
            color: 'white',
            p: 3,
            mb: 3,
            borderRadius: 1,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
            John Doe
          </Typography>
          <Typography variant="subtitle1">
            Software Engineer
          </Typography>
        </Box>

        {/* Content */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{
                color: accentColor,
                borderBottom: `2px solid ${accentColor}`,
                pb: 1,
                mb: 2,
              }}
            >
              Contact
            </Typography>
            <Typography>Email: john@example.com</Typography>
            <Typography>Phone: (555) 123-4567</Typography>
            <Typography>Location: New York, NY</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="h6"
              sx={{
                color: accentColor,
                borderBottom: `2px solid ${accentColor}`,
                pb: 1,
                mb: 2,
              }}
            >
              Experience
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              Senior Software Engineer
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
              Tech Company | 2018 - Present
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            textAlign: 'center',
            mb: 2,
            color: '#0e76dd',
            fontWeight: 'bold',
          }}
        >
          Resume Templates
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Choose from our collection of professional resume templates
        </Typography>

        <Grid container spacing={4}>
          {templates.map((template) => (
            <Grid item xs={12} sm={6} md={4} key={template.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={template.image}
                  alt={template.name}
                  sx={{
                    objectFit: 'cover',
                    borderBottom: '2px solid #0e76dd',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ color: '#0e76dd' }}
                  >
                    {template.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {template.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={template.category}
                      color="primary"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                    {template.features.map((feature, index) => (
                      <Chip
                        key={index}
                        label={feature}
                        variant="outlined"
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    startIcon={<PreviewIcon />}
                    variant="outlined"
                    fullWidth
                    sx={{ mr: 1 }}
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    Use Template
                  </Button>
                  <Button
                    startIcon={<DownloadIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: '#0e76dd',
                      '&:hover': {
                        bgcolor: '#0e76dd',
                        opacity: 0.9,
                      },
                    }}
                    onClick={() => handlePreviewClick(template)}
                  >
                    Preview
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Preview Dialog */}
        <Dialog
          open={previewOpen}
          onClose={handleClosePreview}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6">
                {selectedTemplate?.name}
              </Typography>
              <IconButton onClick={handleClosePreview}>
                <CloseIcon />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <Box sx={{ position: 'relative', height: '70vh', overflow: 'auto' }}>
              {selectedTemplate && renderTemplatePreview(selectedTemplate)}
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                <IconButton
                  onClick={handlePreviousTemplate}
                  sx={{
                    bgcolor: 'white',
                    boxShadow: 1,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  <ArrowBackIcon />
                </IconButton>
                <IconButton
                  onClick={handleNextTemplate}
                  sx={{
                    bgcolor: 'white',
                    boxShadow: 1,
                    '&:hover': {
                      bgcolor: 'grey.100',
                    },
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </Stack>
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default Templates; 