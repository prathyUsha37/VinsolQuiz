import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        button: {
            margin: theme.spacing(2),
            color: 'white',
            backgroundColor: 'blue',
        },
        screens: {
            position: 'relative',
            marginTop: theme.spacing(4),
            padding: '5px',
            height: '100%',
        }
    }),
);

export const Quiz = () => {
    const classes = useStyles();
    let [count, setCount] = useState(0);
    let [results, setResults] = useState([]);
    let [correct, setCorrect] = useState(0);
    let [currentQuestion, setCurrentQuestion] = useState('');

    const add = (a,b) => {
        return a+b;
    }
    const sub = (a,b) => {
        return a-b;
    }
    const multiply = (a,b) => {
        return a*b;
    }
    const division = (a,b) => {
        return a/b;
    }
    
    const getCurrentQuestion = () => {
        const a= Math.floor((Math.random() * 100) + 1);
        const b=Math.floor((Math.random() * 100) + 1);
        let exp = '+';
        switch(Math.random(4)) {
            case 0: exp='+'; break;
            case 1: exp='-'; break;
            case 2: exp='/'; break;
            case 3: exp='%'; break;
        }
        setCurrentQuestion(a+ exp+ b);
    }

    return (
        <div>
            { count == 0 && <Button
                variant="contained"
                className={classes.button} onClick={() => {setCount(count + 1); getCurrentQuestion()}}>
                Start Quiz
            </Button> }
            { count > 0 && count < 10 && <Button
                variant="contained"
                className={classes.button} onClick={() => { setCount(count + 1); getCurrentQuestion()}}>
                Next
            </Button> }
            { count == 10 && <Button
                variant="contained"
                className={classes.button} onClick={() =>  { setCount(0); setCurrentQuestion('')}}>
                Finish Quiz
            </Button> }
            <Typography>
            {currentQuestion}
            </Typography>
            <TextField />
            <Typography>
            {correct} / 10
            </Typography>
        </div>
    )
}
