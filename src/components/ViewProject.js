import React, { Component } from 'react';
import './ViewProject.css';
import axios from 'axios';

class ViewProject extends Component {
    state = {
        projects: []
    }
    componentDidMount(){
        axios.get('http://localhost:8081/defect/api/v1/project')
        .then(res =>{this.setState({projects:res.data})
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

                    {this.state.projects.map(p=>{
                        return(
                            <tr>
                        <td>{p.projectname}</td>
                        <td>{p.projectdesc}</td>
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
