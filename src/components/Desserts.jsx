import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Dessert from "./Dessert";
import { useEffect } from "react";
import "../styles/Desserts.css";



export default function Desserts({ desserts, setDesserts, handleDessertInCart }) {
    useEffect(() => {
        fetch("https://desolate-taiga-53492.herokuapp.com/desserts")
            .then((res) => res.json())
            .then((data) => setDesserts(data));
    }, [setDesserts]);
    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {desserts.map((dessert) => (
                    <Grid item xs={12} md={6} lg={4} key={dessert.id}>
                        <Dessert key={dessert.id} dessert={dessert} handleDessertInCart={handleDessertInCart}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
