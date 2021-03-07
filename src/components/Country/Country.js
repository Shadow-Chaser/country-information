import React from 'react';
import { Link } from 'react-router-dom';
import './Country.css'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Country = (props) => {
    const classes = useStyles();
    const {name, flag} = props.country;
    // console.log(name);
    return (
        <div className='country'>
                   
                 <Card  className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={flag}
                        title={name}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        {name}
                        </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>

                        <Link to={`/country/${name}`} className='link'>
                            <Button variant="contained" size="small" color="secondary">Get Details</Button>
                        </Link>
                        
                    </CardActions>
                </Card>
               
        </div>
    );
};

export default Country;