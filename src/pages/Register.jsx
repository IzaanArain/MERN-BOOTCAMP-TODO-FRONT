import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import { register,reset } from "../features/auth/authSlice";
import LoadingBar from "../components/LoadingBar";
const Register = () => {
  const [registerformData, setRegisterFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",
    age: 0,
    image: "",
    contact: "",
    country: "",
    city: "",
  });
  const {
    fname,
    lname,
    email,
    password,
    password2,
    age,
    image,
    contact,
    city,
    country,
  } = registerformData;
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user,
    isLoading,
    isError,
    isSucess,
    message}=useSelector((state)=>state.auth);

    useEffect(()=>{
      if(isError){
        toast.error(message)
      }
      if(isSucess || user){
        navigate('/')
      }
      dispatch(reset)
    },[user,
      isError,
      isLoading,
      isSucess,
      message,
      navigate,
      dispatch])

  const onChangeRegsiterForm = (e) => {
    const {name,value}=e.target
    setRegisterFormData((prev)=>(
        {
            ...prev,
            [name]:value
        }
    ))
  };
  const onSubmit=(e)=>{
    e.preventDefault()
    if(password!==password2){
      toast.error("password do not match")
    }else{
      const userData={
        fname,
        lname,
        email,
        password,
        age,
        image,
        contact,
        city,
        country,
      }
      dispatch(register(userData))
    }
  }
  if(isLoading){
    return <LoadingBar/>
  }
  return (
    <>
      <div className="container text-center">
       <div>

       <h1 className="mt-2">
        <FaUser/>  Register now
        </h1>
        <hr />
       </div>
        <div className="card p-4">
          <Form className="text-start">
            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="fname">Enter your first name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="fname"
                    value={fname}
                    id="fname"
                    autoComplete="off"
                    onChange={onChangeRegsiterForm}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="lname">Enter your last name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lname"
                    id="lname"
                    value={lname}
                    autoComplete="off"
                    onChange={onChangeRegsiterForm}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter email"
                    onChange={onChangeRegsiterForm}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="image">Enter Image link : </Form.Label>
                  <Form.Control
                    type="text"
                    id="image"
                    name="image"
                    value={image}
                    placeholder="Enter Image Link"
                    onChange={onChangeRegsiterForm}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="contact">Contact : </Form.Label>
                  <Form.Control
                    type="text"
                    id="contact"
                    name="contact"
                    value={contact}
                    placeholder="Enter your phone number"
                    onChange={onChangeRegsiterForm}
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="age">Age :</Form.Label>
                  <Form.Control
                    type="number"
                    id="age"
                    name="age"
                    value={age}
                    placeholder="Enter your age"
                    onChange={onChangeRegsiterForm}
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password">Enter Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={onChangeRegsiterForm}
                    required
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="password2">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password2"
                    name="password2"
                    value={password2}
                    placeholder="Confirm Password"
                    onChange={onChangeRegsiterForm}
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="country">Country : </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Country"
                    name="country"
                    id="country"
                    value={country}
                    autoComplete="off"
                    onChange={onChangeRegsiterForm}
                  />
                </Form.Group>
              </div>
              <div className="col-lg-6">
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="city">City :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="City"
                    name="city"
                    id="city"
                    value={city}
                    autoComplete="off"
                    onChange={onChangeRegsiterForm}
                  />
                </Form.Group>
              </div>
            </div>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
