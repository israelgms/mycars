import React from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';

export default function InputSearch() {
    return (
        <>
            <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Pesquise por modelo"
            inputProps={{ 'aria-label': 'esarch google maps' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
            </IconButton>  
        </>
    )
}
            
