import React from 'react';
import Users from './Users';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridUsers: {
      paddingLeft: '50px',
      paddingRight: '50px',
    },
    gridItemUsers: {
        padding: '15px 15px',
        display: 'flex',
        justifyContent: 'center',
    },
}));


function RequestUsers(){

    const [requestUsers, setRequestUsers] = React.useState([]);
    const classes = useStyles();

    React.useEffect(() => {
        async function getRequestUsers() {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const dataRequestUsers = await data.json()

            setRequestUsers(dataRequestUsers)

        } catch(e) {
            console.error(e);
        };
        }

        getRequestUsers();
    }, []);

    return(
        <>
            {console.log(requestUsers)}
            <Grid container spacing={3} justify="space-evenly" className={classes.gridUsers}>
                {
                    requestUsers.map(rqu => 
                        <>
                            <Grid item xs={12} sm={6} md={6} lg={3} key={ rqu.id } className={classes.gridItemUsers}>
                                <Users { ...rqu } />
                            </Grid>
                        </>
                    )
                }
            </Grid>
            
        </>
    )
}

export default RequestUsers;