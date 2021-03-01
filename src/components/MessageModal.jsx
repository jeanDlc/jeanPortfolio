import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    title:{
        fontSize:'2.5rem'
    },
  }));
const MessageModal = ({ msg , success}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

  return (
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
                <Box display='flex' component='div' marginTop={5} marginBottom={1} alignItems='center' >
                    {success? <CheckBoxIcon fontSize='large' /> :  <ReportProblemIcon color='secondary' />}
                    <p className={classes.title} id="transition-modal-title">{msg}</p>
                    
                </Box>
                <Box component='p' marginY={2}  >
                    - Jean Pierre de la Cruz
                </Box>
                <Button 
                    variant='contained' 
                    color='primary' 
                    fullWidth={true}
                    onClick={handleClose}
                >Ok, I get it</Button>
          </div>
        </Fade>
      </Modal>
  );
}
 
export default MessageModal;