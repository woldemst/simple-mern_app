// import logo from './logo.svg';
import { Routes, Route} from 'react-router-dom';
import './App.scss';
import Login from './components/login/Login';
import Register from './components/register/Register';

import Main from './pages/Main';
import Todo from './pages/Todo';
// import {useState} from 'react'


function App() {
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path='/todo' element={<Todo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

