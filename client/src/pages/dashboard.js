import React from 'react';
import { connect } from 'react-redux';
import { getStatsId } from '../actions/statsActions';
import { getUserId } from '../actions/usersActions';
import UnorderedList from '../components/unorderedList';
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import './dashboard.css';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            won: [],
            lost: [],
            challenged: [],
            accepted: [],
            userData: null
        };
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            won: nextProps.stats.won,
            lost: nextProps.stats.lost,
            challenged: nextProps.stats.challenged,
            accepted: nextProps.stats.accepted,
        });
    }
    componentDidMount(){
        console.log(this.props, this.state);
        const userId = this.props.match.params.id;
        this.props.dispatch(getStatsId(userId));
        //this.props.dispatch(getUserId(userId));
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <NavBar loggedIn="loggedIn" />
                <div className="container">
                    <h2>Accepted Bets</h2>
                    <UnorderedList items={this.state.accepted}/>
                    <h2>Challenged Bets</h2>
                    <UnorderedList items={this.state.challenged}/>
                    <h2>Won Bets</h2>
                    <UnorderedList items={this.state.won}/>
                    <h2>Lost Bets</h2>
                    <UnorderedList items={this.state.lost}/>
                </div>
                <Footer />
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    return  {
        stats: state.statsReducer.betStats,
        userData: state.usersReducer.currentUser
    };
};
export default connect (mapStateToProps)(Dashboard);