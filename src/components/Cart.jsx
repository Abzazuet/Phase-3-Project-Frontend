import React from "react"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DessertInCart from './DessertInCart'

function Cart({ desserts, handleDeleteDessertInCart }) {
    return <div>
        <div className="phrase-container">
            <h1>Items in Cart</h1>
        </div>
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {desserts.map((dessert) => (
                    <Grid item xs={12} key={dessert.id}>
                        <DessertInCart key={dessert.id} dessert={dessert} handleDeleteDessertInCart={handleDeleteDessertInCart}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </div>
}

export default Cart;