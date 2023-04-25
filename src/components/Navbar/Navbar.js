import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import SignInPop from '../Login/SignIn/SignInPop';
import SignUpPop from '../Login/SignUp/SignUpPop';
import axios from 'axios';
import UpdateInfoPop from '../Login/UpdateInfo/UpdateInfoPop';

export const NavBar = ({ account, setAccount, isHome }) => {
  const [show, setShow] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false)
  const [showUpdateInfo, setShowUpdateInfo] = useState(false)

  const apiUrl = process.env.REACT_APP_API_URL;

  const handelSignOut = async () => {
    if (!account) {
      return;
    }
    try {
      const response = await axios.get(`${apiUrl}/api/user/sign-out`, { withCredentials: true });
      if (response) {
        setAccount(null);
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="sticky-top" style={{ backgroundColor: '#146C94', padding: '0.3%' }}>
        <Container>
          <Link className='navbar-brand' to='/'>
            <span style={{ color: 'white', fontSize: '30px' }}> ELOUAIZI AYOUB</span>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>

            <Nav >
              <Link to='/home' className='nav-link'>Home</Link>
              <Link to='/about' className='nav-link'>About</Link>
              <Link to='/education' className='nav-link'>Education</Link>
              <Link to='/skills' className='nav-link'>Skills</Link>
              <Link to='/projects' className='nav-link'>Projects</Link>
              <Link to='/contact' className='nav-link'>Contact</Link>
              {isHome !== undefined && !account && <button type="button" onClick={() => { setShow(true); }} className="btn btn-outline-dark">Login</button>}
              {/* {account && <img src={account?.photo} alt=""  className="bd-placeholder-img rounded-circle" width="50" height="50" style={{marginLeft:"10px"}} />} */}
              {account &&
                <li className="nav-item dropdown">
                  <span className="nav-link " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={account?.photo} alt="" className="bd-placeholder-img rounded-circle" width="50" height="50" style={{ marginLeft: "10px" }} />
                  </span>
                  <ul className="dropdown-menu" style={{ backgroundColor: '#146C94' }}>
                    <li><span onClick={handelSignOut} style={{ cursor: 'pointer' }} className="dropdown-item" >Sign out</span></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><span className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => { setShowUpdateInfo(true) }} >update sitting</span></li>
                  </ul>
                </li>}
            </Nav >
          </Navbar.Collapse >
        </Container >
      </Navbar >
      {show && <SignInPop show={show} setShow={setShow} setShowSignUp={setShowSignUp} setAccount={setAccount} account={account} />}
      {showSignUp && <SignUpPop showSignUp={showSignUp} setShowSignUp={setShowSignUp} setShow={setShow} setAccount={setAccount} account={account} />}
      {showUpdateInfo && <UpdateInfoPop showUpdateInfo={showUpdateInfo} setShowUpdateInfo={setShowUpdateInfo} setAccount={setAccount} account={account} />}
    </>
  );
}
