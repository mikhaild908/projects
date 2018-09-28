import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Project from '../components/Project';

class ProjectList extends Component {
    state = {
        projects: [],
        searchString: ''
    };

    constructor() {
        super();
        this.getProjects();
    }

    getProjects() {
        // TODO:
        this.setState({projects:
            [
                {
                    fields: {
                        title: 'Number # 1',
                        description: 'This is Project # 1',
                        url: 'http://clickanthem.com'
                    }
                },
                {
                    fields: {
                        title: 'Number # 2',
                        description: 'This is Project # 2',
                        url: 'http://clickanthem.com'
                    }
                },
                {
                    fields: {
                        title: 'Number # 3',
                        description: 'This is Project # 3',
                        url: 'http://clickanthem.com'
                    }
                },
            ]
        }); 
    }

    onSearchInputChange = (event) => {
        if(event.target.value) {
            this.setState({searchString: event.target.value});
        }
        else {
            this.setState({searchString: ''});
        }

        this.getProjects();
    };

    render() {
        return (
            <div>
                {
                    this.state.projects ? (
                        <div>
                            <TextField style={{padding: 24}}
                                       id='searchInput'
                                       placeholder='Search for projects'
                                       margin='normal'
                                       onChange={this.onSearchInputChange}/>
                            <Grid container spacing={24} style={{padding: 24}}>
                                { this.state.projects.map(currentProject => (
                                    <Grid item xs={12} sm={6} lg={4} xl={3}>
                                        <Project project={currentProject}/>
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