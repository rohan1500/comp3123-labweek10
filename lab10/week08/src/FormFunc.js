import React, { Component } from 'react'

export default class FormFunc extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: '',
            fullname: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalcode: ''
        }
    }

    updateState = e =>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    readFormValues = e => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))
    }

    render() {
        return (
            <div>
                <h1>Data Entry Form</h1>
                <form onSubmit={this.readFormValues}>
                    <label>Email</label>
                    <input name="email" placeholder="Enter email" type="email" onChange={this.updateState} required></input><br/>
                    <label>Name</label>
                    <input name="fullname" placeholder="Full name" type="text" onChange={this.updateState} required></input><br/>
                    <label>Address</label>
                    <input name="address" placeholder="1234 Main St" type="text" onChange={this.updateState} required></input><br/>
                    <label>Address 2</label>
                    <input name="address2" placeholder="Apartment, studio, or floor" type="text" onChange={this.updateState}></input><br/>
                    <label>City</label>
                    <input name="city" placeholder="City" type="text" onChange={this.updateState} required></input> <br/>
                    <label>Province</label>
                    <select name="province" onChange={this.updateState} required>
                        <option value="">Choose...</option>
                        <option value="Alberta">Alberta</option>
                        <option value="British Columbia">British Columbia</option>
                        <option value="Manitoba">Manitoba</option>
                        <option value="New Brunswick">New Brunswick</option>
                        <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                        <option value="Nova Scotia">Nova Scotia</option>
                        <option value="Ontario">Ontario</option>
                        <option value="Prince Edward Island">Prince Edward Island</option>
                        <option value="Quebec">Quebec</option>
                        <option value="Saskatchewan">Saskatchewan</option>
                    </select><br/>
                    <label>Postal Code</label>
                    <input name="postalcode" placeholder="A1B 2C3" type="text" onChange={this.updateState} required></input><br/>
                    <input type="checkbox" required></input><label id="terms">Agree terms & Condition?</label><br/>
                    <input type="submit" value="Submit"></input>
                </form>
                <div>
                    <h2><span class="display_label">Email: </span><span class="display_text">{this.state.email}</span></h2>
                    <h2><span class="display_label">Full name: </span><span class="display_text">{this.state.fullname}</span></h2>
                    <h2><span class="display_label">Address: </span><span class="display_text">{this.state.address} {this.state.address2}</span></h2>
                    <h2><span class="display_label">City: </span><span class="display_text">{this.state.city}</span></h2>
                    <h2><span class="display_label">Province: </span><span class="display_text">{this.state.province}</span></h2>
                    <h2><span class="display_label">Postal Code: </span><span class="display_text">{this.state.postalcode}</span></h2>
                </div>

            </div>
        )
    }
}
