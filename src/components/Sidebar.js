// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Drawer } from '@mui/material';

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
        <ListItem button component={Link} to="/about-us">
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
  