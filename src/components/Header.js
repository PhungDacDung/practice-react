import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from "react-router"

function Header() {
  const navigate = useNavigate();

  const handleLogout = () =>{
      localStorage.removeItem("token")
      navigate("/login")
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          

            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">Home</NavLink>

              <NavLink className="nav-link" to="/manage-user">Manage User</NavLink>

              <NavLink className="nav-link" to="/about">About Us</NavLink>

            </Nav>

            {/* <Nav.Link className='' href="/">Home</Nav.Link>

              <Nav.Link href="/manage-user">Manage User</Nav.Link> */}


            <Nav>
              <NavDropdown title="Setting" id="basic-nav-dropdown">
                <NavLink className="nav-link" to="/login">Login</NavLink>
                {/* <NavDropdown.Item href="/login">Login</NavDropdown.Item> */}
                <NavLink className="nav-link" 
                onClick={()=>handleLogout()}
                >Logout</NavLink>
              </NavDropdown>
            </Nav>

         
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Header;