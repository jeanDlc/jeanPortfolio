import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import Container from '@material-ui/core/Container';
import InfoIcon from '@material-ui/icons/Info';
import ImageJeandlc from "./imageJeandlc";
/**config************************************************************ */
const drawerWidth = 240;
//styles para el componente
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      
    },
    contenedorBarra:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        padding:'.5rem 1rem',
        '& svg':{
            fontSize:'2.5rem',
            color:theme.palette.primary.light
        },
        '& a':{
          color:theme.palette.primary.light
        }
    },
    contenedorImagen:{
      width:'15rem'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      fontSize:'1.5rem',
      '& a':{
        color:theme.palette.primary.main,
        display:'block'
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
      '& svg':{
        fontSize:'2rem'
      }
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
  }));
/**Component********************************************************* */
const Header = ({ siteTitle }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return(
  
    <div className={classes.root}>
    <CssBaseline />
    <AppBar
    position="fixed"
    className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
    })}
    >
        <Toolbar>
            <Container maxWidth="lg">
                <div className={classes.contenedorBarra} >
                    <Link to='/' > 
                        <h1 className={classes.contenedorImagen} >
                        <ImageJeandlc/>
                        </h1>
                    </Link>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                        >
                            <MenuIcon />
                    </IconButton>
                </div>
            </Container>
        </Toolbar>
    </AppBar>
    <div
    className={clsx(classes.content, {
        [classes.contentShift]: open,
    })}
    >
        <div className={classes.drawerHeader} />
    
    </div>
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
          paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      </div>
        <Divider />
        <List>
            <Link to='/'>
              <ListItem button key={1}>
                  <ListItemIcon><HomeIcon /></ListItemIcon>
                  <ListItemText primary={'Home'} />
              </ListItem>
            </Link>
            <Link to='/about-me' >
              <ListItem button key={3}>
                  <ListItemIcon><InfoIcon /></ListItemIcon>
                  <ListItemText primary={'About me'} />
              </ListItem>
            </Link>
            <Link to='/my-work' >
              <ListItem button key={3}>
                  <ListItemIcon><CodeIcon /></ListItemIcon>
                  <ListItemText primary={'My Work'} />
              </ListItem>
            </Link>
            <Link to='/contact' >
              <ListItem button key={2}>
                  <ListItemIcon><MailIcon /></ListItemIcon>
                  <ListItemText primary={'Contact'} />
              </ListItem>
            </Link>
        </List>
    </Drawer>
</div>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
