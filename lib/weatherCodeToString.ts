export type WeatherCode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99;

type WeatherData = {
  icon: string;
  label: string;
};

const weatherCodeToString = (code: number): WeatherData | undefined => {
  const weatherCodes: { [code: number]: WeatherData } = {
    0: { icon: 'c01d', label: 'Clear sky' },
    1: { icon: 'c02d', label: 'Mainly clear' },
    2: { icon: 'c03d', label: 'Partly cloudy' },
    3: { icon: 'c04d', label: 'Overcast' },
    45: { icon: 'f02d', label: 'Fog' },
    48: { icon: 'f03d', label: 'Deposit rime fog' },
    51: { icon: 'u50d', label: 'Drizzle: Light intensity' },
    53: { icon: 'u50d', label: 'Drizzle: Moderate intensity' },
    55: { icon: 'u50d', label: 'Drizzle: Dense intensity' },
    56: { icon: 's08d', label: 'Freezing Drizzle: Light intensity' },
    57: { icon: 's09d', label: 'Freezing Drizzle: Dense intensity' },
    61: { icon: 'u10d', label: 'Rain: Slight intensity' },
    63: { icon: 'u11d', label: 'Rain: Moderate intensity' },
    65: { icon: 'u14d', label: 'Rain: Heavy intensity' },
    66: { icon: 's09d', label: 'Freezing Rain: Light intensity' },
    67: { icon: 's10d', label: 'Freezing Rain: Heavy intensity' },
    71: { icon: 's01d', label: 'Snow fall: Slight intensity' },
    73: { icon: 's02d', label: 'Snow fall: Moderate intensity' },
    75: { icon: 's05d', label: 'Snow fall: Heavy intensity' },
    77: { icon: 's11d', label: 'Snow grains' },
    80: { icon: 'u12d', label: 'Rain showers: Slight intensity' },
    81: { icon: 'u13d', label: 'Rain showers: Moderate intensity' },
    82: { icon: 'u14d', label: 'Rain showers: Violent intensity' },
    85: { icon: 's06d', label: 'Snow showers: Slight intensity' },
    86: { icon: 's10d', label: 'Snow showers: Heavy intensity' },
    95: { icon: 'u04d', label: 'Thunderstorm: Slight or moderate' },
    96: { icon: 'u04d', label: 'Thunderstorm with hail: Slight' },
    99: { icon: 'u04d', label: 'Thunderstorm with hail: Moderate or heavy' },
  };

  return weatherCodes[code];
};

export default weatherCodeToString;
