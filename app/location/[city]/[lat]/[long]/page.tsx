import { getClient } from '@/apollo-client';
import fetchWeatherQuery from '@/graphql/queries/fetchWeatherQuery';
import {
  CalloutCard,
  StatCard,
  InformationPanel,
  TempChart,
  RainChart,
  HumidityChart,
} from '@/components';

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const WeatherPage = async ({ params: { city, lat, long } }: Props) => {
  const client = getClient();
  const {
    data: { myQuery: result },
  } = await client.query<QueryResult>({
    query: fetchWeatherQuery,
    variables: {
      current_weather: 'true',
      longitude: long,
      latitude: lat,
      timezone: 'GMT',
    },
  });

  return (
    <div className='flex flex-col min-h-screen md:flex-row'>
      <InformationPanel city={city} lat={lat} long={long} result={result} />
      <div className='flex-1 p-5 lg:p-10'>
        <div className='p-4'>
          <div className='pb-5'>
            <h2 className='text-xl font-bold'>Todays Overview</h2>
            <p className='text-sm text-gray-400'>
              Last Updated at:{' '}
              {new Date(result.current_weather.time).toLocaleString()} (
              {result.timezone})
            </p>
          </div>
          <div className='m-2 mb-10'>
            <CalloutCard message='This is where GPT summary will go.' />
          </div>
          <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
            <StatCard
              title='Maximum Tempurature'
              metric={`${result.daily.temperature_2m_max[0].toFixed(1)}°`}
              color='yellow'
            />

            <StatCard
              title='Minimum Temperature'
              metric={`${result.daily.temperature_2m_min[0].toFixed(1)}°`}
              color='green'
            />
            <div>
              <StatCard
                title='UV Index'
                metric={result.daily.uv_index_max[0].toFixed(1)}
                color='rose'
              />
              {Number(result.daily.uv_index_max[0].toFixed(1)) > 5 && (
                <CalloutCard
                  message='High UV Index. Please wear sunscreen.'
                  warning
                />
              )}
            </div>
            <div className='flex space-x-3'>
              <StatCard
                title='Wind Speed'
                metric={`${result.current_weather.windspeed.toFixed(1)}m/s`}
                color='cyan'
              />
              <StatCard
                title='Wind Direction'
                metric={`${result.current_weather.winddirection.toFixed(1)}°`}
                color='violet'
              />
            </div>
          </div>
        </div>
        <hr className='mb-5' />
        <div className='space-y-3'>
          <TempChart result={result} />
          <RainChart result={result} />
          <HumidityChart result={result} />
        </div>
      </div>
    </div>
  );
};

export default WeatherPage;
