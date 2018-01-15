import React from 'react';
//import components
import Footer from '../components/footer/footer';
import NavBar from '../components/navbar/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';

export const EditBet = (props) => {
    return (
        <div>
            <NavBar />
            <div className="container">
                <h1>Edit your bet</h1>
                <form>
                    <Input type={'text'} labelName={'Task'} labelCol='3' inputCol='9' inputName={'task'} placeholder={'Task'}/>
                    <Input type={'text'} labelName={'Reward'}  labelCol='3' inputCol='9' inputName={'reward'} placeholder={'Reward'}/>
                    <Input type={'date'} labelName={'Due Date'}  labelCol='3' inputCol='9' inputName={'dueDate'} placeholder={'Due Date'}/>
                    <Input type={'text'} labelName={'Bet Acceptor'}  labelCol='3' inputCol='9' inputName={'acceptor'} placeholder={'Acceptor Name'}/>
                    <Input type={'email'} labelName={'Email'}  labelCol='3' inputCol='9' inputName={'acceptorEmail'} placeholder={'Acceptor Email'}/>
                    <TextArea labelName={'Additional Bet Details'} labelCol='3' inputCol='9' inputName={'details'} placeholder={'Wanna talk trash? This is the place to do it...'} />
                    <Input type={'text'} labelName={'Winner'}  labelCol='3' inputCol='9' inputName={'winner'} placeholder={'Winner'}/>
                    <Input type={'file'} labelName={'Picture Proof'}  labelCol='3' inputCol='9' inputName={'uploadPhoto'} />
                    <TextArea labelName={'Proof Comments'}  labelCol='3' inputCol='9' inputName={'comments'} placeholder={'Your last chance to say something sassy...'} />

                    <div className="btn-group btn-group-block">
                        <button type="submit" class="btn btn-primary">Submit</button>
                        <button type="button" class="btn btn-secondary">Cancel</button>                    </div>
                </form>
            </div>
        </div>
    );
};