import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { motion, useTime, useTransform } from "framer-motion";
import Logo from "../images/logo.png";
import EmailIcon from "@mui/icons-material/Email";
// import Button from 'react-bootstrap/Button';
import Offcanvas from "react-bootstrap/Offcanvas";
import CloseIcon from "@mui/icons-material/Close";

// const pages = ['Лофт', 'Душевые', 'Биокамины', 'Потолки'];
const pages = [
  {
    type: "Лофт",
    path: "/loft",
  },
  {
    type: "Душевые",
    path: "/shower",
  },
  {
    type: "Биокамины",
    path: "/kaminy",
  },
  {
    type: "Потолки",
    path: "/potolki",
  },
];

// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#d05000",
    },
  },
});

function Navbar() {
  //framer
  //   const time = useTime();
  // const rotate = useTransform(time, [0, 500], [0, 360], { clamp: false });

  // sidebar
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    // <motion.div style={{ rotate }}>
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              sx={{
                color: "#ff6700",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              <img
                height="100"
                width="100"
                onClick={() => navigate("/")}
                src={Logo}
                alt="error"
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleShow}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header
                  closeButton
                  style={{ background: "black", fill: "white", width: "101%" }}
                >
                  <Offcanvas.Title
                    style={{
                      display: "flex",
                      width: "100%",
                      justifyContent: "space-between",
                      color: "white",
                    }}
                  >
                    {" "}
                    <div>Pages:</div>
                    <div>
                      <CloseIcon
                        onClick={handleClose}
                        style={{ fill: "white" }}
                      />
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <div
                  style={{
                    height: "2px",
                    borderTop: "2px #ff6700 solid",
                    width: "101%",
                  }}
                ></div>
                <Offcanvas.Body style={{ background: "black", width: "101%" }}>
                  <div className="pages_list">
                    <ul>
                      <li
                        onClick={() => {
                          navigate("/loft");
                          handleClose();
                        }}
                        className="page_item"
                      >
                        Лофт
                      </li>
                      <li
                        onClick={() => {
                          navigate("/shower");
                          handleClose();
                        }}
                        className="page_item"
                      >
                        Душевые
                      </li>
                      <li
                        onClick={() => {
                          navigate("/kaminy");
                          handleClose();
                        }}
                        className="page_item"
                      >
                        Биокамины
                      </li>
                      <li
                        onClick={() => {
                          navigate("/potolki");
                          handleClose();
                        }}
                        className="page_item"
                      >
                        Потолки
                      </li>
                    </ul>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
              {/* <Menu
            className='menu-contain'
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem className='menu-item'  key={page.type} onClick={() => navigate(page.path)}>
                  <Typography textAlign="center">{page.type}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                className="navbar_logo"
                width="100"
                height="100"
                src={Logo}
                alt="error"
              />
            </Typography>
            <Box
              className="menu-contain"
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            >
              {pages.map((page) => (
                <Button
                  className="menu-item"
                  key={page.type}
                  onClick={() => navigate(page.path)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.type}
                </Button>
              ))}
            </Box>

            <Box className="social_box" style={{ flexGrow: 0 }}>
              <div className="social_logo">
                <Link href="https://www.instagram.com/stroy_level.kg/">
                  <motion.div
                    animate={{ x: [-50, 0] }}
                    whileHover={{ rotate: 24 }}
                    drag
                  >
                    <InstagramIcon
                      className="social"
                      style={{ color: "white" }}
                    />
                  </motion.div>
                </Link>
                <Link href="mailto: stroylevel.kg@gmail.com">
                  <motion.div
                    animate={{ x: [50, 0] }}
                    whileHover={{ rotate: 24 }}
                    drag
                  >
                    <EmailIcon className="social" style={{ color: "white" }} />
                  </motion.div>
                </Link>
              </div>
              <div className="numbers">
                <a href="tel:+996505545945" className="o">
                  0505 545-945
                </a>
                <a href="tel:+996555545945" className="mega">
                  0555 545-945
                </a>
              </div>

              {/* <InstagramIcon className='insta' fontSize='large' onClick={() => navigate('https://www.instagram.com/stroy_level.kg/')} /> */}
              {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <InstagramIcon />
                {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
    //   </motion.div>
  );
}
export default Navbar;
