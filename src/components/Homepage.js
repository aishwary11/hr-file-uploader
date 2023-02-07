import { Button, TextField } from '@mui/material';
import React from 'react';
import { maxFiles, toastError } from '../common/constant';

const Homepage = () => {
  const uploadMultipleFiles = (e) => {
    if (Array.from(e.target.files).length > maxFiles) {
      e.preventDefault();
      toastError(`Cannot upload files more than ${maxFiles}`);
      return;
    }
  };
  return (
    <>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="*" onChange={uploadMultipleFiles} multiple type="file" />
      </Button>
      <TextField placeholder="Please enter description" variant="outlined" style={{ width: '600px' }} />
    </>
  );
};

export default Homepage;