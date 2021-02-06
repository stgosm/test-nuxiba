import React, { useState } from 'react';
import Todos from './Todos';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function RequestTodos(){

    const [requestTodos, setRequestTodos] = React.useState([]);
    const { search } = useLocation();
    const { userId } = queryString.parse(search);
    const [ title, setTitle] = useState('');
    const [ completed, setCompleted ] = useState(Boolean);

    const [checked, setChecked] = React.useState();

    const handleChange = (event) => {
        setChecked(event.target.checked);
        setCompleted(event.target.checked);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log({ title, completed })
    }

    React.useEffect(() => {
        async function getRequestTodos() {
        try {
            const dataTodos = await fetch(`https://jsonplaceholder.typicode.com/users/${ userId }/todos`);
            const dataRequestTodos = await dataTodos.json()

            setRequestTodos(dataRequestTodos);

        } catch(e) {
            console.error(e);
        };
        }

        getRequestTodos();
    }, []);

    return(
        <>
            <Typography variant="h2" component="h2">
                Todos
            </Typography>
            <form onSubmit={ handleSubmit }>
                <TextField
                    required
                    id="outlined-required"
                    label="Tarea"
                    variant="outlined"
                    type="text"
                    value={ title }
                    onChange={ event => setTitle(event.target.value) }
                    />
                <FormControlLabel
                    label="¿Esta completada?"
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                        />
                    }
                />
                <Button type="submit" variant="contained" color="primary">
                    Enviar tarea
                </Button>
            </form>
            { 
                requestTodos.map(rqt => 
                            <>
                                <Grid item xs={12} key={ rqt.id }>
                                    <Todos { ...rqt } />
                                </Grid>
                            </>
                        )
            }
        </>
    )
}

export default RequestTodos;