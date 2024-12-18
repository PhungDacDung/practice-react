import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router"
import { UserContext } from './context/UserContext';

function Header() {
  const navigate = useNavigate();

  const { user, logout } = useContext(UserContext)

  const handleLogout = () => {
    // localStorage.removeItem("token")
    logout()
    navigate("login")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {(user && user.auth || window.location.pathname === "/") &&
            <>

              <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                {user && user.auth}

                <NavLink className="nav-link" to="/manage-user">Manage User</NavLink>

                <NavLink className="nav-link" to="/about">About Us</NavLink>

              </Nav>

              <Nav>
                <div className='mt-2 mx-3'>

                  {user && user.email && <span>Welcome <b>{user.email}</b></span>}
                </div>

                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  {user && user.auth === false ?
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                    :
                    <NavLink className="nav-link" onClick={() => handleLogout()}>Logout</NavLink>
                  }

                </NavDropdown>
              </Nav>
            </>
          }


        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;