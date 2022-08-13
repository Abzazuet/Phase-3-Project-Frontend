import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import "../styles/Dessert.css";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function Dessert({ dessert, handleDessertInCart }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleClick = () =>{
        handleDessertInCart(dessert)
    }

    return (
        <Card sx={{ maxWidth: 345, maxHeight: 650 }} className="card-style">
            <CardHeader
                title={dessert.name}
            />
            <CardMedia
                component="img"
                height="194"
                image={dessert.image}
                alt={dessert.name}
            />
            <CardContent>
                <Typography variant="body1" className="subtitle">Food regimes:</Typography>
                <Typography variant="body2" color="text.secondary">
                    {dessert.regimes.map((regime) => (
                        <span key={regime}>*{regime.toUpperCase()} </span>
                    ))}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to cart" onClick={handleClick}>
                    <AddShoppingCartIcon fontSize='large' />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <RemoveRedEyeIcon fontSize='large' />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph className="subtitle">Ingredients: </Typography>
                    <Typography paragraph>
                        {dessert.ingredients.map((ingredient) => (
                            <span key={ingredient}>
                                {ingredient} <br />
                            </span>
                        ))}
                    </Typography>
                    <Typography paragraph className="subtitle">Macronutrients</Typography>
                    <Typography paragraph>
                        <span>Carbohydrates: {dessert.carbohydrates} g</span> <br />
                        <span>Proteins: {dessert.proteins} g</span> <br />
                        <span>Fat: {dessert.fat} g</span> <br />
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
