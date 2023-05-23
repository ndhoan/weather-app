import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
  query MyQuery(
    $current_weather: String
    $timezone: String!
    $daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,uv_index_max,uv_index_clear_sky_max,sunrise,sunset"
    $hourly: String = "weathercode,temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,windgusts_10m,uv_index,uv_index_clear_sky,snowfall,snow_depth,showers,relativehumidity_2m"
    $latitude: String!
    $longitude: String!
  ) {
    myQuery(
      current_weather: $current_weather
      timezone: $timezone
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
    ) {
      current_weather {
        is_day
        temperature
        time
        weathercode
        winddirection
        windspeed
      }
      daily {
        apparent_temperature_max
        weathercode
        uv_index_max
        uv_index_clear_sky_max
        time
        temperature_2m_min
        sunset
        sunrise
        apparent_temperature_min
        temperature_2m_max
      }
      daily_units {
        apparent_temperature_max
        apparent_temperature_min
        sunrise
        sunset
        temperature_2m_max
        temperature_2m_min
        time
        uv_index_clear_sky_max
        uv_index_max
        weathercode
      }
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        windgusts_10m
        uv_index_clear_sky
        uv_index
        time
        temperature_2m
        snowfall
        snow_depth
        showers
        relativehumidity_2m
        rain
        precipitation_probability
        precipitation
      }
      hourly_units {
        apparent_temperature
        precipitation
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        snow_depth
        snowfall
        temperature_2m
        time
        uv_index
        uv_index_clear_sky
        windgusts_10m
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`;

export default fetchWeatherQuery;
