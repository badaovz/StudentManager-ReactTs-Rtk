import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';

export interface  WidgetProps {
    title: string,
    children: React.ReactElement 
}

export function Widget ({title, children}:  WidgetProps) {
  return (
    <Paper>
      <Typography variant='button'>{title}</Typography>
      <Box mt={2}>{children}</Box>
    </Paper>
  );
}
