import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import { Formik, Form } from "formik";
import TextField from "./TextField";
import * as Yup from "yup";
const Signup = ()=>{
    const[setRes]=useState({});
    const validate = Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 charaters')
          .required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Password must match')
          .required('Confirm password is required'),
    })
    const fname=React.useRef();
    const lname=React.useRef();
    const email=React.useRef();
    const password=React.useRef();
    const registration=()=>{
        let obj={
            "fname":fname.current?.value,
            "lname":lname.current?.value,
            "email":email.current?.value,
            "password":password.current?.value
        };
        axios.post("http://localhost:8080/registration",obj).then((posRes)=>{
            const {data}=posRes;
            setRes(data)
        },(errRes)=>{
            console.log(errRes)
        })
       
    }
    return(
        <React.Fragment>
        <div>
            <Formik initialValues={{firstName:"",
                                    lastName:"",
                                    email:"",
                                    password:"",
                                    confirmPassword:""}}
                    validationSchema={validate}
                    onSubmit={values => {
                        console.log(values)
                    }}>
                    <Fade bottom cascade>
                <Form>
                    <h1>Signup</h1>
                    <TextField type="text" placeholder="firstName" label="FirstName" name="firstName" ref={fname}></TextField>
                    <TextField type="text" placeholder="lastName" label="LastName" name="lastName" ref={lname}></TextField>
                    <TextField type="email" placeholder="email" label="Email" name="email" ref={email}></TextField>
                    <TextField type="password" placeholder="password" label="Password" name="password" ref={password}></TextField>
                    <TextField type="password" placeholder="ConfirmPassword" label="confirmPassword" name="confirmPassword"></TextField>
                    <button className="btn btn-light mt-3 mr-3" type="submit" onClick={registration}>Register</button>
                    <button className="btn btn-danger ml-3 mt-3 mx-3" type="reset">Reset</button>
                </Form>
                </Fade>
         
            </Formik>
        </div>
   
        </React.Fragment>
           
    )
};

export default Signup;