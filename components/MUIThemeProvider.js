import { ThemeProvider , createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#00b100',
    },
    secondary: {
      main: '#0000c7',
    },
    neutral: {
      main: '#fff',
    },
  },
});

const MUIThemeProvider = (props) => {
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default MUIThemeProvider
