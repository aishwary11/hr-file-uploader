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
  );
}

export default App;