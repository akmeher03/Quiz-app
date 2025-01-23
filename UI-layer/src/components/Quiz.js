import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';


const defaultTheme = createTheme();

export const Quiz = () => {
    const history = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            category: data.get('category'),
            noOfQ: data.get('noOfQue'),
            title: data.get('title'),
        });
        history('/home');
    };

    const currencies = [
        {
            value: 'java',
            label: 'Java',
        },
        {
            value: 'python',
            label: 'Python',
        }
    ];


    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    autoComplete="off"
                >
                    <Typography component="h3" variant="h5">
                        Create Quiz
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        <TextField
                            name="category"
                            select
                            required
                            fullWidth
                            label="category"
                            defaultValue="java"
                            helperText="Please select your Category"
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="No Of Que."
                            name="noOfQue"
                            type="number"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="title"
                            label="Title"
                            type="text"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit
                        </Button>

                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}