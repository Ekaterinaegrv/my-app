import React, {useState, useEffect} from 'react';
import Login from '../login';
import Signup from '../sighup';
import styles from '../../Styles.module.scss';
import imgsrc from './logo.png'


const Header = (props) => {
   // const [page, setPage] = useState('');

   
   
    return (
        <div className={styles.header}>
            <img src={imgsrc} className="logo"/>
        </div>
    );
}

export default Header;
