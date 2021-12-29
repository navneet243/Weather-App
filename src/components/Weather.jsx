import React,{useEffect}from 'react'
import { Grid,Box, makeStyles } from '@material-ui/core'
import Form from './Form'

const useStyles = makeStyles({
    container: {
        background: 'orange',
        height: '8vh',
        width: '45%',
        margin: '0 auto'
    },
    box:{
        width: '45%',
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: '60vh',
        margin: '0 auto'
    }
})

const Weather = () => {
    const classes = useStyles();
     useEffect(() => {
        document.title = "Weather-app";
     }, [])
    return (
       <Grid>
          <Box className={classes.container}>
              <h1 style={{textAlign:'center', marginTop:'40px'}}>Weather App</h1>
          </Box>
          <Box className={classes.box}>
              <Form/>
          </Box>
       </Grid>
    )
}

export default Weather
