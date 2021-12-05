import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cin, setCin] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const register = (e) => {
    e.preventDefault();
    if (firstName.length < 3) {
      setErrorMessage("Wrong first name");
      return;
    }
    alert("register");
    setErrorMessage(null);
  };

  return (
    <Container fluid>
      <h2 style={{ textAlign: "center", marginTop: 40 }}>New account</h2>
      {errorMessage && (
        <h6
          style={{ textAlign: "center", fontSize: "0.8em", color: "#c22222" }}
        >
          {errorMessage}
        </h6>
      )}
      <Row className="mt-1">
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Form onSubmit={(e) => register(e)} className="sirine">
            <Form.Group className="mb-3 champ" controlId="formBasicEmail">
              <Form.Label className="label">Email address</Form.Label>
              <Form.Control
                required
                type="email"
                // placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 champ" controlId="formBasicEmail">
              <Form.Label className="label">First name</Form.Label>
              <Form.Control
                type="text"
                // placeholder="enter email"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 champ" controlId="formBasicEmail">
              <Form.Label className="label">Last name</Form.Label>
              <Form.Control
                type="text"
                // placeholder="enter email"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 champ" controlId="formBasicEmail">
              <Form.Label className="label">№ CIN</Form.Label>
              <Form.Control
                type="number"
                // placeholder="enter email"
                value={cin}
                onChange={(e) => setCin(e.target.value)}
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
              SIGN UP
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
