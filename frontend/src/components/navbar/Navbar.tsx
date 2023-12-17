import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Navbar: React.FC = () =>{
    

    return (
        <AppBar position="static" sx={{ backgroundColor:"#000029",}}>
            <Container maxWidth="xl" sx={{
                width:"80vw",
                margin:"0 auto",
                
            }}>
                <Toolbar sx={{
                    textAlign: "center", margin: "0 40%",
                }}>
                    <img
                        src="/logos/devlogo.png"
                        alt="Logo"
                        style={{
                            height: '80px', // or the size you want
                            width: 'auto',
                            marginRight: '1rem',
                            
                        }}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        DevRope
                    </Typography>

                    
                    
                    

                    
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
