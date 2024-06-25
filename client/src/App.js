import React, {Component} from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import BooksNavbar from "./components/BooksNavbar/BooksNavbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";

import "./App.css"

class App extends Component {
 
   render() {
      return (
         
            <Router>
                  <div className="body-div">
                     <BooksNavbar />
                     <Container> Container
                        <Row> Row
                            <Col >Col
                                <Routes> Routes
                                    <Route path="/"        element={<Saved />} />
                                    <Route path="/saved"   element={<Saved />} />
                                    <Route path="/search"  element={<Search />} />
                                    <Route component={NoMatch} />
                              </Routes>
                           </Col>
                        </Row>
                     </Container>
                  </div>
            </Router>
      );
   }
}
export default App;
