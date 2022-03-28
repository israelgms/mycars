import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import SpeedIcon from '@mui/icons-material/Speed';
import Box from "@mui/material/Box"

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ minWidth: 300, maxWidth: 350, margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://www.revistafullpower.com.br/wp-content/uploads/2021/07/ci01.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{textAlign: 'center'}}>
            <h3>{`${props.modelo} ${props.ano}`}</h3>
          </Typography>
            <>
              <Box sx={{textAlign: 'center', mb: 2}}>
                <h4 className='price'>{props.valor}</h4>
              </Box>

              <Box sx={{display: 'flex', alignItems: 'center'}}>
              
              <>
                <Box>
                  <SpeedIcon fontSize = 'medium' sx={{marginRight: 1}}></SpeedIcon>
                </Box>

                <Box>
                  {props.km}
                </Box>
              </>

              <Box sx={{marginLeft: 12}}>
                {`Tipo: ${props.combustivel}`}
              </Box>
                
              </Box>
            </>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}