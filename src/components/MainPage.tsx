"use client"
import React, { useEffect, useState } from 'react'
import SearchFilter from './SearchFilter'
import { useTheme } from 'next-themes';
import axios from 'axios';
import RegionSelector from './RegionFilter';

interface CountryName {
  common: string;
  official: string;
  nativeName: {
      [key: string]: {
          common: string;
          official: string;
      };
  };
}

interface CountryFlags {
  png: string;
  svg: string;
  alt: string;
}

interface Country {
  name: CountryName;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  flags: CountryFlags;
  population: number;
  region: string;
  capital: string[];
}

const API_BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchCountries(): Promise<Country[]> {
    try {
        const response = await axios.get<Country[]>(`${API_BASE_URL}/all`);
        return response.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
        throw error;
    }
}

const MainPage = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [countryInput, setCountryInput] = useState<string>('');
  const { theme } = useTheme();
  useEffect(() => {
      const fetchData = async () => {
          try {
              const countriesData = await fetchCountries();
              if (selectedRegion){
                setCountries(countriesData.filter(country => country.region === selectedRegion));
              }else if (countryInput){
                setCountries(countriesData.filter(country => country.name.common === countryInput));
              }         
              else {
                setCountries(countriesData);
              }
              
          } catch (error) {
              console.error('Failed to fetch countries:', error);
          }
      };

      fetchData();
  }, [selectedRegion, countryInput]);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };

  const handleCountrySelect = (country: string) => {
    setCountryInput(country);
  };

  return (
    // <div className='bg-slate-100 min-h-screen'>
    <div className='min-h-screen bg-slate-100 dark:bg-transparent'>
      <div className="flex md:flex-row flex-col md:items-center md:justify-between bg-gray-100 p-4 px-10 dark:bg-transparent">
        {/* <div className="mb-4 md:mb-0"> */}
        <div className="w-full md:w-auto mb-4 md:mb-0 md:mr-2">
          <SearchFilter onSelectCountry={handleCountrySelect}/>
        </div>
        <div className="">
          <RegionSelector  onSelectRegion={handleRegionSelect}/>
        </div>
        
      </div>

      <div className="grid md:grid-cols-4 gap-8 px-10">
        {countries.map((country, index) => (
            <div key={index} className="border border-gray-300 rounded-md">
              <img src={country.flags.png} alt={country.flags.alt} className='w-full object-fill h-40'/>
              <div className='p-10'>
                <strong className='pb-4 display: block'>{country.name.common}</strong>
                <span  className='display: block'>Population: {country.population}</span>
                <span  className='display: block'>Region: {country.region}</span>
                <span  className='display: block'>Capital: {country.capital}</span>
              </div>
              
            </div>

        ))}


        </div>
    </div>
);
}

export default MainPage;