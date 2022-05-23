import { Box, Button, CircularProgress, Paper, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { authAction } from '../authSlice';

export interface  LoginPageProps {
}

const useStyles = makeStyles((theme:Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh'
  },
  box: {
    padding: '24px'
  }
}));

export function LoginPage (props:  LoginPageProps) {
  const classes = useStyles(); 
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.auth.isLoading);
  console.log('isLoading: ', isLoading);

  return (
    <>
      <div className={classes.root}>
        <Paper elevation={3} className={classes.box}>
          <Typography variant='h5' component='h1' mb={2}>
            Student Management
          </Typography>

          <Box>
            <Button 
              variant='contained' 
              color='primary' 
              fullWidth
              onClick={() => dispatch(authAction.loginStart({userName: 'dao', password: '1111'}))}
            >
              {
                isLoading?
                <CircularProgress size={20} color='inherit'/>:
                "Fake Login"
              }
            </Button>
          </Box>
        </Paper>
      </div>
    </>

  );
}
