import React, { useState } from "react"
import Service from "./Service";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer,toast } from "react-toastify";


export default function Loginform() {

  const navigate = useNavigate();

  const [form, setForm]=useState({email:"", password:""});

  const onUpdateField=(e)=>{
    const nexFormState={
      ...form,
      [e.target.name]:e.target.value,
    };
    setForm(nexFormState);
  }
  
  let service = new Service();

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

  function handleEvent(e){
    e.preventDefault();
    
  const userDetails={
    "email":form.email,
    "password":form.password
  }

  service.validateUser(userDetails).then(async (res)=>{
    toast.success("Login successful");
    await sleep(1000);
    sessionStorage.setItem("email",form.email);
    sessionStorage.setItem("mytoken",res.data); 
    navigate("/search");
    window.location.reload()
    
  }).catch((error)=>{
    console.log(error);
    toast.error("Please check the credentials")
  });


  }
    return (
      <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleEvent}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <Link to={"/register"} className="link-primary" style={{textDecoration:"none"}}>
                Sign Up
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={onUpdateField}
                value={form.email}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={form.password}
                onChange={onUpdateField}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleEvent}>
                Submit
              </button>
        <ToastContainer />

            </div>
          </div>
        </form>
      </div>
      </>
    )

}