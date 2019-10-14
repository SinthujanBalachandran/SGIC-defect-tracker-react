import React, { Component } from 'react';
import './AddProject.css';
import axios from 'axios';

class AddProject extends Component {
    state = {
        projectName: '',
        projectDescription: '',
    }

    handleChangeValue = event => {
        this.setState({ [event.target.name]: event.target.value });
        
    }

   

    handleSubmit = event => {
        event.preventDefault();
        const save ={projectname: this.state.projectName,projectdesc: this.state.projectDescription }

        axios.post('http://localhost:8083/test/api/v1/project',save)
            .then(res => {
                if (res.status === 200) {
                    alert("Project has been successfully added..!");
                    //window.location.reload();
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
        const {projectDescription,projectName} = this.state
        return (
            <div className="da">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Project Name:
                <input type="text" name="projectName" value={projectName} placeholder="Project Name" onChange={this.handleChangeValue} />
                    </label>
                    <label>
                        Project Description:
                <input type="text" name="projectDescription" value={projectDescription} placeholder="Project Description" onChange={this.handleChangeValue} />
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div> 
            );
    }
}




export default AddProject;