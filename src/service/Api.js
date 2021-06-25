import axios from 'axios';

const API_KEY = '1eb8a1578fe4a13f2195dcc807331ba2';
const URL = 'https://api.openweathermap.org/data/2.5/weather';


// export const getData = async(city, country) => {
//     return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
// }

export const getData = async(city) => {
    return await axios.get(`${URL}?q=${city}&appid=${API_KEY}&units=metric`)
}