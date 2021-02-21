import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif'
        ].join(','),
        fontSize:18,
        
    },
    palette:{
        //type:'dark',
        primary: {
            main: '#1c1b1b',
            light:'#fff4f4'
        },
        secondary: {    
            main: '#f06071',
        },
    },
  });

export default theme;