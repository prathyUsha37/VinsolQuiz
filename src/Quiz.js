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
    let [currentAnswer, setCurrentAnswer] = useState(0);
    let [input, setInput] = useState('');

    const add = (a, b) => {
        return a + b;
    }
    const sub = (a, b) => {
        return a - b;
    }
    const multiply = (a, b) => {
        return a * b;
    }
    const division = (a, b) => {
        return a / b;
    }

    const checkValue = () => {
        setInput('');
        if (currentAnswer == parseInt(input)) {
            setCorrect(++correct);
            let x = <Typography style={{ color: "blue" }}>
                {currentQuestion + ' = ' + input}
            </Typography>
            results.push(x);
            setResults(results)
        } else {
            let x = <Typography style={{ color: "red" }}>
                {currentQuestion + ' = ' + input}
            </Typography>
            results.push(x);
            setResults(results)
        }

    }

    const getCurrentQuestion = () => {
        const a = Math.floor((Math.random() * 10) + 1);
        const b = Math.floor((Math.random() * 10) + 1);
        let exp = '+';
        let res = 0;
        switch (Math.floor((Math.random() * 3) + 1)) {
            case 0: exp = '+'; res = add(a, b); break;
            case 1: exp = '-'; res = sub(a, b); break;
            case 2: exp = '*'; res = multiply(a, b); break;
            case 3: exp = '/'; res = division(a, b); break;
        }
        setCurrentQuestion(a + exp + b);
        setCurrentAnswer(res)
    }


    return (
        <div>
            {count == 0 && <Button
                variant="contained"
                className={classes.button} onClick={() => { setCount(count + 1); getCurrentQuestion() }}>
                Start Quiz
            </Button>}
            {count > 0 && count < 10 && <Button
                variant="contained"
                className={classes.button} onClick={() => { setCount(count + 1); getCurrentQuestion(); checkValue() }}>
                Next
            </Button>}
            {count == 10 && <Button
                variant="contained"
                className={classes.button} onClick={() => { setCount(0); setResults([]); setCurrentQuestion(''); checkValue() }}>
                Finish Quiz
            </Button>}
            {count > 0 && count <= 10 && <><Typography>
                {currentQuestion}
            </Typography>
                <TextField value={input} onChange={event => {
                    const { value } = event.target;
                    setInput(value);
                }} />
                <Typography>
                    {correct} / 10
                </Typography>
            </>}
            {count == 0 && <>
                <ol>
                    {results.map(res => {
                        return <li>{res}</li>
                    })}
                </ol>
            </>}
        </div>
    )
}
