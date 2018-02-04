import React from 'react';
import { connect } from 'react-redux';
import { getStatsId } from '../actions/statsActions';
import UnorderedList from '../components/unorderedList';

import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            won: [],
            lost: [],
            challenged: [],
            accepted: []
        };
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            won: nextProps.stats.won,
            lost: nextProps.stats.lost,
            challenged: nextProps.stats.challenged,
            accepted: nextProps.stats.accepted
        });
    }
    componentDidMount(){
        console.log(this.props, this.state)
        const userId = this.props.match.params.id;
        //dispatch get by id action and give it userId
        this.props.dispatch(getStatsId(userId));
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h2>Acccepted Bets</h2>
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
    return  {
        stats: state.statsReducer.betStats
    };
};
export default connect (mapStateToProps)(Dashboard);