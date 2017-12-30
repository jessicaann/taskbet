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
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Task</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="text" name="task" placeholder="Task"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Reward</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="text" name="reward" placeholder="Reward"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Due Date</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="date" name="dueDate" placeholder="Due Date"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Acceptor</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="text" name="acceptorName" placeholder="Acceptor Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Acceptor Email</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="email" name="acceptoremail" placeholder="Acceptor Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Additional Details</label>
                        </div>
                        <div className="col-9">
                            <textarea className="form-input" type="text" name="details" placeholder="Additional Details"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Winner</label>
                        </div>
                        <div className="col-9">
                            <input className="form-input" type="text" name="winner" placeholder="Winner"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-3">
                            <label className="form-label">Verification</label>
                        </div>
                        <div class="col-9">
                            <input className="form-input" type="file" name="UploadPhoto" placeholder="Upload Photo Verification"/>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-3">
                            <label class="form-label">Verification Comments</label>
                        </div>
                        <div class="col-9">
                            <textarea className="form-input" type="text" name="comments" placeholder="Comments"></textarea>
                        </div>
                    </div>
                    <div className="btn-group btn-group-block">
                        <button className="btn btn-success" type="submit">Submit</button>
                        <button className="btn btn-error">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}