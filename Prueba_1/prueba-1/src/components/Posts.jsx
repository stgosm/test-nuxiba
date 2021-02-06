import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


function Posts({ id, title, body }) {

    const [requestComments, setRequestComments] = React.useState([]);

    React.useEffect(() => {
        async function getRequestComments() {
        try {
            const dataComments = await fetch(`https://jsonplaceholder.typicode.com/post/${ id }/comments`);
            const dataRequestComments = await dataComments.json()

            setRequestComments(dataRequestComments);

        } catch(e) {
            console.error(e);
        };
        }

        getRequestComments();
    }, []);

    return (
        <>
             <Typography variant='h6'>
                Post id:  { id }
            </Typography> 
            <Typography variant='h6'>
                Título: { title }
            </Typography> 
            <Typography variant='body1'>
                Descripción: { body }
            </Typography> 
            <List >
                <Typography variant='h6'>
                    Comentarios:
                </Typography> 
                {
                    requestComments.map(rqc =>
                        <>
                            <ListItem alignItems="flex-start" postId={ rqc.postId }>
                                <ListItemText
                                    primary={ rqc.name }
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                            >
                                                { rqc.email + ' - ' }
                                            </Typography>
                                            { rqc.body }
                                        </React.Fragment>
                                    }
                                >
                                </ListItemText>
                            </ListItem>    
                            <Divider variant="inset" component="li" />
                        </>
                    )
                }
            </List>
        </>
  )
}

export default Posts;