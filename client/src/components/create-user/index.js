import React, { Component } from 'react';
import Jumbotron from '../jumbotron'
import Axios from 'axios';

export default class UsersList extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserGender = this.onChangeUserGender.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_name: '',
            user_gender: ''
        }
    }

    onChangeUserName(e) {
        this.setState({
            user_name: e.target.value
        });
    }

    onChangeUserGender(e) {
        this.setState({
            user_gender: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log('New user submitted:');
        console.log(`User name: ${this.state.user_name}`);
        console.log(`User gender: ${this.state.user_gender}`);

        const newUser = {
            name: this.state.user_name,
            gender: this.state.user_gender
        }

        Axios.post('http://localhost:3000/api/routes', newUser)

            .then(res => console.log(res.data));


        this.setState({
            user_name: '',
            user_gender: ''
        })
    }

    

    render() {
        return (
            <div>
                <Jumbotron>
                    <h3>Welcome to CocoApp Create User!</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.user_name}
                                onChange={this.onChangeUserName}
                            />
                        </div>
                        <div className="form-group">
                            <label>Gender: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.user_gender}
                                onChange={this.onChangeUserGender}
                            />
                        </div>
                        <div className="image">
                            <input type="file" onChange={this.fileSelectedHandler} />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Create User" className="btn btn-primary" />
                            <button onClick={this.fileUploadHandler}>Upload</button>
                        </div>
                    </form>


                </Jumbotron>
                
            </div>
        )
    }
}