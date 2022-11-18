import React from 'react';
import BG from '../images/background.png'
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring/web.cjs';
import TextField from '@mui/material/TextField';


    const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
          {children}
        </animated.div>
      );
    });

    Fade.propTypes = {
        children: PropTypes.element,
        in: PropTypes.bool.isRequired,
        onEnter: PropTypes.func,
        onExited: PropTypes.func,
      };
      
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      };



const HomePage = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


  return (
    <>
    {/* //header  */}
        <div className='header'>
            <div >
                <img className="bg" src={BG} alt="error(" />
            </div>  
            <div className="header_text">
                <div className="header_box">
                    <h1>STROY LEVEL</h1>
                    <div className='line'></div>
                    <ul className="header_desc">
                        <li>Своё производство</li>
                        <li>Международный опыт</li>
                        <li>Сотрудничесво с дизайнерами</li>
                    </ul>
                    <Button onClick={handleOpen} className='header_btn' variant='contained' style={{background: '#ff6700'}}>Заказать замер</Button>
                </div>
            </div>
        </div>
        {/* //modal  */}
        <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div style={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Оформить замер
            </Typography>
            <Typography id="spring-modal-description" sx={{ mt: 2, mb: 2 }}>
            <TextField id="standard-basic" size='small' label="Имя" variant="outlined" />
            </Typography>
            <TextField id="standard-basic" size='small' label="Номер What's App" variant="outlined" />
            <Button variant='contained' className="modal_btn" >Отправить заявку</Button>
          </Box>
          </div>
        </Fade>
      </Modal>
    </div>
    </>
  )
}

export default HomePage