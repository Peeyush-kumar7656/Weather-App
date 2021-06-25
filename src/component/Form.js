import { makeStyles, Box, TextField,Button } from '@material-ui/core';
import { useState, useEffect } from 'react';
import Information from './Information';
import  { getData } from '../service/Api';

const useStyles = makeStyles({
    component: {
        padding: 10,
        display:'flex',
        background: '#1477B2'
    },
    input: {
        color: '#fff',
        marginRight: 10
    },
    button: {
        background: '#6a93cb',
        color: '#fff',
        width: 230,
        height: 30,
        marginTop: 15
    }
})

const Form = () => {
    const classes = useStyles();

    const [ city, setCity ] = useState('');
    // const [ country, setCountry ] = useState('');
    const [ click, handleClick ] = useState(false);
    const [ data, setData ] = useState();

    useEffect(() => {
        const weatherInfo = async () => {
            // city && await getData(city, country).then(response => {
                city && await getData(city).then(response => {
                setData(response.data);
            })
        }
        weatherInfo();
        handleClick(false);
    },[click]);

    const handleCityChange = (city) => {
        setCity(city);
    }

    // const handleCountryChange = (country) => {
    //     setCountry(country);
    // }
    return (
        <>
     <Box className={classes.component}>
         <TextField
             inputProps ={{className:classes.input}}
              label="City"
              onChange={(e) => handleCityChange(e.target.value)} 
              className={classes.input}                 
              />
         {/* <TextField  
        inputProps ={{className:classes.input}}
         label="Country"
         onChange={(e) => handleCountryChange(e.target.value)}
         className={classes.input}
          />  */}
          <Button variant="contained" className={classes.button} onClick={()=>handleClick(true)}>WEATHER</Button>
     </Box>
     <Information data={data} />
     </>
    )
}
export default Form
