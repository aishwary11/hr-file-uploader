import { List } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';

function App() {
  return (
    <>
      <ToastContainer theme="colored" />
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/list' element={<List />} />
        <Route path='/edit:id' />
      </Routes>
    </>
    // <div className='App'>
    //   <ToastContainer theme="colored" />
    //   <Button variant="contained" component="label">
    //     Upload
    //     <input hidden accept="*" onChange={uploadMultipleFiles} multiple type="file" />
    //   </Button>
    //   <TextField label="Outlined" placeholder="Please enter description" variant="outlined" style={{ width: '600px' }} />
    // </div>
  );
}

export default App;