import { makeStyles, Box } from '@material-ui/core';
import img from '../Image/peeyush1.jpg';
import Form from './Form';

const useStyles = makeStyles({
    component: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        width: '60%',
        margin: '0 auto'
    },
    leftContainer: {
        width: '65%',
        height: '80%',
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        borderRadius: '20px 0 0 20px'
    },
    rightContainer: {
        width: '90%',
        height: '80%',
        background: 'linear-gradient(315deg, #6a93cb 0%, #a4bfef 74%)',
    }
})

const Weather = () => {
    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Box className={classes.leftContainer}></Box>
            <Box className={classes.rightContainer}>
                <Form />
            </Box>
        </Box>
    )
}
export default Weather;