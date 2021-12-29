import axios from 'axios';

const API_KEY = 'b3ff0a92eb27f4e3fc7972b9b7235719'
const URL = 'https://api.openweathermap.org/data/2.5/weather';


export const getWeather = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}