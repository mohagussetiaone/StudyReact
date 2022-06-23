import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Nav>
            <Nav.Brand>Agus CV Present</Nav.Brand>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
