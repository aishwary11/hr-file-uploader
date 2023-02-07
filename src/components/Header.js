import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <div className='nav-header-link'>
            <Link to="/list">List</Link>
            {/* <Link to="/edit:id">Edit</Link> */}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;