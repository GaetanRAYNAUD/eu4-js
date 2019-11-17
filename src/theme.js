import { createMuiTheme } from '@material-ui/core';

import { breakpoints, colors } from 'assets/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: breakpoints.xs,
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: breakpoints.xl
    }
  },
  palette: {
    primary: {
      main: colors.blue
    },
    secondary: {
      main: colors.white
    },
    tonalOffset: 0.05,
    action: {}
  },
  typography: {
    fontFamily: [
      "-apple-system",
      '"Segoe UI"',
      "Roboto",
      "Arial",
      "sans-serif"
    ].join(",")
  },
  overrides: {
    MuiButton: {
      root: {
        boxShadow: "none !important"
      },
      contained: {
        boxShadow: "none"
      },
      containedPrimary: {
        color: `${ colors.darkBlue }`
      }
    }
  }
});

export default theme
