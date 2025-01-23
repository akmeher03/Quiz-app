import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Mui = () => {
    return (
        <Stack spacing={2} direction="row">
            {/* <Button variant="text">Text</Button> */}
            <Button  style={{marginLeft:32,marginTop:32}}  variant="contained" href='/createquiz'>Create a Quiz</Button>
            {/* <Button variant="outlined">Outlined</Button> */}
        </Stack>
    )
}
