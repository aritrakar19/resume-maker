import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Paper,
  Stack,
  Divider,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';

function ResumeForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      photo: null,
    },
    education: [{ degree: '', school: '', year: '' }],
    experience: [{ position: '', company: '', year: '', description: '' }],
    skills: [''],
  });

  useEffect(() => {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (section, index, field, value) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (section === 'personalInfo') {
        newData.personalInfo[field] = value;
      } else if (section === 'skills') {
        newData.skills[index] = value;
      } else {
        newData[section][index][field] = value;
      }
      return newData;
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            photo: reader.result,
          },
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addItem = (section) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (section === 'education') {
        newData.education.push({ degree: '', school: '', year: '' });
      } else if (section === 'experience') {
        newData.experience.push({ position: '', company: '', year: '', description: '' });
      } else if (section === 'skills') {
        newData.skills.push('');
      }
      return newData;
    });
  };

  const removeItem = (section, index) => {
    setFormData((prev) => {
      const newData = { ...prev };
      if (section === 'education') {
        newData.education = newData.education.filter((_, i) => i !== index);
      } else if (section === 'experience') {
        newData.experience = newData.experience.filter((_, i) => i !== index);
      } else if (section === 'skills') {
        newData.skills = newData.skills.filter((_, i) => i !== index);
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resumeData', JSON.stringify(formData));
    navigate('/preview');
  };

  return (
    <Box sx={{ py: 4, bgcolor: 'grey.50' }}>
      <Container maxWidth="md">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ mb: 4, color: '#0e76dd', fontWeight: 'bold' }}>
            Create Your Resume
          </Typography>

          <form onSubmit={handleSubmit}>
            {/* Personal Information Section */}
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" sx={{ mb: 2, color: '#0e76dd' }}>
                Personal Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    value={formData.personalInfo.name}
                    onChange={(e) => handleChange('personalInfo', null, 'name', e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={formData.personalInfo.email}
                    onChange={(e) => handleChange('personalInfo', null, 'email', e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Phone"
                    value={formData.personalInfo.phone}
                    onChange={(e) => handleChange('personalInfo', null, 'phone', e.target.value)}
                    sx={{ mb: 2 }}
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    value={formData.personalInfo.address}
                    onChange={(e) => handleChange('personalInfo', null, 'address', e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Paper
                      elevation={2}
                      sx={{
                        width: 200,
                        height: 200,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                        bgcolor: 'grey.100',
                      }}
                    >
                      {formData.personalInfo.photo ? (
                        <Box
                          component="img"
                          src={formData.personalInfo.photo}
                          alt="Profile"
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      ) : (
                        <PhotoCamera sx={{ fontSize: 60, color: 'grey.500' }} />
                      )}
                    </Paper>
                    <Button
                      variant="outlined"
                      component="label"
                      startIcon={<PhotoCamera />}
                      sx={{ width: '100%' }}
                    >
                      Upload Photo
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handlePhotoUpload}
                      />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Rest of the form remains the same */}
            // ... existing code ...
          </form>
        </Paper>
      </Container>
    </Box>
  );
}

export default ResumeForm; 