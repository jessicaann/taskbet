import React from 'react';
//import components
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import Input from '../components/input';
import TextArea from '../components/textarea';
import SelectInput from '../components/selectInput';

export const NewBet = (props) => {
    return (
        <div className="container grid-xl">
            <NavBar />
            <h1>Got an unwanted task? Bet on it and get 'er done!</h1>
            <form className="form-horizontal">
                <div className="columns">
                    <div className="column col-12">
                        <div className="">I bet&nbsp;
                            <div className="col-9">
                                <input className="form-input" type={type} name={inputName} placeholder={placeholder}/>
                            </div>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div className="">that&nbsp;
                            <SelectInput selectName={'Who is doing the work?'} options={['you', 'I']} />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

//I bet (person’s name {text input}) 
//that (I/you {dropdown}) will (not {dropdown}) (action form of task {autocomplete/text-input})
// by (due date).
//If I win this bet, (person's name (complete)) must (reward {autocomplete/text-input}).
//Who are we sending this wager to? Email address and last name
