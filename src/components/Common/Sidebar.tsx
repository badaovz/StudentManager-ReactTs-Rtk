import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import { Theme } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        width: '100%',
        maxWidth: '360px',
        backgroundColor: '#fff',
        boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
        height: '100vh',
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        '&.active > li': {
            backgroundColor: '#EBEBEB',
        },
    },
}));

export function Sidebar() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <nav aria-label="main mailbox folders">
                <List>
                    <NavLink to="/admin/dashboard" className={classes.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/admin/students" className={classes.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Students" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/admin/about" className={classes.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InfoIcon />
                                </ListItemIcon>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>

                    <NavLink to="/admin/setting" className={classes.link}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Setting" />
                            </ListItemButton>
                        </ListItem>
                    </NavLink>
                </List>
            </nav>
        </Box>
    );
}
