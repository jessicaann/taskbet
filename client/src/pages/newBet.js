import React from 'react';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import SelectInput from '../components/selectInput';
import Input from '../components/input';

export class NewBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            acceptorName: null,
            youOrI: null,
            willOrWillNot: null,
            taskName: null,
            dueDate: null,
            reward: null,
            acceptorEmail: null
        };
    }
    inputChange(event, name){
        console.log(event.currentTarget.value, name);
        this.setState({
            [name]: event.currentTarget.value
        });
    }
    selectChange(event, name){
        console.log(event.currentTarget.value, name);
        this.setState({
            [name]: event.currentTarget.value
        });
    }
    createBet(event){
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="wrapper">
                <NavBar />
                <div className="container">
                    <h1>Got an unwanted task?</h1>
                    <h5>Bet on it and get 'er done!</h5>
                    <form className="form-horizontal" onSubmit={event => this.createBet(event)}>
                        <Input type={'text'} labelName={'I bet'}  labelCol='3' inputCol='9' inputName={'acceptor'} placeholder={'Bob Jenkins'} onChange={event => this.inputChange(event, 'acceptorName')}/>     
                        <div className="form-group row">
                            <label className= {'col-form-label col-3'}>that</label>
                            <SelectInput selectName={'youOrI'} options={['you', 'I']} onChange={event => this.selectChange(event, 'youOrI')}/>
                            <SelectInput selectName={'willOrWillNot'} options={['will', 'will not']} onChange={event => this.selectChange(event, 'willOrWillNot')}/>
                        </div>
                        <Input type={'text'} inputCol='12' inputName={'task'} placeholder={'Describe the task here - i.e. wash the dishes'} onChange={event => this.inputChange(event, 'taskName')}/>
                        <Input type={'date'} labelName={'by'}  labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'12/31/2018'} onChange={event => this.inputChange(event, 'dueDate')}/>
                        <div className="form-group row">
                            <div className='col'>
                            If I win this TaskBet,
                            </div>
                        </div>
                        <Input type={'text'} inputCol='12' inputName={'acceptor'} placeholder={'Auto Complete Acceptor Name - Bob'} />   
                        <Input type={'text'} labelName={'has to'}  labelCol='3' inputCol='9' inputName={'reward'} placeholder={'buy me dinner'} onChange={event => this.inputChange(event, 'reward')}/>
                        <Input type={'email'} labelName={'Send the bet to:'}  labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'bob@bob.com'} onChange={event => this.inputChange(event, 'acceptorEmail')}/>
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


//wrap each question in a hero to make it move like typeform.