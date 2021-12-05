import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  // const [nom variable, fonction qui change la valeur de la variable] = useState(valeur initiale)
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <Container fluid>
      <Row className="mt-5">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form onSubmit={(e) => login(e)} className="sirine">
            <Form.Group className="mb-3 champ" controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control
                type="email"
                // placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3 champ" controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                type="password"
                // placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="btnsub"
              style={{ borderWidth: 0, backgroundColor: "green" }}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
