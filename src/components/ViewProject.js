import React, { Component } from 'react';
import './ViewProject.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

class ViewProject extends Component {
    state = {
        projects: []
    }
    handleDelete = id => {
        axios.delete('http://localhost:8083/test/api/v1/project/' + id);
        window.location.reload(true);
    }

    getToUpdate = id => {
        this.props.history.push('/update/${id}');
    }

    componentDidMount() {
        axios.get('http://localhost:8083/test/api/v1/project')
            .then(res => {
                this.setState({ projects: res.data })
            });
    }

    render() {
        // console.log(this.state.projects)
        return (
            <div className="da">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>

                    {this.state.projects.map(p => {
                        return (
                            <tr>
                                
                                <td>{p.projectName}</td>
                                <td>{p.projectDescription}</td>
                                
                                
                             <a href={`/editProject/${p.id}`} > <td><input type ="button" value="Edit"/></td></a> 
                               
                                <td><input type="button" value="Delete" onClick={() => this.handleDelete(p.id)} /></td>
                            </tr>
                        )
                    })}
                </table>

            </div>
            // <div className="da">
            //     <h1>This is View Project</h1>
            // </div>
        );
    }
}

export default ViewProject;
// function ViewProject(){
// return(
//     <div className="da">
//         <h1>This is View Project</h1>
//     </div>
// );
// }
// export default ViewProject;
