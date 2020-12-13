import React, {Component} from 'react';
import {Container, Card, Jumbotron, Form, Button} from 'react-bootstrap';
import '../App.css';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

const formValid = ({ formErrors, ...rest}) => { //...rest as a parameter with infinite value
    let valid = true;

    //For empty and error string validation
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    })

    //validate the form which was filled out
    Object.values(rest).forEach(val=>{
        val === null && (valid = false);
    });
    return valid;
} ;


class  Contact extends Component{
    constructor(props){
        super(props)
        this.state = {
            fname:null,
            lname:null,
            email:null,
            message:null,
            formErrors: {
                fname:"",
                lname:"",
                email:"",
                message:""
            }
        };
    }

    handleSubmit = e =>{
        e.preventDefault();
        if (formValid(this.state)){
            alert(JSON.stringify(this.state))
            e.preventDefault();
        }
        else {
            alert(` FORM INVALID`)
            e.preventDefault();
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = {...this.state.formErrors};

        switch (name) {
            case "fname" :
                formErrors.fname =
                value.length < 3 ? "Minimum 3 characters required" : "";
                break;
            case "lname" :
                formErrors.lname =
                value.length < 3 ? "Minimum 3 characters required" : "";
                break;
            case "email" :
                formErrors.email = emailRegex.test(value)
                ?""
                : "Invalid email address"
                break;
            case "message" :
                formErrors.message =
                value.length < 10 ? "Minimum 10 characters required" : "";
                break;
            default:
                break;
        }
        this.setState({formErrors, [name]:value}, ()=> console.log(this.state));

    } 

    render(){
        const {formErrors} = this.state;
        return(
    <Container>
        <Jumbotron className="con">
            <h1 className="text-center">Contact Us</h1>
        </Jumbotron>
        <Card>
            <Card.Body>
                <Card.Title><p className="text-center">Fill up the form. <b>Thank You!</b></p></Card.Title>
            <Form  onSubmit={this.handleSubmit} noValidate> 

                <Form.Group controlId="firstname">
                    <Form.Label>First Name :</Form.Label>
                    <Form.Control type="text" 
                     name="fname"
                    onChange={this.handleChange} 
                    noValidate
                     placeholder="Your First Name"/>

                     {formErrors.fname.length > 0 && ( <span className="errorMessage">{formErrors.fname}</span>)}
                </Form.Group>

                <Form.Group controlId="lastname">
                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control type="text" 
                     name="lname"
                    onChange={this.handleChange} 
                    placeholder="Your Last Name"
                    noValidate/>
                    {formErrors.lname.length > 0 && ( <span className="errorMessage">{formErrors.lname}</span>)}
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type="email" 
                    name="email"
                    onChange={this.handleChange} 
                    placeholder="abc@gmail.com"
                    noValidate/>
                    {formErrors.email.length > 0 && ( <span className="errorMessage">{formErrors.email}</span>)}
                </Form.Group>
                
                
                <Form.Group controlId="Message">
                    <Form.Label>Your Message :</Form.Label>
                    <Form.Control as="textarea" 
                    name="message"
                    onChange={this.handleChange} 
                    noValidate
                    rows={3} />
                    {formErrors.message.length > 0 && ( <span className="errorMessage">{formErrors.message}</span>)}
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

  