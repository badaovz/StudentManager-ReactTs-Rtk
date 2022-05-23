import { createTheme } from '@mui/material';


declare module '@mui/material/styles' {
  interface Palette {
    myColor: Palette['primary'];
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    myColor?: PaletteOptions['primary'];
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    myColor: true;
    neutral: true;
  }
}

export const theme = createTheme({
  palette: {
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    myColor: {
      main: '#66ff22',
    }
  },
});

