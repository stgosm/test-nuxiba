import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Todos({ id, title, completed }){
    const [checked, setChecked] = React.useState();
    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const classes = useStyles();

    return(
        <Card key={ id } className={classes.root} variant="outlined">
            <CardContent>
                 <Typography variant="h5" component="h2">
                    Id tarea: { id }
                </Typography>
                <Typography variant="h5" component="h2">
                   Título: { title }
                </Typography>
                </CardContent>
            <CardActions>
                <Checkbox
                    checked={completed}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
            </CardActions>
        </Card>
    )
}

export default Todos;