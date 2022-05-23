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

const useStyles = makeStyles((theme:Theme) => ({
    root: {
      width: '100%',
      maxWidth: '360px',
      backgroundColor: '#fff'
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
        '&.active > li': {
          backgroundColor: '#EBEBEB',
        },
    }
}))

export  function Sidebar() {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <nav aria-label="main mailbox folders">
        <List>
          <NavLink to='/admin/dashboard' className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </NavLink>

          <NavLink to='/admin/students' className={classes.link}>
            <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                  <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Students" />
              </ListItemButton>
            </ListItem>
          </NavLink>

        </List>
      </nav>
    </div>
  );
}
