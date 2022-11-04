import React, {Component, useState} from 'react';
import Header from './components/header';
import Signup from './components/sighup';
import Login from './components/login';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import styles from './Styles.module.scss'



const App = () => {

  const [page, setPage] = useState({
      isLogin: true,
  })
  const {isLogin} = page;


    return (
      <>
      
      <Header />
      <BrowserRouter>
      <Link to={isLogin ? 'login' : 'signup'} onClick={()=> setPage({isLogin: !isLogin})} className={styles.headerBnt}>{isLogin ? 'Login' : 'Signup'}</Link>
        
          <Routes>
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              
          </Routes>
      </BrowserRouter>
      </>
    
    )

}



export default App;
