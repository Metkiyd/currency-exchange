import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IconButton} from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

const MyModal = (props) => {
  const {title, text, icon, open, setOpen, handleClose} = props

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      {/*<Button onClick={handleOpen}>Open modal</Button>*/}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        {...props}
        open={open}
        // onClose={handleClose}

        // closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        {/*<Fade in={props}>*/}
          <Box sx={style}>

            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              // onClick={handleClose}

              {...props}
              sx={{
                padding: 0,
                float: 'right',
              }}>
                <CloseRoundedIcon/>
            </IconButton>

            {icon}

            <Typography
              id="transition-modal-title"
              variant="h5"
              component="h2"
              sx={{
                mt: 4,
                fontWeight: 600
            }}
            >
              {title}
            </Typography>

            <Typography
              id="transition-modal-description"
              sx={{
                mt: 2,
                fontSize: 14,
                color: '#848484',
            }}
            >
              {text}
            </Typography>

          </Box>
        {/*</Fade>*/}
      </Modal>
    </div>
  );
};

export default MyModal;
