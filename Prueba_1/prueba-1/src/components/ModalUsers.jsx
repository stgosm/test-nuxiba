import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Users({ id, name, username, email, phone, website }) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    return (
        <div style={modalStyle} className={classes.paper}>
            <Typography variant='h5'>
                { name }
            </Typography>         
            <Typography variant="overline" color='secondary'>
                { username }
            </Typography>
            <Typography variant="body1">
                { email }
            </Typography>
            <Typography variant="body1">
                { phone }
            </Typography>
            <Typography variant="body1">
                { website }
            </Typography>
            <Button variant="outlined" color="secondary" href={"/posts?userId=" + id}>Posts</Button>
            <Button variant="outlined" color="secondary" href={ "/todos?userId=" + id }>Todos</Button>
        </div>
  )
}

export default Users;