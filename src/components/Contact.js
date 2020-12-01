import React, {Component} from 'react';
import {Container, Card, Jumbotron, Form, Button} from 'react-bootstrap';
import '../App.css';

class  Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            fname:'',
            lname:'',
            email:'',
            range:'',
            male:'',
            female:'',
            custom:'',
            message:''
        }
    }

    handleFirstnameChange = (event) =>{
        this.setState({
            fname:event.target.value
        })
    }
    handleLastnameChange = (event) =>{
        this.setState({
            lname:event.target.value
        })
    }
    handleEmailChange = (event) =>{
        this.setState({
            email:event.target.value
        })
    }
    handleRangeChange = (event) =>{
        this.setState({
            range:event.target.value
        })
    }
    handleMaleChange = (event) =>{
        this.setState({
            male:event.target.value
        })
    }
    handleFemaleChange = (event) =>{
        this.setState({
            female:event.target.value
        })
    }
    handleCustomChange = (event) =>{
        this.setState({
            custom:event.target.value
        })
    }
    handleMessageChange = (event) =>{
        this.setState({
            message:event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert("JSON :" + JSON.stringify(this.state))
        console.log(this.state)
        event.preventDefault()
    }

    render(){
        return(
    <Container>
        <Jumbotron className="con">
            <h1 className="text-center">Contact Us</h1>
        </Jumbotron>
        <Card>
            <Card.Body>
                <Card.Title><p className="text-center">Fill up the form. <b>Thank You!</b></p></Card.Title>
            <Form  onSubmit={this.handleSubmit}> 
                <Form.Group controlId="firstname">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="text" 
                    value={this.state.fname} 
                    onChange={this.handleFirstnameChange} 
                     placeholder="Your First Name"/>
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="text" 
                    value={this.state.lname} 
                    onChange={this.handleLastnameChange} 
                    placeholder="Your Last Name"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type="email" 
                    value={this.state.email} 
                    onChange={this.handleEmailChange} 
                    placeholder="abc@gmail.com"/>
                </Form.Group>
                <Form.Group controlId="range">
                    <Form.Label> Your experience in programming</Form.Label>
                    <Form.Control type="range"
                    value={this.state.range} 
                    onChange={this.handleRangeChange} 
                    />
                </Form.Group>
                <Form.Group controlId="gender">
                    <Form.Label>Gender :</Form.Label>
                    <br></br>
                    <Form.Check  type="radio" 
                    value={this.state.male} 
                    onChange={this.handleMaleChange} 
                    inline aria-label="Male" label="Male"/>
                    <Form.Check  type="radio" 
                    value={this.state.female} 
                    onChange={this.handleFemaleChange} 
                    inline aria-label="Female" label="Female"/>
                    <Form.Check 
                    value={this.state.custom} 
                    onChange={this.handleCustomChange} 
                     inline aria-label="Male" label="Custom"/>
                </Form.Group>
                <Form.Group controlId="Message">
                    <Form.Label>Your Message :</Form.Label>
                    <Form.Control as="textarea" 
                    value={this.state.message} 
                    onChange={this.handleMessageChange} 
                    rows={3} />
                </Form.Group>
                <Form.Group className="text-center">
                    <Button type="submit" >Send</Button>
                </Form.Group>
            </Form>
            </Card.Body>
        </Card>
        <br></br>
    </Container>
    
        )}
}
export default Contact;

  