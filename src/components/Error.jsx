import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';


export default function Error(props) {
    const msg = props.msg
    return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack sx={{ maxWidth: '500px', mt: 1 }} spacing={2}>
                <Alert variant="filled" severity="error">
                  {msg}
                </Alert>
              </Stack>     
            </Box>
    )
}