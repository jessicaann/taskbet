import React from 'react';
import {Redirect} from 'react-router';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/usersActions';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';

//add the new select options to edit bet and to the database
export class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            authToken: null,
            firstName: null,
            lastName: null,
            password: null,
            email: null            
        };
    }
    inputChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    textAreaChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    createUser(event){
        event.preventDefault();
        this.props.dispatch(createNewUser(this.state));
    }
    render() {
        console.log(this.props.authToken);
        if(this.props.authToken){
            return (
                <Redirect to="/bets" />
            );
        }
        return (
            <div className="wrapper">
                <NavBar />
                <div className="container">
                    <h1>Create New Account</h1>
                    <h5>Don't wait any </h5>
                    <form className="form-horizontal" onSubmit={event => this.createUser(event)}>
                        <Input type={'text'} value={this.state.firstName} labelName={'First Name'}  labelCol='3' inputCol='9' inputName={'firstName'} placeholder={'First Name'} onChange={event => this.inputChange(event, 'firstName')}/>     
                        <Input type={'text'} value={this.state.lastName} labelName={'Last Name'}  labelCol='3' inputCol='9' inputName={'lastName'} placeholder={'Last Name'} onChange={event => this.inputChange(event, 'lastName')}/>
                        <Input type={'email'} value={this.state.email} labelName={'Email'}  labelCol='3' inputCol='9' inputName={'email'} placeholder={'Email'} onChange={event => this.inputChange(event, 'email')}/>
                        <Input type={'password'} value={this.state.password} labelName={'Password'} labelCol='3' inputCol='9' inputName={'password'} placeholder={'Create Password'} onChange={event => this.inputChange(event, 'password')}/>
                        <div className="btn-group" role="group">
                            <button className="btn btn-link">Cancel</button>
                            <button className="btn btn-success" type="submit">Create Account</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        user: state.usersReducer.currentUser,
        authToken: state.usersReducer.authToken
    };
};
export default connect (mapStateToProps)(NewUser);