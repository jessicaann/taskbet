import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { deleteSession } from '../actions/usersActions';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';

export class Logout extends React.Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(this.props);
        this.props.dispatch(deleteSession());
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className= "center card">You've been successfully logged out of TaskBet.
                        <Link className="mb-3 mb-md-0 ml-md-3" to='/login'>Log me back in!</Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default connect()(Logout);