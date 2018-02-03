import React from 'react';
import { connect } from 'react-redux';
import { createNewBet } from '../actions/actions';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import SelectInput from '../components/selectInput';
import Input from '../components/input';
import TextArea from '../components/textarea';

//add the new select options to edit bet and to the database
export class NewBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptorFirstName: null,
            acceptorLastName: null,
            pronoun: null,
            willOrWillNot: null,
            task: null,
            dueDate: null,
            reward: null,
            details: null,
            acceptorEmail: null,
            challenger: '59074c7c057aaffaafb0da72',
        };
    }
    autoComplete(event){
    //dispatch an action that 
        return;
    }
    inputChange(event, name){
        this.setState({[name]: event.currentTarget.value});
        console.log(name, event.currentTarget.value);

    }
    selectChange(event, name){
        this.setState({[name]: event.currentTarget.value});

    }
    textAreaChange(event, name){
        this.setState({[name]: event.currentTarget.value});
    }
    createBet(event){
        event.preventDefault();
        this.props.dispatch(createNewBet(this.state));
    }
    render() {
        return (
            <div className="wrapper">
                <NavBar />
                <div className="container">
                    <h1>Got an unwanted task?</h1>
                    <h5>Bet on it and get 'er done!</h5>
                    <form className="form-horizontal" onSubmit={event => this.createBet(event)}>
                        <Input type={'text'} value={this.state.acceptorFirstName} labelName={'I bet'}  labelCol='3' inputCol='9' inputName={'acceptorFirstName'} placeholder={'Bob Jenkins'} onChange={event => this.inputChange(event, 'acceptorFirstName')}/>     
                        <Input type={'text'} value={this.state.acceptorLastName} labelName={'I bet'}  labelCol='3' inputCol='9' inputName={'acceptorLastName'} placeholder={'Bob Jenkins'} onChange={event => this.inputChange(event, 'acceptorLastName')}/>
                        <div className="form-group row">
                            <label className= {'col-form-label col-3'}>that</label>
                            <SelectInput value={this.state.pronoun} selectName={'who'} options={['select a pronoun','you', 'I', 'he', 'she', 'they']} onChange={event => this.selectChange(event, 'pronoun')}/>
                            <SelectInput value={this.state.willOrWillNot} selectName={'willOrWillNot'} options={['select one','will', 'will not']} onChange={event => this.selectChange(event, 'willOrWillNot')}/>
                        </div>
                        <Input type={'text'} value={this.state.task} inputCol='12' inputName={'task'} placeholder={'Describe the task here - i.e. wash the dishes'} onChange={event => this.inputChange(event, 'task')}/>
                        <Input type={'date'} value={this.state.dueDate} labelName={'by'}  labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'12/31/2018'} onChange={event => this.inputChange(event, 'dueDate')}/>
                        <div className="form-group row">
                            <div className='col'>
                            If I win this TaskBet,
                            </div>
                        </div>
                        <Input type={'text'} value={this.state.acceptorFirstName} inputCol='12' inputName={'acceptor'} placeholder={'Auto Complete Acceptor Name - Bob'} />   
                        <Input type={'text'} value={this.state.reward} labelName={'has to'}  labelCol='3' inputCol='9' inputName={'reward'} placeholder={'buy me dinner'} onChange={event => this.inputChange(event, 'reward')}/>
                        <TextArea value={this.state.details} labelName={'Additional Bet Details'} value={this.state.details} labelCol='3' inputCol='9' inputName={'details'} placeholder={'Wanna talk trash or make your bet crystal clear? This is the place to do it...'} onChange={event => this.textAreaChange(event, 'details')}/>
                        <Input type={'email'} value={this.state.acceptorEmail} labelName={'Send the bet to:'}  labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'bob@bob.com'} onChange={event => this.inputChange(event, 'acceptorEmail')}/>
                        <div className="btn-group" role="group">
                            <button className="btn btn-link">Cancel</button>
                            <button className="btn btn-success" type="submit">Bet on it</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>        );
    }
}

export default connect ()(NewBet);
//how do I display a success message when 

//wrap each question in a hero to make it move like typeform.