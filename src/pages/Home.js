import React from 'react';

import { Grid } from '@mui/material';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Body from '../components/Body';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return(
        <div className="App">
            <Grid container>
            <Grid item xs={12}>
                <Header />
            </Grid>
            <Grid item xs={4}>
                <Sidebar />
            </Grid>
            <Grid item xs={8}>
                <Body />
            </Grid>
            <Grid item xs={12}>
                <Footer />
            </Grid>
            </Grid>
      </div>
    )
}

export default Home