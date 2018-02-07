import React from 'react';
import { connect } from 'react-redux';
import { createNewSession } from '../actions/usersActions';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';
import './login.css';

export class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null
        };
    }
    inputChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    onSubmit(event){
        event.preventDefault();
        const password = this.state.password.trim();
        const email = this.state.email.trim();
        const data = {
            password: password,
            email: email
        };
        this.props.dispatch(createNewSession(data));
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.authToken){
            this.props.history.push('/stats/59074c7c057aaffaafb0da71');
        }
    }
    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div>
                <NavBar />
                <div className="container">
                    <form className="login-form" onSubmit={event => this.onSubmit(event)}>
                        {error}
                        <div className="center card">
                            <Input type={'email'}  inputName={'email'} placeholder={'Email'} onChange={event => this.inputChange(event, 'email')} />
                            <Input type={'password'} inputName= {'password'} placeholder={'Password'} onChange={event => this.inputChange(event, 'password')} />
                            <button className="btn btn-success col-3" type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.usersReducer.currentUser,
        authToken: state.usersReducer.authToken
    };
};
export default connect (mapStateToProps)(Login);