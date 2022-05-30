import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import logoSchool from '../../asset/images/school1.jpg';

const index = () => {
    return (
        <Box>
            <Typography variant="h2" align="center" m={6}>
                School Support
            </Typography>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6} lg={6}>
                    <img
                        src={logoSchool}
                        alt="logoSchool"
                        style={{
                            width: '80%',
                            objectFit: 'cover',
                            overflow: 'hidden',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <Typography paragraph>
                        `Student management` is a system of students management
                        for all popular schools in the world. A product
                        description is the marketing copy that explains what a
                        product is and why it's worth purchasing. The purpose of
                        a product description is to supply customers with
                        important information about the features and benefits of
                        the product so they're compelled to buy.for all popular
                        schools in the world. A product description is the
                        marketing copy that explains what a product is and why
                        it's worth purchasing. The purpose of a product
                        description is to supply customers with important
                        information about the features and benefits of the
                        product so they're compelled to buy. the product so
                        they're compelled to buy.for all popular schools in the
                        world.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default index;
