import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
} from "@mui/material";
import {
  Code2,
  Cloud,
  Shield,
  Database,
  Monitor,
  MessageSquare,
  Menu,
} from "lucide-react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Arial", sans-serif',
  },
});

const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored solutions designed to meet your specific business needs",
    icon: <Code2 size={40} />,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your business",
    icon: <Cloud size={40} />,
  },
  {
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets",
    icon: <Shield size={40} />,
  },
  {
    title: "Data Analytics",
    description: "Transform your data into actionable insights",
    icon: <Database size={40} />,
  },
  {
    title: "IT Consulting",
    description: "Expert guidance for your digital transformation journey",
    icon: <Monitor size={40} />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance",
    icon: <MessageSquare size={40} />,
  },
];

type Language = "en" | "es";

const translations: Record<
  Language,
  {
    title: string;
    subtitle: string;
    getStarted: string;
    learnMore: string;
    ourServices: string;
    servicesDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    contactUs: string;
  }
> = {
  en: {
    title: "Innovative IT Solutions",
    subtitle:
      "Empowering businesses through cutting-edge technology and expert solutions",
    getStarted: "Get Started",
    learnMore: "Learn More",
    ourServices: "Our Services",
    servicesDescription:
      "Comprehensive IT solutions tailored to your business needs",
    ctaTitle: "Ready to Transform Your Business?",
    ctaDescription:
      "Let's discuss how we can help you achieve your technology goals",
    contactUs: "Contact Us Today",
  },
  es: {
    title: "Soluciones IT Innovadoras",
    subtitle:
      "Empoderando a las empresas a través de tecnología de vanguardia y soluciones expertas",
    getStarted: "Comenzar",
    learnMore: "Aprender Más",
    ourServices: "Nuestros Servicios",
    servicesDescription:
      "Soluciones IT integrales adaptadas a las necesidades de su negocio",
    ctaTitle: "¿Listo para Transformar su Negocio?",
    ctaDescription:
      "Hablemos de cómo podemos ayudarle a alcanzar sus objetivos tecnológicos",
    contactUs: "Contáctenos Hoy",
  },
};

function App() {
  const [language, setLanguage] = useState<Language>("en");

  const handleLanguageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLanguage(event.target.value as Language);
  };

  const t = translations[language];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        {/* Navigation */}
        <AppBar position="fixed">
          <Toolbar>
            <Code2 size={24} style={{ marginRight: "10px" }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Veta Solutions
            </Typography>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button color="inherit">Home</Button>
              <Button color="inherit">Services</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </Box>
            <Select
              value={language}
              onChange={handleLanguageChange}
              sx={{ color: "white", ml: 2 }}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="es">Español</MenuItem>
            </Select>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <Menu size={24} />
            </Box>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <Container sx={{ position: "relative", zIndex: 1 }}>
            <Typography
              variant="h2"
              component="h1"
              color="white"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              {t.title}
            </Typography>
            <Typography variant="h5" color="white" paragraph>
              {t.subtitle}
            </Typography>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              {t.getStarted}
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: "white", borderColor: "white" }}
            >
              {t.learnMore}
            </Button>
          </Container>
        </Box>

        {/* Services Section */}
        <Container sx={{ py: 8 }}>
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            {t.ourServices}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            {t.servicesDescription}
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                    <Box sx={{ mb: 2, color: "primary.main" }}>
                      {service.icon}
                    </Box>
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
        <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
          <Container>
            <Typography variant="h4" align="center" gutterBottom>
              {t.ctaTitle}
            </Typography>
            <Typography variant="h6" align="center" paragraph>
              {t.ctaDescription}
            </Typography>
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{ color: "white", borderColor: "white" }}
              >
                {t.contactUs}
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
