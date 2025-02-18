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
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'
import { Code2, MessageSquare, Menu, Globe, Megaphone } from 'lucide-react'
import { useLanguage } from './utils/LanguageContext'
import { sendMessage } from './utils/whatsapp'
import { useState } from 'react'

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
})

function App() {
    const { language, setLanguage, t } = useLanguage()

    const [mobileOpen, setMobileOpen] = useState<boolean>(false)

    const services = [
        {
            title: t('customSoftware'),
            description: t('customSoftwareDesc'),
            icon: <Code2 size={40} />,
        },
        {
            title: t('marketing'),
            description: t('marketingDesc'),
            icon: <Megaphone size={40} />,
        },
        {
            title: t('support'),
            description: t('supportDesc'),
            icon: <MessageSquare size={40} />,
        },
    ]

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en')
    }

    const scrollToHelper = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                {/* Navigation */}
                <AppBar position="fixed">
                    <Toolbar>
                        <Code2 size={24} style={{ marginRight: '10px' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Veta Solutions
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    scrollToHelper('home-section')
                                }}
                            >
                                {t('home')}
                            </Button>
                            <Button
                                color="inherit"
                                onClick={() => {
                                    scrollToHelper('services-section')
                                }}
                            >
                                {t('services')}
                            </Button>
                            {/* <Button
                                color="inherit"
                                onClick={() => {
                                    scrollToHelper('about-section')
                                }}
                            >
                                {t('about')}
                            </Button> */}
                            {/* <Button
                                color="inherit"
                                onClick={() => {
                                    scrollToHelper('contact-section')
                                }}
                            >
                                {t('contact')}
                            </Button> */}
                        </Box>
                        <IconButton color="inherit" onClick={toggleLanguage} sx={{ ml: 2 }}>
                            <Globe size={24} />
                            <Typography variant="body2" sx={{ ml: 1 }}>
                                {language.toUpperCase()}
                            </Typography>
                        </IconButton>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton color="inherit" onClick={() => setMobileOpen(!mobileOpen)}>
                                <Menu size={24} />
                            </IconButton>
                        </Box>

                        {/* <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton
                                color="inherit"
                                edge="start"
                                onClick={() => setMobileOpen(!mobileOpen)}
                            >
                                <Menu size={24} />
                            </IconButton>
                        </Box> */}
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="top"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(false)}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    <List
                        sx={{
                            backgroundColor: 'primary.main',
                            color: 'secondary.contrastText',
                        }}
                    >
                        <ListItem
                            component="li"
                            sx={{ justifyContent: 'center', textAlign: 'center' }}
                            onClick={() => {
                                scrollToHelper('home-section')
                                setMobileOpen(false)
                            }}
                        >
                            <ListItemText primary={t('home')} />
                        </ListItem>
                        <ListItem
                            sx={{ justifyContent: 'center', textAlign: 'center' }}
                            onClick={() => {
                                scrollToHelper('services-section')
                                setMobileOpen(false)
                            }}
                        >
                            <ListItemText primary={t('services')} />
                        </ListItem>
                        {/* <ListItem
                            sx={{ justifyContent: 'center', textAlign: 'center' }}
                            onClick={() => {
                                // scrollTo('contact-section')
                                setMobileOpen(false)
                            }}
                        >
                            <ListItemText primary="Contactanos" />
                        </ListItem> */}
                    </List>
                </Drawer>

                {/* Hero Section */}
                <Box
                    id="home-section"
                    sx={{
                        backgroundImage:
                            'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
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
                            {t('heroTitle')}
                        </Typography>
                        <Typography variant="h5" color="white" paragraph>
                            {t('heroSubtitle')}
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ mr: 2 }}
                            onClick={() => {
                                sendMessage(language)
                            }}
                        >
                            {t('getStarted')}
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{ color: 'white', borderColor: 'white' }}
                            onClick={() => {
                                const servicesSection = document.getElementById('services-section')
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({ behavior: 'smooth' })
                                }
                            }}
                        >
                            {t('learnMore')}
                        </Button>
                    </Container>
                </Box>

                {/* Services Section */}
                <Container sx={{ py: 8 }} id="services-section">
                    <Typography variant="h3" component="h2" align="center" gutterBottom>
                        {t('ourServices')}
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" paragraph>
                        {t('servicesSubtitle')}
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
                                        <Box sx={{ mb: 2, color: 'primary.main' }}>
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
                <Box id="contact-section" sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
                    <Container>
                        <Typography variant="h4" align="center" gutterBottom>
                            {t('ctaTitle')}
                        </Typography>
                        <Typography variant="h6" align="center" paragraph>
                            {t('ctaSubtitle')}
                        </Typography>
                        <Box sx={{ textAlign: 'center', mt: 4 }}>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{ color: 'white', borderColor: 'white' }}
                            >
                                {t('contactUs')}
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default App
