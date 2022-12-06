import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {

  const navigate = useNavigate();
  const [token,setToken]=useState(false);
  
   useEffect(()=>{
      if(sessionStorage.getItem("mytoken")){
        setToken(true);
      }

   },[])
  function handleclick(){

  if(sessionStorage.getItem("mytoken")){
    sessionStorage.removeItem("mytoken");
    sessionStorage.removeItem("email")
    window.location.reload()
    navigate("/search");
  }
  else{
    navigate("/")
    window.location.reload()
  }
}

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top" style={{opacity:"0.95"}}>
        <Container>
      <Navbar.Brand>
        <Nav.Link>
          <Link style={{fontSize:"1.45rem",fontFamily:"'Comforter Brush',cursive",textDecoration:"none",color:"white"}}>
            <AutoStoriesOutlinedIcon style={{fontSize:"2.2rem"}}/>
            <span> BookHub</span>
          </Link>
        </Nav.Link>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Nav.Link ><Link style={{textDecoration:"none" , color:"white"} } to="/search">Search</Link></Nav.Link>
          {token&& <Nav.Link  ><Link style={{textDecoration:"none", color:"white"}} to="/favourite">Favourites</Link></Nav.Link>}
          <Nav.Link ><Link style={{textDecoration:"none" , color:"white"} } to="/about">About Us</Link></Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link>
          <Link style={{fontSize:"1.2rem",color:"white", textDecoration:'none',display:"flex", alignItems:"center"}} onClick={handleclick}>
            {token?"Logout":"Login"}
          </Link>
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        </Container>
    </Navbar>

    </>
  )
}



