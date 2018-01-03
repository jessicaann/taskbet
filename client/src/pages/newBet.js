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
                    <div className="column col-12"style={{display: 'inline'}}>
                        <div className="">I bet&nbsp;
                            <div className="column col-3" style={{display: 'inline'}}>
                                <input style={{display: 'inline'}} className="form-input col-3" type='text' name='acceptorName' placeholder='Bob'/>
                            </div>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div className="">
                            that&nbsp;
                            <SelectInput selectName={'Who is doing the work?'} options={['you', 'I']} />&nbsp;will&nbsp;
                            <span class="chip">not
                                <a href="#" class="btn btn-clear" aria-label="Close" role="button"></a>
                            </span>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div class="form-autocomplete">
                            <div class="form-autocomplete-input form-input col-6 col-mx-auto">
                                <input class="form-input" type="text" placeholder="Describe the task here - i.e. &quot;wash the dishes&quot;"/>
                            </div>
                        </div>
                    </div>
                    <div className="column col-12">
                        <div className="">
                            by&nbsp;
                            <div className="column col-3" style={{display: 'inline'}}>
                                <input style={{display: 'inline'}} className="form-input col-3" type='date' name='dueDate' placeholder='12/31/2018'/>
                            </div>
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
