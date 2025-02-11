import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from '@mui/material';
import { 
  Code2, 
  Cloud, 
  Shield, 
  Database, 
  Monitor, 
  MessageSquare,
  Menu
} from 'lucide-react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
  },
});

const services = [
  {
    title: 'Custom Software Development',
    description: 'Tailored solutions designed to meet your specific business needs',
    icon: <Code2 size={40} />,
  },
  {
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure for your business',
    icon: <Cloud size={40} />,
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets',
    icon: <Shield size={40} />,
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights',
    icon: <Database size={40} />,
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance for your digital transformation journey',
    icon: <Monitor size={40} />,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance',
    icon: <MessageSquare size={40} />,
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation */}
        <AppBar position="fixed">
          <Toolbar>
            <Code2 size={24} style={{ marginRight: '10px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              TechSolutions Pro
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <Menu size={24} />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.5)',
            },
          }}
        >
          <Container sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              gutterBottom
              sx={{ fontWeight: 'bold' }}
            >
              Innovative IT Solutions
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              Empowering businesses through cutting-edge technology and expert solutions
            </Typography>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Get Started
            </Button>
            <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'white' }}>
              Learn More
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Our Services
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary" paragraph>
            Comprehensive IT solutions tailored to your business needs
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                    <Box sx={{ mb: 2, color: 'primary.main' }}>{service.icon}</Box>
                    <Typography gutterBottom variant="h5" component="h3">
                      {service.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* CTA Section */}
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              Ready to Transform Your Business?
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              Let's discuss how we can help you achieve your technology goals
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{ color: 'white', borderColor: 'white' }}
              >
                Contact Us Today
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;