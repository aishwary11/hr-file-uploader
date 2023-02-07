import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography component="p" >
            <Link to="/list">List</Link>
          </Typography>
          <Typography>
            <Link to="/edit:id">Edit</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;