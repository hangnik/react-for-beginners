import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./Header.module.css";

function Header(){
    return (
        <Navbar bg="dark" variant="dark" expand="xl" fixed="top">
          <Container>
            <Navbar.Brand className={styles.navbar_brand}>
                <a href={`${process.env.PUBLIC_URL}/`}> ONGFLIX</a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className={styles.nav_link} href="#home">High Rating</Nav.Link>
                <Nav.Link className={styles.nav_link} href="#link">Animation</Nav.Link>
                <Nav.Link className={styles.nav_link} href="#link">Romance</Nav.Link>
                <Nav.Link className={styles.nav_link} href="#link">Comedy</Nav.Link>
                <Nav.Link className={styles.nav_link} href="#link">Thriller</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Header;