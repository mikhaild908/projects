import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Project = (props) => {
    return(
        <div>
            {
                props.project ? (
                    <Card>
                        <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                                   image={props.project.fields.imageurl}
                                   title={props.project.fields.title} />
                        <CardContent>
                            <Typography gutterBottom variant='headline' component='h2'>
                                {props.project.fields.title}
                            </Typography>
                            <Typography component='p'>
                                {props.project.fields.description}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size='small' color='primary' href={props.project.fields.url} target='_blank'>
                                Go to project
                            </Button>
                        </CardActions>
                    </Card>
                ) : null
            }
        </div>
    )
};

export default Project;