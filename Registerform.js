import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Service from './Service';


const Registerform = () => {
    const navigate = useNavigate();
    const [form, setForm]=useState({email:"", password:"",firstname:"",lastname:""});

  const onUpdateField=(e)=>{
    const nexFormState={
      ...form,
      [e.target.name]:e.target.value,
    };
    setForm(nexFormState);
  }
  
  let service = new Service();


  const handleEvent=(e)=>{
    e.preventDefault();
    
  const userDetails={
    "email":form.email,
    "password":form.password,
    "firstname":form.firstname,
    "lastname":form.lastname
  }

  service.registerUser(userDetails).then((res)=>{
    console.log("Successful");
    navigate("/");
 
    
  }).catch((error)=>{
    console.log(error);
  });


  }

  return (
    <div>
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleEvent}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <Link to={"/"} className="link-primary" style={{textDecoration:"none"}}>
              Sign In
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Ashwin"
             name='firstname'
             onChange={onUpdateField}
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="e.g Rana"
              name='lastname'
              onChange={onUpdateField}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              autoComplete="off"
              name='email'
              onChange={onUpdateField}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              name='password'
              onChange={onUpdateField}
             
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registerform
