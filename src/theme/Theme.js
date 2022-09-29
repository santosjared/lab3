import{createTheme,CssBaseline,ThemeProvider}from '@material-ui/core';

const theme = createTheme({
    typography:{
        fontFamily:'Ariel'
    },
    overrides:{
        body:{
            fontFamily:['Ariel'],
        }
    },
    palette:{
        colors:{
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff'
        },
        secondary:{
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        }
    }
});

export const Theme=({children})=>(
    <ThemeProvider theme={ theme }>
    <CssBaseline />
    {children}
    </ThemeProvider>
);
//export default Theme;