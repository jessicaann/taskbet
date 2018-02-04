import React from 'react';
import { connect } from 'react-redux';
import { getBetId, editBet } from '../actions/betsActions';
import moment from 'moment';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';

export class EditBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            betId: props.match.params.id,
            task: null,
            reward: null,
            dueDate: null,
            acceptorName: null,
            acceptorEmail: null,
            details: null,
            comments: null,
            winner: null,
            status: null,
            uploadPhoto: null
        };
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            task: nextProps.bet.task,
            reward: nextProps.bet.reward,
            dueDate: nextProps.bet.dueDate,//wrap inside moment
            acceptorName: nextProps.bet.acceptor[0].fullName,
            acceptorEmail: nextProps.bet.acceptor[0].email,
            details: nextProps.bet.details,
            comments: nextProps.bet.comments,
            winner: nextProps.bet.winner ? nextProps.bet.winner[0].fullName : null,
            status: nextProps.bet.status,
            uploadPhoto: nextProps.bet.uploadPhoto
        });
    }
    componentDidMount(){
        const betId = this.props.match.params.id;
        //dispatch get by id action and give it betId
        this.props.dispatch(getBetId(betId));
    }
    inputChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    textAreaChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    editBet(event){
        event.preventDefault();
        this.props.dispatch(editBet(this.state));
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Edit your bet</h1>
                    <form onSubmit={event => this.editBet(event)}>
                        <Input type={'text'} labelName={'Task'} value={this.state.task} labelCol='3' inputCol='9' inputName={'task'} placeholder={'Task'} onChange={event => this.inputChange(event, 'task')}/>
                        <Input type={'text'} labelName={'Reward'}  value={this.state.reward} labelCol='3' inputCol='9' inputName={'reward'} placeholder={'Reward'} onChange={event => this.inputChange(event, 'reward')}/>
                        <Input type={'date'} labelName={'Due Date'}  value={this.state.dueDate} labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'Due Date'} onChange={event => this.inputChange(event, 'dueDate')}/>
                        <Input type={'text'} labelName={'Status'}  value={this.state.status} labelCol='3' inputCol='9' inputName={'status'} placeholder={'Status'} onChange={event => this.inputChange(event, 'status')}/>
                        <Input type={'text'} labelName={'Bet Acceptor'} value={this.state.acceptorName}  labelCol='3' inputCol='9' inputName={'acceptorName'} placeholder={'Acceptor Name'} onChange={event => this.inputChange(event, 'acceptorName')}/>
                        <Input type={'email'} labelName={'Acceptor Email'} value={this.state.acceptorEmail} labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'Acceptor Email'} onChange={event => this.inputChange(event, 'acceptorEmail')}/>
                        <TextArea labelName={'Additional Bet Details'} value={this.state.details} labelCol='3' inputCol='9' inputName={'details'} placeholder={'Wanna talk trash? This is the place to do it...'} onChange={event => this.textAreaChange(event, 'details')}/>
                        <Input type={'text'} labelName={'Winner'} value={this.state.winner} labelCol='3' inputCol='9' inputName={'winner'} placeholder={'Winner'} onChange={event => this.inputChange(event, 'winner')}/>
                        <Input type={'file'} labelName={'Picture Proof'} value={this.state.uploadPhoto} labelCol='3' inputCol='9' inputName={'uploadPhoto'} onChange={event => this.inputChange(event, 'uploadPhoto')}/>
                        <TextArea labelName={'Proof Comments'} value={this.state.comments} labelCol='3' inputCol='9' inputName={'comments'} placeholder={'Your last chance to say something sassy...'} onChange={event => this.textAreaChange(event, 'comments')}/>

                        <div className="btn-group btn-group-block">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary">Cancel</button>                    
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
        bet: state.betsReducer.currentBet
    };
};
export default connect (mapStateToProps)(EditBet);
