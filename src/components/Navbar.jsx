import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Why Choose Us', path: '#why-choose-us' },
  { name: 'Templates', path: '#templates' },
  { name: 'Contact', path: '#contact' }
];

function Navbar({ onHomeClick, onAboutClick, onWhyChooseUsClick, onContactClick }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (path) => {
    setAnchorElNav(null);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigation = (path) => {
    if (path.startsWith('#')) {
      const section = path.substring(1);
      switch (section) {
        case 'about':
          onAboutClick();
          break;
        case 'why-choose-us':
          onWhyChooseUsClick();
          break;
        case 'contact':
          onContactClick();
          break;
        default:
          break;
      }
    } else {
      navigate(path);
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Left */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: '#0e76dd',
              textDecoration: 'none',
            }}
          >
            Resume Builder
          </Typography>

          {/* Mobile Menu */}
          {isMobile && (
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{ color: 'grey.700' }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem 
                    key={page.name} 
                    onClick={() => handleCloseNavMenu(page.path)}
                    sx={{ color: 'grey.700' }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Mobile Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: '#0e76dd',
              textDecoration: 'none',
            }}
          >
            Resume Builder
          </Typography>

          {/* Desktop Navigation - Centered */}
          {!isMobile && (
            <Box 
              sx={{ 
                flexGrow: 1, 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleCloseNavMenu(page.path)}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: 'grey.700',
                    display: 'block',
                    '&:hover': {
                      color: '#0e76dd',
                    },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          )}

          {/* User Menu - Right */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="User" src="/static/images/avatar/2.jpg" /> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{ color: 'grey.700' }}>Profile</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" sx={{ color: 'grey.700' }}>My Account</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 