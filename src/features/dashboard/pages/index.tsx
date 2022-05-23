import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { useEffect } from 'react';
import { StatisticItem } from '../components/StatisticItem';
import { StudentTable } from '../components/StudentTable';
import { Widget } from '../components/Widget';
import { dashboardAction } from '../dashboardSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: '8px'
  },
  statisticItem: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '24px'
  },
  loading: {
    position: 'absolute',
    top: '8px',
    width: '100%'
  }
}))

export function DashBoard () {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const loading = useAppSelector(state => state.dashboard.isLoading);
  const statistics = useAppSelector(state => state.dashboard.statistics);
  const highestMarkStudentList = useAppSelector(state => state.dashboard.highestMarkStudentList);
  const lowestMarkStudentList = useAppSelector(state => state.dashboard.lowestMarkStudentList);
  const rankingCityList = useAppSelector(state => state.dashboard.rankingByCity);

  console.log('loading: ', loading);
  console.log('listHigh: ', highestMarkStudentList);
  console.log('rankingCity: ', rankingCityList);

  
  useEffect(() => {
    dispatch(dashboardAction.fetchDataStart())
  }, [dispatch]);
  
  console.log('statistic: ', statistics);
  console.log('ss');
  return (    
    <Box className={classes.root}>
      {loading&&<LinearProgress className={classes.loading}/>}
      {/* students statistics */}
      <Grid container spacing={2} className={classes.statisticItem}>
        <Grid item xs={12} md={6} lg={3} >
          <StatisticItem 
            icon={<MaleIcon fontSize='large' />}
            label='Total Male Students'
            value={statistics.maleCount}
            condition='Male'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem 
            icon={<FemaleIcon fontSize='large'/>}
            label='Total Female Students'
            value={statistics.femaleCount}
            condition='Female'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem    
            icon={<BookmarkAddRoundedIcon fontSize='large'/>}
            label='HighestMark Students '
            value={statistics.highMarkCount}
            condition='Mark >= 8'
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem 
            icon={<BookmarkRemoveRoundedIcon fontSize='large'/>}
            label='LowestMark Students '
            value={statistics.lowMarkCount}
            condition='Mark <= 5'
          />
        </Grid>

      </Grid>
      {/* top mark */}
      <Box mt={4}>
        <Typography variant='h3' fontSize='48px'>Top Statistics Students And Mark</Typography>    
        <Grid container spacing={3} mt={2}>
          <Grid item xs={12} md={6} lg={6}>
            <StudentTable rows={highestMarkStudentList} height='400px'/>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <StudentTable rows={lowestMarkStudentList} height='400px'/>
          </Grid>
        </Grid>
      </Box>
      {/* ranking by city */}
      <Box mt={4}>
        <Typography variant='h3' fontSize='48px'>Ranking By City</Typography>
        <Box mt={2}>
          <Grid container spacing={3}>
            {
              rankingCityList.map( i => (
                <Grid item xs={12} md={6} lg={6} key={i.cityId}>
                  <Widget title={i.cityName}>
                    <StudentTable rows={i.rankList}  height='400px'/>
                  </Widget>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
