import React from 'react';
import { connect } from 'react-redux';
import { getBetId, editBet } from '../actions/actions';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';

export class EditBet extends React.Component {
    constructor(props) {
        super(props);
        this.formData = {
            betId: props.match.params.id,
            taskName: null,
            reward: null,
            dueDate: null,
            acceptor: null,
            acceptorEmail: null,
            details: null,
            comments: null,
            winner: null,
            uploadPhoto: null
        };
    }
    componentDidMount(){
        console.log(this.props);
        const betId = this.props.match.params.id;
        //dispatch get by id action and give it betId
        this.props.dispatch(getBetId(betId));
    }
    inputChange(event, name){
        this.formData = Object.assign(this.formData, {[name]: event.currentTarget.value});
    }
    textAreaChange(event, name){
        this.formData = Object.assign(this.formData, {[name]: event.currentTarget.value});
    }
    editBet(event){
        event.preventDefault();
        this.props.dispatch(editBet(this.formData));
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Edit your bet</h1>
                    <form onSubmit={event => this.editBet(event)}>
                        <Input type={'text'} labelName={'Task'} labelCol='3' inputCol='9' inputName={'task'} placeholder={'Task'} onChange={event => this.inputChange(event, 'taskName')}/>
                        <Input type={'text'} labelName={'Reward'}  labelCol='3' inputCol='9' inputName={'reward'} placeholder={'Reward'} onChange={event => this.inputChange(event, 'reward')}/>
                        <Input type={'date'} labelName={'Due Date'}  labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'Due Date'} onChange={event => this.inputChange(event, 'dueDate')}/>
                        <Input type={'text'} labelName={'Bet Acceptor'}  labelCol='3' inputCol='9' inputName={'acceptor'} placeholder={'Acceptor Name'} onChange={event => this.inputChange(event, 'acceptorName')}/>
                        <Input type={'email'} labelName={'Email'}  labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'Acceptor Email'} onChange={event => this.inputChange(event, 'acceptorEmail')}/>
                        <TextArea labelName={'Additional Bet Details'} labelCol='3' inputCol='9' inputName={'details'} placeholder={'Wanna talk trash? This is the place to do it...'} onChange={event => this.textAreaChange(event, 'details')}/>
                        <Input type={'text'} labelName={'Winner'}  labelCol='3' inputCol='9' inputName={'winner'} placeholder={'Winner'} onChange={event => this.inputChange(event, 'winner')}/>
                        <Input type={'file'} labelName={'Picture Proof'}  labelCol='3' inputCol='9' inputName={'uploadPhoto'} onChange={event => this.inputChange(event, 'uploadPhoto')}/>
                        <TextArea labelName={'Proof Comments'}  labelCol='3' inputCol='9' inputName={'comments'} placeholder={'Your last chance to say something sassy...'} onChange={event => this.textAreaChange(event, 'comments')}/>

                        <div className="btn-group btn-group-block">
                            <button type="submit" class="btn btn-primary">Submit</button>
                            <button type="button" class="btn btn-secondary">Cancel</button>                    
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}
export default connect ()(EditBet);
