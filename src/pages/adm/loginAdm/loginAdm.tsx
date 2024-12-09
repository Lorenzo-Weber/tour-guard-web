import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styles from './loginAdm.module.css';

const LoginAdm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Adicionar lógica de login
  };

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} sm={12}>
            <div className={styles.body}>
              <div className={styles.formContainer}>
                <h2 className="text-center mb-4">Login de Administrador</h2>
                <Form onSubmit={handleSubmit} className={styles.form}>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="email">Email:</Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Digite seu email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="password">Senha:</Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Fazer Login
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginAdm;
