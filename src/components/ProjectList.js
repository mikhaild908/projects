import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Project from '../components/Project';
import axios from 'axios';

class ProjectList extends Component {
    state = {
        projects: [],
        filteredProjects: [],
        searchString: ''
    };

    componentDidMount() {
        axios('projects.json')
            .then(result => this.setState({projects: result.data, filteredProjects: result.data.filter(() => true)}))
            .catch(error => console.log(error));
    }

    onSearchInputChange = (event) => {
        if(event.target.value) {
            this.setState({filteredProjects:
                this.state.projects.filter(project => project.fields.description.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)});
        }
        else {
            this.setState({filteredProjects: this.state.projects.filter(project => true)});
        }
    };

    render() {
        return (
            <div>
                {
                    this.state.filteredProjects ? (
                        <div>
                            <TextField style={{padding: 24}}
                                       id='searchInput'
                                       placeholder='Search for projects'
                                       margin='normal'
                                       onChange={this.onSearchInputChange}/>
                            <Grid container spacing={24} style={{padding: 24}}>
                                { this.state.filteredProjects.map(currentProject => (
                                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                                        <Project project={currentProject} key={currentProject.key}/>
                                    </Grid>
                                ))}
                            </Grid>
                        </div>
                    ): 'No projects found.'
                }
            </div>
        );
    }
}

export default ProjectList;