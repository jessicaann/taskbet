import React from 'react';
//import components
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';

export const EditBet = (props) => {
    return (
        <div className="container grid-xl">
            <NavBar />
            <h1>Edit your bet</h1>
            <div>
                <form className="form-horizontal">
                    <Input type={'text'} labelName={'Task'}  inputName={'task'} placeholder={'Task'}/>
                    <Input type={'text'} labelName={'Reward'}  inputName={'reward'} placeholder={'Reward'}/>
                    <Input type={'date'} labelName={'Due Date'}  inputName={'dueDate'} placeholder={'Due Date'}/>
                    <Input type={'text'} labelName={'Who is accepting this bet?'}  inputName={'acceptor'} placeholder={'Acceptor Name'}/>
                    <Input type={'email'} labelName={'Email'}  inputName={'acceptorEmail'} placeholder={'Acceptor Email'}/>
                    <TextArea labelName={'Additional Bet Details'}  inputName={'details'} placeholder={'Wanna talk trash? This is the place to do it...'} />
                    <Input type={'text'} labelName={'Winner'}  inputName={'winner'} placeholder={'Winner'}/>
                    <Input type={'file'} labelName={'Verify the completion of a task with a photo'}  inputName={'uploadPhoto'} />
                    <TextArea labelName={'Verification Comments'}  inputName={'comments'} placeholder={'Your last chance to say something sassy...'} />

                    <div className="btn-group btn-group-block">
                        <button className="btn btn-success" type="submit">Submit</button>
                        <button className="btn btn-error">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};