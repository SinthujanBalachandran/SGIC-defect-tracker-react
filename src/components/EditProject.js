import React, { Component } from 'react';
import './AddProject.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class EditProject extends Component {
    state = {
        projectName: '',
        projectDescription: ''
    }
    componentDidMount() {
        axios.get("http://localhost:8083/test/api/v1/project/" + this.props.match.params.id
        )
          .then(result => {
            console.log(result);
            this.setState({
    
              projectName: result.data.projectName,
              projectDescription: result.data.projectDescription
    
            });
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
        event.preventDefault();
        const url = "http://localhost:8083/test/api/v1/updateproject/"
        axios.put(url + this.props.match.params.id, { projectName: this.state.projectName, projectDescription: this.state.projectDescription })
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
                      <Link to ="/viewProject">
                        <th> <input id="btn-back" type="button" value="Edit"/></th>
                        </Link>
                      </th>
                      <th>
                          <Link to ="/viewProject">
                        <th> <input id="btn-back" type="button" value="Back" onClick={this.getToList} /></th>
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