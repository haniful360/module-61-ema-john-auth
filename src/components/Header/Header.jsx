import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => { })
            .catch(err => { console.log(err) })
    }
    console.log(user);
    return (
        <div>
            <div className='container'>
                <nav className='header'>
                    <div>
                        <img src={logo} alt="ema-jhon" />
                    </div>
                    <div>
                        <ul className='menu-item' >
                            <li><Link to="/">shop</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/inventory">Manage inventory</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/signUp">signUp</Link></li>
                            <li>{user && <span style={{color:"white"}}>{user.email} <button onClick={handleLogOut}>logout</button></span>}</li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;