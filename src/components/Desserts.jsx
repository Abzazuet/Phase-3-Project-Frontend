import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Dessert from "./Dessert";
import { useEffect } from "react";
import "../styles/Desserts.css";


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Desserts({ desserts, setDesserts }) {
    useEffect(() => {
        fetch("https://desolate-taiga-53492.herokuapp.com/desserts")
          .then((res) => res.json())
          .then((data) => setDesserts(data));
      }, [setDesserts]);
    return (
        <Box sx={{ width: '100%' }}className="background">
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {desserts.map((dessert) => (
                    <Grid item xs={12} sm={6} md={5} lg={3}>
                        <Dessert key={dessert.id} dessert={dessert} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
