import React from "react";
import { Container, Row, Col } from "react-bootstrap"

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col className="text-center" size="md-12">
          <div class="jumbotron">
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
