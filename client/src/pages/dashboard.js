import React from 'react';
import { connect } from 'react-redux';
import { getStatsId } from '../actions/statsActions';

import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';

export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            won: null,
            lost: null,
            challenged: null,
            accepted: null
        };
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            won: nextProps.stats.wons,
            lost: nextProps.stats.lost,
            challenged: nextProps.stats.challenged,
            accepted: nextProps.stats.accepted
        });
    }
    componentDidMount(){
        console.log(this.props)
        const userId = this.props.match.params.id;
        //dispatch get by id action and give it userId
        this.props.dispatch(getStatsId(userId));
    }
    render() {
        return (
            <div>
                
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