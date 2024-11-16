import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  return (
    <>
      {/* Animated Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -50 }}  
        animate={{ opacity: 1, y: 0 }}     
        transition={{ duration: 0.5 }}     
        style={{ backgroundColor: '#db7734' }}
      >
        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Ultraman Help Desk</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="me-auto">
                
                <motion.div
                  whileHover={{ scale: 1.1 }}  
                  whileTap={{ scale: 0.95 }}    
                >
                  <Nav.Link as={Link} to="/">
                    Home
                  </Nav.Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link as={Link} to="/help">
                    Request Help
                  </Nav.Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Nav.Link href="/#services">
                    Services
                  </Nav.Link>
                </motion.div>

                {/* Animated Dropdown */}
                {/* <NavDropdown title="More" id="navbar-nav-dropdown">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavDropdown.Item as={Link} to="/contact">
                      Contact
                    </NavDropdown.Item>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavDropdown.Item as={Link} to="/faq">
                      FAQ
                    </NavDropdown.Item>
                  </motion.div>
                  
                  <NavDropdown.Divider />
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                  </motion.div>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.nav>
    </>
  );
}

export default Header;
