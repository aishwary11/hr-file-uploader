import { Button } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const maxFiles = 5;
  const uploadMultipleFiles = (e) => {
    if (Array.from(e.target.files).length > maxFiles) {
      e.preventDefault();
      toast.error(`Cannot upload files more than ${maxFiles}`, {
        autoClose: 3000,
        position: toast.POSITION.TOP_RIGHT
      });
      return;
    }
  };

  return (
    <div className='App'>
      <ToastContainer theme="colored" />
      <Button variant="contained" component="label">
        Upload
        <input hidden accept="*" onChange={uploadMultipleFiles} multiple type="file" />
      </Button>
    </div>
  );
}

export default App;
