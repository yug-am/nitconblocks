import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer, Box } from '@mui/material';
import logoSVG from '../images/logo_block_nitc.svg';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: 'inherit',
          color: 'inherit',
        },
      }}
    >
      <Box sx={{ p: 1, textAlign: 'center' }}>
        <img src={logoSVG} alt="Logo" style={{ maxWidth: '50%', height: 'auto' }} />
        <h3>NITC on blocks</h3>
      </Box>
      <List sx={{ '& a': { color: 'inherit', textDecoration: 'none' } }}>
        <ListItem button component={Link} to="/stage1">
          <ListItemText primary="Stage 1" />
        </ListItem>
        <ListItem button component={Link} to="/stage2">
          <ListItemText primary="Stage 2" />
        </ListItem>
        <ListItem button component={Link} to="/stage3">
          <ListItemText primary="Stage 3" />
        </ListItem>
        <ListItem button component={Link} to="/stage4">
          <ListItemText primary="Stage 4" />
        </ListItem>
        <ListItem button component={Link} to="/stage5">
          <ListItemText primary="Stage 5" />
        </ListItem>
        <ListItem button component={Link} to="/stage6">
          <ListItemText primary="Stage 6" />
        </ListItem>
        <ListItem button component={Link} to="/about-us">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;