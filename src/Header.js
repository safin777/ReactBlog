import React from 'react';
import {Button,Card,Container,Col,Row,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';





class Header extends React.Component
{
   
    render()
    {
        return(
               <Container fluid>
                <Row>
                    <Col lg={3} md={2} xs={2} className="logo">
                        <h2>Code Hub</h2>
                    </Col>

                    <Col lg={6} md={5} xs={6}  className="logo">
                    <ul className="header-list">
                          <li>Home</li>
                          <li>Service</li>
                          <li>Login</li>
                          <li>Sign Up</li>
                          <li>Contact</li>
                    </ul>
                    </Col>

                    <Col lg={3} md={5} xs={4}>
                    <Form inline className="search-box">
                                        <FormControl type="text" placeholder="Search"/>
                                        <Button type="submit">Submit</Button>
                    </Form>
                    </Col>


                </Row>
               </Container>
                
                    
             )

    }
}

export default Header;