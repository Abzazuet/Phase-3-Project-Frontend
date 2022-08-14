import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/AddDessert.css";
import { useEffect, useState } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import '../styles/FormDessert.css'

function FormDessert({ selectedDessert, fetchRequest }) {
    const [params, setParams] = useState({
        name: "",
        ingredients: "",
        regimes: "",
        image: "",
        carbohydrates: "",
        proteins: "",
        fat: "",
    });
    const [regimes, setRegimes] = useState([]);
    useEffect(() => {
        if (selectedDessert !== undefined && selectedDessert.length !== 0) {
            setRegimes(selectedDessert[0].regimes);
            setParams({
                name: selectedDessert[0].name,
                ingredients: selectedDessert[0].ingredients,
                regimes: selectedDessert[0].regimes,
                image: selectedDessert[0].image,
                carbohydrates: selectedDessert[0].carbohydrates,
                proteins: selectedDessert[0].proteins,
                fat: selectedDessert[0].fat,
            });
        }
    }, [setParams, selectedDessert]);

    function handleChangeText(event) {
        setParams({
            ...params,
            [event.target.id]: event.target.value,
        });
        if (event.target.id === "ingredients") {
            setParams({
                ...params,
                [event.target.id]: event.target.value.split(","),
            });
        }
    }
    function handleCheckBox(event) {
        if (!regimes.includes(event.target.name)) {
            setRegimes([...regimes, event.target.name]);
            setParams({
                ...params,
                regimes: [...regimes, event.target.name],
            });
        } else {
            setRegimes(regimes.filter((regime) => regime !== event.target.name));
            setParams({
                ...params,
                regimes: regimes.filter((regime) => regime !== event.target.name),
            });
        }
    }

    return (
        <Box className="form" onSubmit={(e) => fetchRequest(e, params)} component="form"
            noValidate
            autoComplete="off">
            <div>
                <TextField
                    required
                    fullWidth
                    id="name"
                    label="Enter name"
                    margin="dense"
                    type="text"
                    onChange={handleChangeText}
                    value={params.name}
                    className="form-input-background"
                />
                <TextField
                    required
                    fullWidth
                    id="image"
                    label="Image"
                    margin="dense"
                    type="text"
                    onChange={handleChangeText}
                    value={params.image}
                    className="form-input-background"
                />
                <TextField
                    required
                    fullWidth
                    id="ingredients"
                    label="Ingredients Separate with comma (,) Ex. milk,sugar,chocolate"
                    margin="dense"
                    type="text"
                    onChange={handleChangeText}
                    value={params.ingredients}
                    className="form-input-background"
                />
                <FormGroup id="formBasicRegime">
                    <FormLabel>Food regimes:</FormLabel>
                    <FormControlLabel control={<Checkbox checked={params.regimes.includes("sugar free")} onChange={handleCheckBox} name="sugar free" />} label="Sugar free" />
                    <FormControlLabel control={<Checkbox checked={params.regimes.includes("paleo")} onChange={handleCheckBox} />} label="Paleo" name="paleo" />
                    <FormControlLabel control={<Checkbox checked={params.regimes.includes("keto")} onChange={handleCheckBox} />} label="Keto" name="keto" />
                    <FormControlLabel control={<Checkbox checked={params.regimes.includes("vegan")} onChange={handleCheckBox} />} label="Vegan" name="vegan" />
                    <FormControlLabel control={<Checkbox checked={params.regimes.includes("gluten free")} onChange={handleCheckBox} />} label="Gluten Free" name="gluten free" />
                </FormGroup>
                <TextField
                    required
                    fullWidth
                    id="proteins"
                    label="Enter protein in grams"
                    margin="dense"
                    type="number"
                    onChange={handleChangeText}
                    value={params.proteins}
                    className="form-input-background"
                />
                <TextField
                    required
                    fullWidth
                    id="carbohydrates"
                    label="Enter carbohydrate in grams"
                    margin="dense"
                    type="number"
                    onChange={handleChangeText}
                    value={params.carbohydrates}
                    className="form-input-background"
                />
                <TextField
                    required
                    fullWidth
                    id="fat"
                    label="Enter fat in grams"
                    margin="dense"
                    type="number"
                    onChange={handleChangeText}
                    value={params.fat}
                    className="form-input-background"
                />
                <Button className="margin-button" variant="contained" style={{ background: '#d83bd8' }} type="submit">Submit</Button>


            </div>
        </Box>
    )
}

export default FormDessert;