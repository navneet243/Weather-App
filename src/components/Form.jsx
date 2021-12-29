import { useState, useEffect } from 'react';
import { Box, TextField, Button, makeStyles } from '@material-ui/core';
import { getWeather } from '../Api/Api';
import Info from './Info';

const useStyles = makeStyles({
    component: {
        padding: 10,
        display: 'flex',
        background: '#6d727a',
    },
    input: {
        color: '#fff',
        marginRight: 15
    },
    labelRoot: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        background: '#e67e22',
        color: '#fff',
        width: 150,
        height: 40,
        marginTop: 5,
        fontSize: '10px'
    }
})

const Form = () => {
    const classes = useStyles();
    const [ city, setCity ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ click, handleClick ] = useState(false);
    const [ data, setData ] = useState();

    useEffect(() => {
        const weatherInfo = async () => {
            city && await getWeather(city, country).then(response => {
                setData(response.data);
            })
        }
        weatherInfo();
        console.log(city, country);
        console.log(data);
        handleClick(false);
    }, [click]);

    const handleCityChange = (city) => {
        setCity(city);
    }

    const handleCountryChange = (country) => {
        setCountry(country);
    }

    return (
        <>
            <Box className={classes.component}>
                <TextField 
                    InputProps={{className: classes.input}} 
                    onChange={(e) => handleCityChange(e.target.value)} 
                    className={classes.input} 
                    label="City" 
                    InputLabelProps={{
                        classes: {root: classes.labelRoot}
                    }}
                />
                <TextField 
                    InputProps={{className: classes.input}} 
                    onChange={(e) => handleCountryChange(e.target.value)} 
                    className={classes.input} 
                    label="Country" 
                    InputLabelProps={{
                        classes: {root: classes.labelRoot}
                    }}
                />
                <Button 
                    variant="contained" 
                    onClick={() => handleClick(true)}
                    className={classes.button}
                >Get Weather</Button>
            </Box>
            <Info data={data} city={city} country={country} />
        </>
    )
}

export default Form;