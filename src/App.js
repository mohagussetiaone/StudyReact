// import logo from "./logo.svg";
// import "./App.css";
import "./style/NavigationBar.css";
import NavigationBar from "./components/NavigationBar";
import { Container, Row, Col } from "react-bootstrap";
// import Profile from "./components/Profile";
// import Superhero from "./components/Superhero";
// import Tranding from "./components/Tranding";

function App() {
  return (
    <div>
      {/* start intro */}
      <div className="myBg border">
        <NavigationBar />
        <div className="intro">
          <Container className="text-white d-flex justify-content-center align-item-center">
            <Row>
              <Col>
                <div className="title">Ayo Nonton</div>
                <div className="title">Ayo Nonton</div>
                <div className="title">Ayo Nonton</div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* <Profile />
        <Superhero />
        <Tranding /> */}
      </div>
    </div>
  );
}

export default App;
