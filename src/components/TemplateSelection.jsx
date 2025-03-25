import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PreviewIcon from '@mui/icons-material/Preview';
import CloseIcon from '@mui/icons-material/Close';

const templates = [
  {
    id: 1,
    name: 'Professional Classic',
    description: 'A clean and traditional resume template perfect for any industry.',
    image: 'https://geeko.netlify.app/img/core-img/cv.png',
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
    preview: {
      backgroundColor: '#ffffff',
      headerColor: '#34495e',
      textColor: '#2c3e50',
      accentColor: '#34495e',
      layout: 'executive',
    },
  },
];

function TemplateSelection() {
  const navigate = useNavigate();
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [previewOpen, setPreviewOpen] = useState(false);

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
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
    setSelectedTemplate(null);
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
          Choose Your Template
        </Typography>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Select a template to start building your professional resume
        </Typography>

        <Grid container spacing={4}>
          {templates.map((template) => (
            <Grid item xs={12} sm={6} md={3} key={template.id}>
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
                    variant="h6"
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
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ mb: 1 }}
                    onClick={() => handleUseTemplate(template.id)}
                  >
                    Use Template
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<PreviewIcon />}
                    onClick={() => handlePreviewClick(template)}
                  >
                    Preview
                  </Button>
                </Box>
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
            <Box sx={{ height: '70vh', overflow: 'auto' }}>
              {selectedTemplate && renderTemplatePreview(selectedTemplate)}
            </Box>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
}

export default TemplateSelection; 