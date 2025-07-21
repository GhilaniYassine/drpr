import {React, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import { IconButton } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import ShortMenu from './ShortMenu';
import logo from '../../assets/1.png';

const drawerWidth = 240;
const shortDrawerWidth = 80

export default function Navbar({content}) {

  const [isBigMenu, setIsBigMenu] = useState(false)

  const changeMenu = () => {
     setIsBigMenu(!isBigMenu)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, height: '40px' }}>
        <Toolbar variant="dense" sx={{ minHeight: '40px', height: '40px' }}>
            <IconButton onClick={changeMenu} sx={{marginRight:'10px', color: 'white', padding: '4px'}}>
               {isBigMenu ? <MenuOpenIcon fontSize="small"/> : <MenuIcon fontSize="small"/>}
            </IconButton>
            <img width="5%" src={logo}/>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortDrawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ height: '40px' }} />
          {isBigMenu ?  <Menu/> : <ShortMenu/>}
           
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <Box sx={{ height: '40px' }} />
            {content}
      </Box>
    </Box>
  );
}
