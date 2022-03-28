import { React, useContext} from 'react'
import { AuthContext } from '../src/contexts/auth';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/Link'
import Error from '../src/components/Error'


export default function Dashboard() {

    const { email, isAuthenticated } = useContext(AuthContext);

    return (
        <>
            { isAuthenticated === true ? 
                <>
                    <h1>Bem vindo de volta {email}</h1>
                    <p>Eu to com depressão</p>
                </>              
                :
            <>  
            <Error msg='Você não possui autorização para acessar esta página!'></Error>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Stack direction="row" spacing={2}>
                <Button color="secondary"><Link href="/">Voltar para página Inicial</Link></Button>
                 <Button variant="contained" color="success"><Link href="/login">Fazer login</Link></Button>
               </Stack>
            </Box>
            </> 
            }
        </>    
        
    )
}