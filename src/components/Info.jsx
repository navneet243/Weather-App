import { Box, makeStyles, Typography } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import OpacityIcon from '@material-ui/icons/Opacity';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles({
    component: {
        margin: '15px 20px',
        textAlign: 'left',
    },
    container: {
        display: 'flex',
    },
    row: {
        padding: 5,
        fontSize: 16,
        letterSpacing: .4,
    },
    value: {
        color: '#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 10
    },
    error: {
        color: '#fff',
        margin: 50,
        padding: 20,
        textAlign:'center',
        fontSize: '25px'
    }
})

const Information = ({ data, city, country }) => {
    const classes = useStyles();

    const getCloudsData = (value) => {
        if(value === 0){
            return 'Clear';
        }else if(value > 1 && value < 100){
            return 'Partially Cloudy';
        }else{
            return 'Cloudy';
        }
    }

    return (
        data && city && country ?
            <Box className={classes.component}>
                <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>Location:  <Box className={classes.value} component="span">{data.name}, {data.sys.country} </Box></Typography>
                <Typography className={classes.row}><SettingsBrightnessIcon className={classes.icon} />Temperature:  <Box className={classes.value} component="span">{data.main.temp}°C </Box></Typography>
                <Typography className={classes.row}><OpacityIcon className={classes.icon} />Humidity:  <Box className={classes.value} component="span">{data.main.humidity}% </Box></Typography>
                <Typography className={classes.row}><DehazeIcon className={classes.icon} />Condition:  <Box className={classes.value} component="span">{data.weather[0].main} </Box></Typography>
                <Typography className={classes.row}><CloudIcon className={classes.icon} />Clouds:  <Box className={classes.value} component="span">{getCloudsData(data.clouds.all)} </Box></Typography>
            </Box>
        : !(city && country) ? <Typography className={classes.error}>Please Enter the values to check Weather</Typography> : ''
    )
}

export default Information;