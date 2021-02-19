import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),
    },
    palette:{
        //type:'dark',
        primary: {
            main: '#1c1b1b',
        },
        secondary: {
            main: '#f06071',
        },
    },
  });

export default theme;