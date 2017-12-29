import React from 'react';
import {connect} from 'react-redux';
//import components
import Footer from '../components/footer';
import NavBar from '../components/navbar';

export const BetForm = (props) => {
    return (
        <div class="container grid-xl">
            <NavBar />
            <h1>Place your bet</h1>
            <div>
                <form class="form-horizontal">
                    <div class="form-group">
                        <div class="col-3">
                            <label class="form-label">Task</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="task" placeholder="Task"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Reward</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="reward" placeholder="Reward"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Due Date</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="dueDate" placeholder="Due Date"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Acceptor</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="acceptor" placeholder="Acceptor"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Additional Details</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="details" placeholder="Additional Details"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Winner</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="winner" placeholder="Winner"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Winner</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="winner" placeholder="Winner"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Verification</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="file" name="UploadPhoto" placeholder="Upload Photo Verification"/>
                        </div>
                        <div class="col-3">
                            <label class="form-label">Verification Comments</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="text" name="comments" placeholder="Comments"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}