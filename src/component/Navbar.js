import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TKosar from '../assets/TrueKosar.png';
import FKosar from '../assets/FalseKosar.png'
import InputContext from '../store/InputContext';
import {  useContext } from 'react';
import Logo from '../assets/ful.ico'


function ColorSchemesExample(props) {
  const cartCtx = useContext(InputContext);
  const kosaritemdarab = cartCtx.items.length;
  const storedUserLoggedInInformation = localStorage.getItem('Login');
  

  return (
    <>
      <Navbar  style={{backgroundColor:"#3c1e14"}} variant="dark">
        <Container>
          <Navbar.Brand>
          <img style={{height:'1.5rem'}} src={Logo}/> 
          <a href="https://www.one-tab.com/page/YVnpN0QcRrmAvvTQTscAKw?fbclid=IwAR3AbaiGZOP2SiA7FRTL_sn0x26whys_HZdUKwW3R_Vq_JmbxhZRNSqgeXk"
           style={{color:'white',textDecoration:'None'}}>
           Tibi Cukrászdája
           </a>
           </Navbar.Brand>
          <div className='justify-content-end'>
          <Nav className="me-auto">
            <Nav.Link style={{marginTop:'10px'}} onClick={props.hidenRendelesek}>Termékeink</Nav.Link>

            {storedUserLoggedInInformation === '1' &&<Nav.Link style={{marginTop:'10px'}} onClick={props.onNDOpen}>Új termék hozzá adása az áruházhoz</Nav.Link>}

            {storedUserLoggedInInformation === '1' &&<Nav.Link style={{marginTop:'10px'}} onClick={props.onRendelesekOpen}>Rendelések</Nav.Link>}
            
            <Nav.Link onClick={props.onKosarOpen} style={{ backgroundColor: "#f29a2c",color: 'black', borderRadius: '30px' }}>
              {kosaritemdarab>0 ? <img src={TKosar}></img> : <img src={FKosar}></img> }
              Kosár</Nav.Link>

              {storedUserLoggedInInformation === '1' ? 
              <button  
              onClick={()=> window.location.reload(localStorage.removeItem('Login'))} 
              style={{ backgroundColor: "#f77283", color:'black' , borderRadius: '30px', marginLeft:'10px', padding:'20px' }}>Log out</button>:
               <Nav.Link onClick={props.showLogin} style={{ backgroundColor: "#f29a2c",color:'black', borderRadius: '30px', marginLeft:'10px', padding:'20px' }}>Log in</Nav.Link> 
               }

            
          
             
          </Nav>
          </div>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default ColorSchemesExample;