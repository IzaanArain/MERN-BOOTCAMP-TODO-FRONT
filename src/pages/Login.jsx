import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const {
        email,
        password,
      } = formData;
      const onChangeLoginForm = (e) => {
        const {name,value}=e.target
        setFormData((prev)=>(
            {
                ...prev,
                [name]:value
            }
        ))
      };
      const onSubmit=(e)=>{
        e.preventDefault()
      }
  return (
    <>
      <div className="container text-center" style={{width:"50%"}}>
      <div>
            <h1>
            <FaSignInAlt/> Login
            </h1>
            <h2>please login</h2>
        </div>
        <div className="card p-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeLoginForm}
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="password">Enter Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={onChangeLoginForm}
              placeholder="Enter Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" style={{width:"50%"}}>
            Submit
          </Button>
        </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
