import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Switch,
    TextField,
    Typography,
} from '@mui/material';
import settingAvatar from '../../asset/images/settingAvatar.jpg';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import AndroidIcon from '@mui/icons-material/Android';
import AddBoxIcon from '@mui/icons-material/AddBox';

const index = () => {
    const arrConnects = [
        {
            name: 'Github',
            icon: <GitHubIcon fontSize="large" />,
            text: 'Link pull requests and automate workflows.',

            isCheck: true,
        },
        {
            name: 'Linked',
            icon: <LinkedInIcon fontSize="large" color="primary" />,
            text: 'Link pull requests and automate workflows.',
            isCheck: true,
        },
        {
            name: 'Mail',
            icon: <AttachEmailIcon fontSize="large" color="error" />,
            text: 'Link pull requests and automate workflows.',
            isCheck: false,
        },
        {
            name: 'App',
            icon: <AndroidIcon fontSize="large" color="success" />,
            text: 'Link pull requests and automate workflows.',
            isCheck: true,
        },
        {
            name: 'Other',
            icon: <AddBoxIcon fontSize="large" color="info" />,
            text: 'Link pull requests and automate workflows.',
            isCheck: false,
        },
    ];
    return (
        <Box mt={1}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={4}>
                    <img src={settingAvatar} alt="settingAvatar" />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h2" fontSize={40}>
                        We've just release a new update!
                    </Typography>
                    <Typography paragraph>
                        Check out the all new dashboard view. Pages and now load
                        faster.
                    </Typography>
                    <Box>
                        <Button
                            variant="outlined"
                            color="info"
                            sx={{ marginRight: '16px' }}
                        >
                            Dismiss
                        </Button>
                        <Button variant="outlined" color="info">
                            ChangeLog
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center"
                mt={3}
            >
                <Grid item xs={12} md={8} lg={8}>
                    <Typography variant="h2" fontSize={40}>
                        Connected apps
                    </Typography>
                    <Typography paragraph>
                        SupperChange your workflow and connect to the tool you
                        use everyday.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4} lg={4} alignItems="flex-end">
                    <TextField
                        sx={{
                            width: '80%',
                        }}
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Grid>
            </Grid>
            {arrConnects.map((connect, index) => (
                <Box
                    display="flex"
                    justifyContent="space-between"
                    mb={3}
                    key={index}
                >
                    <Box display="flex" alignItems="center">
                        {connect.icon}
                        <Box ml={2}>
                            <Typography variant="h2" fontSize="24px">
                                {connect.name}
                            </Typography>
                            <Typography
                                paragraph
                                sx={
                                    connect.isCheck
                                        ? { marginBottom: 0, color: '#0288D1' }
                                        : { marginBottom: 0 }
                                }
                            >
                                {connect.text}
                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography
                            paragraph
                            sx={{ marginBottom: 0, cursor: 'pointer' }}
                        >
                            Learn more
                        </Typography>
                        <Switch defaultChecked={connect.isCheck} />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default index;
