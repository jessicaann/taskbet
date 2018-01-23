import React from 'react';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';

export class EditBet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    editBet(event){
        event.preventDefault();
        
        console.log(this.formData);
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h1>Edit your bet</h1>
                    <form onSubmit={event => this.editBet(event)}>
                        <Input type={'text'} labelName={'Task'} labelCol='3' inputCol='9' inputName={'task'} placeholder={'Task'} ref={input=> (this.formData.taskName= input)}/>
                        <Input type={'text'} labelName={'Reward'}  labelCol='3' inputCol='9' inputName={'reward'} placeholder={'Reward'} ref={input=> (this.reward= input)}/>
                        <Input type={'date'} labelName={'Due Date'}  labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'Due Date'} ref={input=> (this.dueDate= input)}/>
                        <Input type={'text'} labelName={'Bet Acceptor'}  labelCol='3' inputCol='9' inputName={'acceptor'} placeholder={'Acceptor Name'} ref={input=> (this.acceptor= input)}/>
                        <Input type={'email'} labelName={'Email'}  labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'Acceptor Email'} ref={input=> (this.acceptorEmail= input)}/>
                        <TextArea labelName={'Additional Bet Details'} labelCol='3' inputCol='9' inputName={'details'} placeholder={'Wanna talk trash? This is the place to do it...'} ref={input=> (this.details= input)}/>
                        <Input type={'text'} labelName={'Winner'}  labelCol='3' inputCol='9' inputName={'winner'} placeholder={'Winner'} ref={input=> (this.winner= input)}/>
                        <Input type={'file'} labelName={'Picture Proof'}  labelCol='3' inputCol='9' inputName={'uploadPhoto'} ref={input=> (this.uploadPhoto= input)}/>
                        <TextArea labelName={'Proof Comments'}  labelCol='3' inputCol='9' inputName={'comments'} placeholder={'Your last chance to say something sassy...'} ref={input=> (this.comments= input)}/>

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