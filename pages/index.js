import React, { useEffect, useState } from 'react'
import CardCar from "../src/components/CardCar"
import Box from "@mui/material/Box"
import getCars from '../src/service/getCars'


export default function Home() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function teste() {
      const res =  await getCars.carrinhos()
      setData(res)
    }
    teste()
  }, [])

  return (
    <>
       <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 5 }}>
          { data?.map((carro) => {
            return (
              <React.Fragment key={carro.id}>
                <CardCar
                modelo={carro.modelo} 
                versao={carro.versao} 
                combustivel={carro.combustivel}
                km={carro.km}
                valor={carro.valor}
                ano={carro.ano}
                >
                </CardCar>
              </React.Fragment>
            )            
          }) }
        </Box>  
    </>
  );
}
