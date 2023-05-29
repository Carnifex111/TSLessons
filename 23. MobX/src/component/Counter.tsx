import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import counter from "../store/counter";
import { observer } from "mobx-react-lite";

const Counter = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Card>
        <Card.Body className="text-center">
          <h2>Counter</h2>
          <Row className="mb-3">
            <Col>
              <Button variant="success" onClick={() => counter.inc()}>
                INC
              </Button>
            </Col>
            <Col>
              <Button variant="danger" onClick={() => counter.dec()}>
                DEC
              </Button>
            </Col>
          </Row>
          <h4>Count: {counter.count}</h4>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default observer(Counter);
