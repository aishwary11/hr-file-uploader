import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { axiosInstance, maxFiles, toastError, toastSuccess } from '../common/constant';

const Homepage = () => {
  const [inputs, setInputs] = useState({});
  const uploadMultipleFiles = (e) => {
    if (Array.from(e.target.files).length > maxFiles) {
      e.preventDefault();
      toastError(`Cannot upload files more than ${maxFiles}`);
      return;
    }
  };

  const formDetails = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
    formSubmit();
  };

  const formSubmit = async () => {
    const res = await axiosInstance.post("/", inputs);
    if (res.data) toastSuccess("File Upload Successful");
    else toastError("File not Uploaded");
  };

  return (
    <form onSubmit={formDetails}>
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="*" onChange={uploadMultipleFiles} multiple type="file" name='inputFile' />
      </Button>
      <TextField placeholder="Please enter description" variant="outlined" style={{ width: '600px' }} name='descriptionFile' />
      <Button variant="contained" type='submit'>Submit</Button>
    </form>
  );
};

export default Homepage;