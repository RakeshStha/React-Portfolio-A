import React, {Component} from 'react'
import {Container, Row, Col, Card, Form, Button, Image} from 'react-bootstrap';

class  Home extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',
            message:''
        }
    }

    handleUsernameChange = (event) => { //event as parameter to capture value
        this.setState({
            username: event.target.value
        })
    }
    handleEmailChange = (event) => { //event as parameter to capture value
        this.setState({
            email: event.target.value
        })
    }
    handleMessageChange = (event) => { //event as parameter to capture value
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert("JSON :" +JSON.stringify(this.state))
        console.log(this.state)
        event.preventDefault()
    }

    render(){
    return(
       
        <Container>
            <Row>
                <Col sm={6}>
                    <h1>Hi There, </h1>
                    <h3>Welcome to my website</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                    <h3>About Me</h3>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    
                </Col>
                <Col sm={6}>
                <Image
                    width={600}
                    height={400}
                    className="mr-10"
                    src="https://i.pinimg.com/originals/de/30/fd/de30fd62f738f00e3b47ea2cb3fca29b.jpg"
                    alt="Boy Image"
                    fluid
                />
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col sm={6}>
            <Card> 
                <Card.Body>
                <Card.Title className="text-center"><h2>Contact Me</h2></Card.Title>
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formName">
                    <Form.Label>Name :</Form.Label>
                    <Form.Control type="text" 
                    value={this.state.username} 
                    onChange={this.handleUsernameChange} 
                    placeholder="Enter your Name" />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type="email" 
                    value={this.state.email} 
                    onChange={this.handleEmailChange}
                    placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group controlId="form Mesage">
                    <Form.Label>Your Message :</Form.Label>
                    <Form.Control as="textarea" 
                    value={this.state.message}
                    onChange={this.handleMessageChange} 
                    rows={3} />
                    </Form.Group>
                    <Form.Group className="text-center">
                    <Button type="submit" variant="primary" >Submit</Button>
                    </Form.Group>
                </Form>
                </Card.Body>
            </Card>
            </Col>

            <Col sm={6}>
                <Image
                    width={600}
                    height={300}
                    className="mr-10"
                    src="https://heera.it/wp-content/uploads/2011/11/google-maps-new-interface1.jpg"
                    alt="Map image"
                    fluid
                />
                <p>
                    <b>Contact: +977-9849497787</b>
                </p>
                <p>
                    <b>Email: rakeshshrestha3222@gmail.com</b>
                </p>
            </Col>
            </Row>
            <br></br>
            
        </Container>
        
   
)
    }
    }
  export default Home;
