import React from "react"
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../styles/DessertInCart.css'
function DessertInCart({ dessert, handleDeleteDessertInCart }) {
    const handleDelete = () => {
        handleDeleteDessertInCart(dessert)
    }
    function firstUpperCase(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    return <div className="dessert-in-cart">
        <Grid container spacing={1}>
            <Grid item xs={11}>
                <h2>{dessert.name}</h2>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="add to cart" onClick={handleDelete}>
                    <DeleteIcon fontSize='large' />
                </IconButton>
            </Grid>
        </Grid>

        <Grid container spacing={1}>
            <Grid item xs={12} md={3}>
                <img alt={dessert.id} src={dessert.image}>
                </img>
            </Grid>
            <Grid item xs={12} md={3}>
                <h3>Ingredients</h3>
                {dessert.ingredients.map((ingredient) => (
                    <span key={ingredient}>
                        {firstUpperCase(ingredient)} <br />
                    </span>
                ))}
            </Grid>
            <Grid item xs={12} md={3}>
                <h3>Regimes</h3>
                {dessert.regimes.map((regime) => (
                    <span key={regime}>{firstUpperCase(regime)} <br /></span>
                ))}
            </Grid>
            <Grid item xs={12} md={3}>
                <h3>Macronutrients</h3>
                <span>Carbohydrates: {dessert.carbohydrates} g</span> <br />
                <span>Proteins: {dessert.proteins} g</span> <br />
                <span>Fat: {dessert.fat} g</span> <br />
            </Grid>
        </Grid>
    </div>
}

export default DessertInCart;