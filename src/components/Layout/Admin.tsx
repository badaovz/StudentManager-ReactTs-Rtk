import { Box, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Header, Sidebar } from 'components/Common';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useEffect, useState } from 'react';


export interface AppProps {
}

const useStyles = makeStyles((theme:Theme) => ({
  root: {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateColumns: '250px 1fr',
    gridTemplateAreas: '"header header" "sidebar main" "footer footer"',

    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',

  },
  main: {
    gridArea: 'main',
    padding: '16px 24px',
  },
  footer: {
    gridArea: 'footer',
    backgroundColor: '#424040',
    color: '#fff',
    marginTop: '32px'
  }
}))

export function Admin (props: AppProps) {
  const classes = useStyles();


    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        const scrollGoToTop = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
        };

        window.addEventListener("scroll", scrollGoToTop);

        return () => {
            window.removeEventListener("scroll", scrollGoToTop);
        };
    }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Box className={classes.sidebar}>
        <Sidebar />
      </Box>
      <Box className={classes.main}>
        <Outlet />
        {goToTop && (
                <Button
                    variant='outlined'
                    startIcon={<ArrowUpwardIcon />}
                    style={{
                        position: "fixed",
                        bottom: "20px",
                        right: "20px",
                        zIndex: '10'
                    }}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    goToTop
                </Button>
            )}
      </Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </Box>
  );
}
