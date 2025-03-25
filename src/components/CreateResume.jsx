import { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import { Add as AddIcon, Delete as DeleteIcon, PhotoCamera } from '@mui/icons-material';
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
    education: [{ school: '', degree: '', year: '' }],
    experience: [{ company: '', position: '', duration: '', description: '' }],
    skills: [''],
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [name]: value,
      },
    });
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          personalInfo: {
            ...formData.personalInfo,
            photo: reader.result,
          },
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: value,
    };
    setFormData({ ...formData, education: newEducation });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', degree: '', year: '' }],
    });
  };

  const removeEducation = (index) => {
    const newEducation = formData.education.filter((_, i) => i !== index);
    setFormData({ ...formData, education: newEducation });
  };

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...formData.experience];
    newExperience[index] = {
      ...newExperience[index],
      [field]: value,
    };
    setFormData({ ...formData, experience: newExperience });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { company: '', position: '', duration: '', description: '' },
      ],
    });
  };

  const removeExperience = (index) => {
    const newExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({ ...formData, experience: newExperience });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, ''],
    });
  };

  const removeSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Save form data to localStorage
      localStorage.setItem('resumeData', JSON.stringify(formData));
      
      // Get the selected template or use a default one
      const savedTemplate = localStorage.getItem('templateData');
      if (!savedTemplate) {
        // If no template is selected, use the first template as default
        const defaultTemplate = {
          id: 1,
          name: 'Professional Classic',
          preview: {
            backgroundColor: '#ffffff',
            headerColor: '#0e76dd',
            textColor: '#333333',
            accentColor: '#0e76dd',
            layout: 'classic',
          },
        };
        localStorage.setItem('templateData', JSON.stringify(defaultTemplate));
      }
      
      // Navigate to preview page
      navigate('/preview');
    } catch (error) {
      console.error('Error saving resume data:', error);
      // You might want to show an error message to the user here
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
        <Grid container spacing={2} alignItems="center" sx={{ mb: { xs: 2, sm: 4 } }}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}>
              Create Your Resume
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Paper
                elevation={2}
                sx={{
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
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
                  <PhotoCamera sx={{ fontSize: { xs: 30, sm: 40 }, color: 'grey.500' }} />
                )}
              </Paper>
              <Button
                variant="outlined"
                component="label"
                startIcon={<PhotoCamera />}
                size="small"
                sx={{ width: '100%', maxWidth: { xs: 100, sm: 120 } }}
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

        <form onSubmit={handleSubmit}>
          {/* Personal Information */}
          <Typography variant="h6" gutterBottom sx={{ mt: { xs: 2, sm: 3 } }}>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.personalInfo.name}
                onChange={handlePersonalInfoChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.personalInfo.email}
                onChange={handlePersonalInfoChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.personalInfo.phone}
                onChange={handlePersonalInfoChange}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.personalInfo.address}
                onChange={handlePersonalInfoChange}
              />
            </Grid>
          </Grid>

          {/* Education */}
          <Typography variant="h6" gutterBottom sx={{ mt: { xs: 2, sm: 3 } }}>
            Education
          </Typography>
          {formData.education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="School"
                    value={edu.school}
                    onChange={(e) =>
                      handleEducationChange(index, 'school', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, 'degree', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, 'year', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <IconButton
                    color="error"
                    onClick={() => removeEducation(index)}
                    disabled={formData.education.length === 1}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={addEducation}
            sx={{ mb: 2 }}
            fullWidth
          >
            Add Education
          </Button>

          {/* Experience */}
          <Typography variant="h6" gutterBottom sx={{ mt: { xs: 2, sm: 3 } }}>
            Experience
          </Typography>
          {formData.experience.map((exp, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Company"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, 'company', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Position"
                    value={exp.position}
                    onChange={(e) =>
                      handleExperienceChange(index, 'position', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label="Duration"
                    value={exp.duration}
                    onChange={(e) =>
                      handleExperienceChange(index, 'duration', e.target.value)
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <IconButton
                    color="error"
                    onClick={() => removeExperience(index)}
                    disabled={formData.experience.length === 1}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={2}
                    label="Description"
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(index, 'description', e.target.value)
                    }
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={addExperience}
            sx={{ mb: 2 }}
            fullWidth
          >
            Add Experience
          </Button>

          {/* Skills */}
          <Typography variant="h6" gutterBottom sx={{ mt: { xs: 2, sm: 3 } }}>
            Skills
          </Typography>
          {formData.skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={11}>
                  <TextField
                    fullWidth
                    label={`Skill ${index + 1}`}
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={1}>
                  <IconButton
                    color="error"
                    onClick={() => removeSkill(index)}
                    disabled={formData.skills.length === 1}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          ))}
          <Button
            startIcon={<AddIcon />}
            onClick={addSkill}
            sx={{ mb: 2 }}
            fullWidth
          >
            Add Skill
          </Button>

          {/* Submit Button */}
          <Box sx={{ mt: { xs: 3, sm: 4 }, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              fullWidth
              sx={{ maxWidth: { xs: '100%', sm: 'auto' } }}
            >
              Preview Resume
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default ResumeForm; 