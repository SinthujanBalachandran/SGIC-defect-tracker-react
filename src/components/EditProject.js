import React, { Component } from 'react';
import './AddProject.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
class EditProject extends Component {
    state = {
        projectName: '',
        projectDescription: '',
        id: ''
    }
    componentDidMount() {
        const editId = this.props.match.params.id
        axios.get("http://localhost:8083/test/api/v1/project/")
            .then(result => {
                result.data.map(res => {
                    if (res.id == editId) {
                        this.setState({
                            id: res.id,
                            projectName: res.projectname,
                            projectDescription: res.projectdesc

                        });
                    }
                })


            });
    }
    handleChangepname1 = (event) => {
        this.setState({
            projectName: event.target.value
        });
    }

    handleChangepdes1 = (event) => {
        this.setState({
            projectDescription: event.target.value
        });
    }

    getToList = () => {
        this.props.history.push("/projectlist")
    }

    onSubmithanlde = (event) => {
        event.preventDefault()
        console.log("dsdhsjd")
        var url = `http://localhost:8083/test/api/v1/project/${this.props.match.params.id}`
        axios.put(url, { projectname: this.state.projectName, projectdesc: this.state.projectDescription })
            .then(res => {
                if (res.status == 200) {
                    window.open("/viewProject")
                }
            })
    }


    render() {
        return (
            <div>

                <div className="da">
                    <div >
                        <form onSubmit={this.onSubmithanlde}>

                            <table>
                                <tr>
                                    <td>
                                        <input type="text" name="pojectname" placeholder="Project Name*" value={this.state.projectName} onChange={this.handleChangepname1} />
                                    </td>
                                    <td>
                                        <input type="text" name="projectdescription" placeholder="Project Discription" value={this.state.projectDescription} onChange={this.handleChangepdes1} />
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <th> <input type="submit" value="Edit" /></th>

                                    </th>
                                    <th>
                                        <Link to="/viewProject">
                                            <th> <input type="button" value="Back" onClick={this.getToList} /></th>
                                        </Link>
                                    </th>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProject;