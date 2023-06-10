import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddBoxIcon from '@mui/icons-material/AddBox';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          
            
          </IconButton>
          <Link to='/rhome' style={{paddingTop:40,maxHeight:80}}>
          <img 
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg "
                alt="uber eats"
              />
       </Link>
      
       <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            // "& .MuiDrawer-paper": {
            //   width: drawerWidth,
            //   boxSizing: "border-box",
            // },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
            <img
                src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg "
                alt="uber eats"
              />
          </DrawerHeader>
          <Divider />
          <List>
          <ListItem >
          
                <ListItemIcon>
                <Link to ='./rprofile' style={{color:'black',}}>
                 <AccountBoxIcon /> </Link>  
                </ListItemIcon> 
                <ListItemText> <Link to ='./rprofile' style={{textDecoration:'none', color:"black"}}>  View profile </Link></ListItemText>
              </ListItem>
        <ListItem >
          
                <ListItemIcon>
                <Link to ='./rprofile' style={{color:'black',}}>
                 <AssignmentIndIcon />   
                 </Link>  
                </ListItemIcon> 
                <ListItemText> <Link to ='./rprofile' style={{textDecoration:'none', color:"black"}}>  Update profile </Link></ListItemText>
              </ListItem>
              <ListItem >
           
                <ListItemIcon>
                <Link to ='./adddish' style={{color:'black',}}> 
                 <AddBoxIcon />  </Link>
                </ListItemIcon> 
                <ListItemText>  <Link to ='./adddish' style={{textDecoration:'none', color:"black"}}>  Add dishes </Link></ListItemText>
              </ListItem>
              <ListItem >
          
                <ListItemIcon>
                <Link to ='./allorders' style={{color:'black',}}> 
                 <ReceiptIcon />  </Link> 
                </ListItemIcon> 
                <ListItemText>  <Link to ='./allorders' style={{textDecoration:'none', color:"black"}}>   Orders</Link></ListItemText>
              </ListItem>
          </List>
          <Divider />
        </Drawer>




      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}