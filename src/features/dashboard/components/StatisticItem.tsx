import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import * as React from 'react';

export interface  StatisticItemProps {
    icon: React.ReactElement,
    label: string,
    value: number | string,
    condition?: string

}

const useStyles = makeStyles((theme) => ({ 
  statisticItem: {
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, .2)',
    padding: '16px',
    borderRadius: '5px',
    backgroundColor: '#fcdebd',
    color: '#ad6a22'

  }

}))

export function StatisticItem ({icon, label, value, condition}:  StatisticItemProps) {
    const classes = useStyles();

  return (
    <Box className={classes.statisticItem}>
        <Box width='40px' height='55px' borderRadius='7px' display='flex' alignItems='center' style={{backgroundColor: '#f9f0e5', opacity: '.5'}}>
          {icon}
        </Box>
        <Box ml={2} fontSize={2}  >
            <Typography>
                {label}
            </Typography>
            {
              condition ? 
              <Box display='flex' justifyContent='space-between'>
                <Typography variant='h5'>
                  {condition}
                </Typography>
                <Typography variant='h5'>
                    {value}
                </Typography>
              </Box>:
              <Typography variant='h5'>
                {value}
              </Typography>

            }
        </Box>

    </Box>
  );
}
