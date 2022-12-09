import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authantion/Authantion';
import './Hrader.css'

const Header = () => {
  const { logout, user } = useContext(AuthContext);


  const logoutin = () => {
    logout()
    .then(() => {
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to={'/'} className='menu'>News</Link>
            <Link to={'/profile'} className='menu'>Profile</Link>
            <Link className='menu'>Destination</Link>
            <Link className='menu'>Contact</Link>
            {
              user?.uid ? <>
                <Link className='menu'  >{user.displayName}</Link>
                <Link className='menu' onClick={logoutin} >Log Out</Link>
              </>
                :
                <>
                  <Link className='menu' to={'/login'}>Login</Link>
                  <Link className='menu' to={'/singUp'}>Sing up</Link>
                </>

            }




          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;