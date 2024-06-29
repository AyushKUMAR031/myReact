import { useEffect, useState } from "react";
import Search from "../search/search";
import style from "../style.module.css";

export default function Weather() {
    const [search, setSearch] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchWeatherData(parameter) {
        try {
            setLoading(true);
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${parameter}&appid=ae3c46e647f3cdde386f8d9483e2cf43`);
            const data = await response.json();
            console.log(data, "data");

            if (data) {
                setLoading(false);
                setWeatherData(data);
            }

        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    function getCurrentDate() {
        return new Date().toLocaleDateString('en-us', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })
    }

    function handleSearch() {
        fetchWeatherData(search);
    }

    useEffect(() => {
        fetchWeatherData("Ranchi");
    }, []);

    const temperatureInKelvin = weatherData?.main?.temp;
    const temperatureInCelsius = temperatureInKelvin - 273.15;

    return (
        <div className={style.application}>
            <h1>Weather App</h1>
            <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
            {
                loading ? <div className={style.loading}>Loading...</div> : (
                    <div>
                        <div className={style.cityName}>
                            <h2>{weatherData?.name},<span> {weatherData?.sys?.country}</span></h2>
                        </div>
                        <div className={style.date}>
                            <span>{getCurrentDate()}</span>
                        </div>
                        <div className={style.temp}>
                            {temperatureInCelsius.toFixed(2)} °C
                        </div>
                        <p className={style.description}>
                            {weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''}
                        </p>
                        <div className={style.weatherInfo}>
                            <div className={style.column}>
                                <div>
                                    <p className={style.wind}>{weatherData?.wind?.speed}</p>
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            <div className={style.column}>
                                <div>
                                    <p className={style.humidity}>{weatherData?.main?.humidity}%</p>
                                    <p>Humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}