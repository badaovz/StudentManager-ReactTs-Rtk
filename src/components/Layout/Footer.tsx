import { Box, Grid, Link, Typography } from "@mui/material";
import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

type Props = {};

const Footer = (props: Props) => {
    return (
        <>
            <hr style={{margin: '32px 50px', backgroundColor: 'orange'}}/>
            <Grid container textAlign='center'>
                <Grid item xs={12} sm={6} md={4} p={4}>
                    <Box>
                        <Typography variant='h2' fontSize={32}>Students Manager</Typography>
                        <Typography paragraph>
                            manager all students for you!
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} p={4}>
                    <Typography variant='h2' fontSize={32}>About Us</Typography>
                    <Typography paragraph align='justify'>
                        Our networks cover 95% of Tech communities in Vietnam
                        and our clients come from both Vietnam and South East Asia.
                        <br/> 
                        Hotline: <span style={{color: 'orange'}}>028 323 321</span>
                    </Typography>

                </Grid>
                <Grid item xs={12} sm={6} md={4} p={4} >
                    <Typography variant='h2' fontSize={32}>Follow Us</Typography>
                    <Link href="#"><FacebookIcon /></Link>
                    <Link href="#"><LinkedInIcon /></Link>
                    <Link href="#"><TwitterIcon /></Link>

                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
