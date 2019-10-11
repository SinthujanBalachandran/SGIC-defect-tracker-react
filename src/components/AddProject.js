import React, { Component } from 'react';
import './AddProject.css';
import axios from 'axios';
class AddProject extends Component {
    state = {
        projectName: '',
        projectDescription: '',
    }

    changeName = event => {
        this.setState({ projectName: event.target.value });
    }

    changeDescription = event => {
        this.setState({ projectDescription: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const save ={
            projectName: this.state.projectName,
            projectDescription: this.state.projectDescription 
        }

        axios.post('http://localhost:8083/test/api/v1/project',save)
            .then(res => {
                if (res.status === 200) {
                    alert("Project has been successfully added..!");
                    window.location.reload();
                    }
                    console.log(res);
            });
            this.setState({
                projectName: "",
                projectDescription: ""
                
                });


    }
    // componentDidMount() {
    //     axios.post('')
    //         .then(res => { })
    // }
    render() {
        return (
            
               

            <div className="da">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                <input type="text" name="projectName" value={this.state.projectName} placeholder="Project Name" onChange={this.changeName} />
                    </label>
                    <label>
                        Project Description:
                <input type="text" name="projectdesc" value={this.state.projectDescription} placeholder="Project Description" onChange={this.changeDescription} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div> 
            );
    }
}




export default AddProject;