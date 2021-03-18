import React from 'react';
import {Button,Card,Container,Col,Row,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './card.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

class MainBody extends React.Component
{
   
    render()
    {
        return(
               <Container fluid>
                   <h1 className="py-2">
                       Welcome To Code Hub
                   </h1>
                <Row className="py-4" >
                    <Col className="main-body p-4" md={10}>
                        <p>In case you are using Sass the simplest way is to include the Bootstrap’s source Sass files in your main Sass file and then require it on your src/index.js or App.js file. This applies to a typical create-react-app application in other use cases you might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.</p><hr></hr>
                    </Col>

                    <Col className="main-body" md={2}>
                        <h2>Language</h2>
                        <a href="/#">JAVA</a>
                        <a href="/#">Python</a>
                        <a href="/#">Javascript</a>
                        <a href="/#">PHP</a>

                        <h2>Framework</h2>
                        <a href="/#">Spring</a>
                        <a href="/#">Laravel</a>
                        <a href="/#">Django</a>
                        <a href="/#">Flask</a>
                    </Col>
                </Row>
               </Container>
                
                    
             )

    }
}

export default MainBody;