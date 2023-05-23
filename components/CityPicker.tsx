'use client';

import { useEffect, useState } from 'react';
import { Country, City } from 'country-state-city';
import Select, { GroupBase } from 'react-select';
import { useRouter } from 'next/navigation';
import { GlobeIcon } from '@heroicons/react/solid';

type CountryOption = {
  value: {
    latitude: string;
    longitude: string;
    isoCode: string;
  };
  label: string;
} | null;

type CityOption = {
  value: {
    latitude: string;
    longitude: string;
    countryCode: string;
    name: string;
    stateCode: string;
  };
  label: string;
} | null;

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(null);
  const [selectedCity, setSelectedCity] = useState<CityOption>(null);

  const router = useRouter();

  const handleSelectedCountry = (option: CountryOption) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const handleSelectedCity = (option: CityOption) => {
    setSelectedCity(option);
    router.push(
      `/location/${option?.value.name}/${option?.value.latitude}/${option?.value.longitude}`
    );
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <div className='flex items-center space-x-2 text-white/80'>
          <GlobeIcon className='h-5 w-5 text-white' />
          <label htmlFor='country'>Country</label>
        </div>
        <Select
          className='text-black'
          options={options}
          value={selectedCountry}
          onChange={handleSelectedCountry}
        />
      </div>
      {selectedCountry && (
        <div className='space-y-2'>
          <div className='flex items-center space-x-2 text-white/80'>
            <GlobeIcon className='h-5 w-5 text-white' />
            <label htmlFor='country'>City</label>
          </div>
          <Select
            className='text-black'
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((city) => ({
              value: {
                latitude: city.latitude!,
                longitude: city.longitude!,
                countryCode: city.countryCode,
                name: city.name,
                stateCode: city.stateCode,
              },
              label: city.name,
            }))}
            value={selectedCity}
            onChange={handleSelectedCity}
          />
        </div>
      )}
    </div>
  );
};

export default CityPicker;
