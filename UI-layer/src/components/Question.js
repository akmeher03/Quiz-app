import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import questions from './que';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export const Question = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(null));
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showBox, setShowBox] = useState(true);
    const [showDiv, setShowDiv] = useState(false);
    const [score, setScore] = useState(0);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    useEffect(() => {
        console.log("Selected Options:", selectedOptions);
    }, [selectedOptions]);

    const handleNextClick = () => {
        if (selectedValue !== null) {
            const updatedSelectedOptions = [...selectedOptions];
            updatedSelectedOptions[currentQuestionIndex] = selectedValue;
            setSelectedOptions(updatedSelectedOptions);
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            setSelectedValue(null);
        }
        console.log('Selected radio button:', selectedValue);
    };

    const handlePrevClick = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }

    const handleSubmitClick2 = () => {
        if (selectedValue !== null) {
            const updatedSelectedOptions = [...selectedOptions];
            updatedSelectedOptions[currentQuestionIndex] = selectedValue;
            setSelectedOptions(updatedSelectedOptions);
        }
        setShowBox(false);
    }

    const handleShowScore = () => {
        setScore(2)
        console.log(selectedOptions)
        setShowDiv(true);
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <>
            {!showBox && (<Button size='medium' style={{ right: '45%', top: 10, position: 'fixed' }} variant="contained" onClick={handleShowScore}  > See Youe Score </Button>
            )}

            {showDiv && (<h1 style={{ textAlign: 'center', marginTop: 200 }} > Your Score is : {score} </h1>)}
            {showBox && (
                <Box sx={{
                    minWidth: 275
                }}>
                    <Card style={{
                        height: 'calc(100vh - 213px)',
                        margin: '105px 15%',
                        display: 'grid',
                    }} variant="outlined">

                        <React.Fragment>
                            <CardContent style={{ backgroundColor: 'aliceblue' }}>
                                <Typography variant="h5" component="div">
                                    {'Question No.'} - {currentQuestionIndex + 1}
                                </Typography>
                                <Typography variant="body2">
                                    <FormControl>
                                        <FormLabel id="demo-radio-buttons-group-label">
                                            {currentQuestion.question}
                                        </FormLabel>
                                        <RadioGroup
                                            aria-labelledby="demo-radio-buttons-group-label"
                                            name="radio-buttons-group"
                                            value={selectedValue}
                                            onChange={handleRadioChange}
                                        >
                                            {currentQuestion.answers.map((ans, index) => (
                                                <FormControlLabel key={index} value={ans} control={<Radio />} label={ans} />
                                            ))}
                                        </RadioGroup>
                                    </FormControl>
                                </Typography>
                            </CardContent>
                            <CardActions style={{ backgroundColor: 'lavender', justifyContent: 'space-between' }}>
                                <Button size="small" onClick={handlePrevClick} >Prev</Button>
                                {currentQuestionIndex < questions.length - 1 ? (
                                    <Button size="small" onClick={handleNextClick} disabled={selectedValue === null}>
                                        Next
                                    </Button>
                                ) : (
                                    <Button size="small" onClick={handleSubmitClick2} disabled={selectedValue === null}>
                                        Submit
                                    </Button>
                                )}
                                {/* <Button size="small" onClick={handleNextClick} disabled={selectedValue === null}>{currentQuestionIndex < length - 1 ? 'Next' : 'Submit'} </Button> */}
                            </CardActions>
                        </React.Fragment>
                    </Card>
                </Box>
            )}
        </>
    );
}