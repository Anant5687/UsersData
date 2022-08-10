import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import style from './Home.module.css'
import RegistrationPage from '../../components/registrationform.jsx/RegistrationPage';

const Home = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={5} className={style.home}>

                    </Grid>
                    <Grid item xs={6} md={7} className={style.content}>
                        <RegistrationPage/>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Home
