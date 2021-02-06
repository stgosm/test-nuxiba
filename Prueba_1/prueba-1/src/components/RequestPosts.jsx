import React from 'react';
import Posts from './Posts';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function RequestPosts(){

    const [requestPosts, setRequestPosts] = React.useState([]);
    const { search } = useLocation();
    const { userId } = queryString.parse(search);

    React.useEffect(() => {
        async function getRequestPosts() {
        try {
            const dataPosts = await fetch(`https://jsonplaceholder.typicode.com/users/${ userId }/posts`);
            const dataRequestPosts = await dataPosts.json();

            setRequestPosts(dataRequestPosts);

        } catch(e) {
            console.error(e);
        };
        }

        getRequestPosts();
    }, []);

    return(
        <>
            <Typography variant="h2" component="h2">
                Posts
            </Typography>
            <Grid container spacing={3} justify="flex-start">
                {
                    requestPosts.map(rqp => 
                        <>
                            <Grid item xs={12} key={ rqp.id }>
                                <Posts { ...rqp } />
                            </Grid>
                        </>
                    )
                }
                {console.log(requestPosts)}
            </Grid>
        </>
    )
}

export default RequestPosts;