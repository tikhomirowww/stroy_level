import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';


// mui card 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Loft from '../images/loft.jpg'
import Kamin from '../images/kamin.jpg'
import Potolok from '../images/potolok.jpg'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

// mui speed dial
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';


const actions = [
  { icon: <EmailIcon />, name: 'Email', path: "mailto: stroylevel.kg@gmail.com" },
  { icon: <InstagramIcon />, name: 'Instagram', path: 'https://www.instagram.com/stroy_level.kg/' },
];



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
        bgcolor: 'black',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      };

        const theme = createTheme({
            palette: {
            primary: {
                main: '#ff6700',
            },
            secondary: {
                main: '#ff6700',
            },
            },
        });

const HomePage = () => {
  // modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    // select 
    const [type, setType] = useState('');

    const handleChange = (event) => {
      setType(event.target.value);
    };
  

    const navigate = useNavigate();

    // const API = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5mD7e4ZGlBU4nfSObUR8YY0EyhoPir5AYprC2AKOP6foubw/formResponse'
    const API = '#';

    async function createOrder(newOrder){
        console.log(newOrder)
        try{
            const res = await axios.post(`${API}`, newOrder);
            console.log(res);
        } catch(err){
            console.log(err);
        }
    }

    const sendData = (name, number, type) => {
        let newOrder = new FormData();
        newOrder.append("Имя", name);
        newOrder.append("Номер", number);
        newOrder.append("Изделие", type);
        // let newOrder = {
        //     name,
        //     number
        // }
        createOrder(newOrder);
        handleClose()
        setName('');
        setType('');
        setNumber('');
    }
    

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
                    <div className="header_desc">
                        Доверьте ваш интерьер профессионалам своего дела! 
                    </div>
                    <Button onClick={handleOpen} className='header_btn' variant='contained' style={{background: '#ff6700'}}>Заказать замер</Button>
                </div>
            </div>
        </div>
        {/* //modal  */}
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
          <Box className='modal_form' sx={style}>
            <Typography id="spring-modal-title" variant="h6" component="h2">
              Оформить замер
            </Typography>
            {/* <form target='_blank' action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSf5mD7e4ZGlBU4nfSObUR8YY0EyhoPir5AYprC2AKOP6foubw/formResponse'  style={{display: 'flex', flexDirection: 'column'}}>
            <Typography id="spring-modal-description" sx={{ mt: 2, mb: 2 }}>
            <input onChange={(e) => setName(e.target.value)} value={name} name='entry.428995247' id="standard-basic" size='small' label="Имя" variant="outlined" />
            </Typography>
            <input onChange={(e) => setNumber(e.target.value)} value={number} name='entry.1599083215' id="standard-basic" size='small' label="Номер What's App" variant="outlined" />
            <button onClick={() => sendData(name, number)} className="modal_btn" >Отправить заявку</button>
            </form> */}
            <ThemeProvider theme={theme}>
                <form  style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e) => e.preventDefault()}>
            <Typography id="spring-modal-description" sx={{ mt: 2, mb: 2 }}>
            <TextField color='warning' sx={{color: 'red', fill: 'red', borderBlockColor: 'red'}} onChange={(e) => setName(e.target.value)} value={name} name='entry.428995247' id="standard-basic" size='small' label="Имя" variant="outlined" />
            </Typography>
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Изделие</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Изделие"
          onChange={handleChange}
          size='small'
          sx={{mb: 2}}
        >
          <MenuItem value={'Лофт перегородка'}>Лофт перегородка</MenuItem>
          <MenuItem value={'Душевая'}>Душевая</MenuItem>
          <MenuItem value={'Биокамин'}>Биокамин</MenuItem>
          <MenuItem value={'Потолок'}>Потолок</MenuItem>
        </Select>
      </FormControl>
            <TextField sx={{color: 'red'}} onChange={(e) => setNumber(e.target.value)} value={number} name='entry.1599083215' id="standard-basic" size='small' label="Номер What's App" variant="outlined" />
            <Button onClick={() => sendData(name, number, type)} className="modal_btn" >Отправить заявку</Button>
            </form>
            </ThemeProvider>
          </Box>
          </div>
        </Fade>
      </Modal>
      {/* about  */}
      <div className="about">
        <div className="about_title">Наши услуги</div>
        <div className="about_bg">
          <img src="https://bigfoto.name/uploads/posts/2022-02/1645948763_2-bigfoto-name-p-lestnitsa-loft-fon-dlya-shopa-v-interere-4.jpg" alt="error" />
          {/* cards  */}
          <div className="about_content">
          <Card sx={{ maxWidth: 345 }} 
          id="product_Card"
          onClick={() => navigate('/loft')}
          >
      <CardActionArea>
        <CardMedia
          className='card_img'
          component="img"
          height="140"
          image={Loft}
          alt="душевые"
        />
        <CardContent>
          <Typography className='card_h5' gutterBottom variant="h5" component="div">
            Лофт перегородки
          </Typography>
          <Typography className="card_desc" variant="body2" color="text.secondary">
           Стеклянные перегородки в металлическом профиле успешно применяются при офрмлении помещений в стиле ЛОФТ.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} 
    id="shower_card"
    onClick={() => navigate('/shower')}
    >
      <CardActionArea>
        <CardMedia
          className='card_img'
          component="img"
          height="140"
          image="https://niagara-shop.ru/upload/resize_cache/iblock/a0a/220_200_1/ghqdlhy7h3v43atgrq6lnowhj8miz4ny.jpeg"
          alt="душевые"
        />
        <CardContent>
          <Typography className='card_h5' gutterBottom variant="h5" component="div">
            Душевые перегородки
          </Typography>
          <Typography className="card_desc" variant="body2" color="text.secondary">
          Душевые перегородки из стекла очень популярны в современных интерьерах ванных комнат.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} 
    id="product_Card"
    onClick={() => navigate('/kaminy')}
    >
      <CardActionArea>
        <CardMedia
          className='card_img' 
          component="img"
          height="140"
          image={Kamin}
          alt="green iguana"
        />
        <CardContent>
          <Typography className='card_h5' gutterBottom variant="h5" component="div">
            Биокамины
          </Typography>
          <Typography className="card_desc" variant="body2" color="text.secondary">
          Биокамин — это современное устройство с живым пламенем, не нуждающееся в дымовой вентиляции и не предполагающее использования деревянных поленьев.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} 
    id="product_Card"
    onClick={() => navigate('/potolki')}
    >
      <CardActionArea>
        <CardMedia 
          className='card_img'
          component="img"
          height="140"
          image={Potolok}
          alt="green iguana"
        />
        <CardContent>
          <Typography className='card_h5' gutterBottom variant="h5" component="div">
            Потолки
          </Typography>
          <Typography className="card_desc" variant="body2" color="text.secondary">
            Подвесные реечные потолки и грильято открыают новую перспективу в архитектуре подвесных потолков.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </div>
      </div>
      <div className="why">
        <div className="why_title">Почему мы?</div>
        <div className="why_content">
          <div className="icons_box">
              <div className="icon_container">
                <div className="why_icon">
                  <img width="100" height="100" src="https://cdn.onlinewebfonts.com/svg/img_515351.png" alt="error" />
                </div>
                <h2>Международный опыт</h2>
              </div>
              <div className="icon_container">
                <div className="why_icon">
                  <img width="100" height="100" src="https://uxwing.com/wp-content/themes/uxwing/download/tools-equipment-construction/tools-icon.png" alt="error" />
                </div>
                <h2>Своё <br /> производство</h2>
              </div>
              <div className="icon_container">
                <div className="why_icon">
                  <img width="100" height="100"  src="https://cdn-icons-png.flaticon.com/512/1156/1156728.png" alt="error" />
                </div>
                <h2>Гарантия на изделия</h2>
              </div>
              <div className="icon_container">
                <div className="why_icon">
                  <img width="100" height="100"  src="https://pechki.su/images/companies/1/montag/montag.png" alt="error" />
                </div>
                <h2>Команда <br /> профессионалов</h2>
              </div>
         </div>
         {/* contacts button  */}
         <ThemeProvider theme={theme}>
         <Box className='contacts_btn' sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          // <Link>
          <SpeedDialAction
            href={action.path}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
    </ThemeProvider>
        </div>
      </div>
    </>
  )
}

export default HomePage