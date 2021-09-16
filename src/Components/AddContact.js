import { react } from '@babel/types';
import React from 'react';
import './App.css';

// using class components 
class AddContact extends React.Component
{
    // state in class components 
    state = {
        name : "",
        gmaail : ""
    }

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.gmail === "")
        {
            alert("All the fields are mandatory");
            return;
        }
        this.props.addContactHandler(this.state);
        // console.log(this.state);

        // update state with setState 
        this.setState({name : "", gmail : ""});
    }

    render(){
        return(
            <div className="addContactStyle">
                <div className="heading">
                    <br />
                    <h3>Add Contact</h3>
                </div>
                <form onSubmit={this.add}>
                    <div className="mb-3">
                        <label for="name" class="form-label">Name</label>

                        <input type="name" class="form-control" id="name"
                        value={this.state.name}
                        onChange={(event) => this.setState({name : event.target.value})}/>
                    </div>
                    <div className="mb-3">
                        <label for="gmail" class="form-label">Gmail</label>
                        <input type="gamil" class="form-control" id="gmail"
                        value={this.state.gmail}
                        onChange={(event) => this.setState({gmail: event.target.value})}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Add</button>
                </form>
                <br />
            </div>
        );
    }
}

export default AddContact;