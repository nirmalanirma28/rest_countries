import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  interface FilterRegionProps {
    onSelectRegion: (region: string) => void;
  }

const RegionSelector: React.FC<FilterRegionProps> = ({ onSelectRegion  }) => {
  const [regions, setRegions] = useState<string[]>([]);

  useEffect(() => {
    const fetchRegions = async () => {
      try {
        const response = await axios.get<Country[]>('https://restcountries.com/v3.1/all');
        const uniqueRegions = Array.from(new Set(response.data.map((country: any) => country.region)));
        setRegions(uniqueRegions.filter(region => region)); // Filter out empty regions
      } catch (error) {
        console.error('Error fetching regions:', error);
      }
    };

    fetchRegions();
  }, []);

  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = event.target.value;
    onSelectRegion(selectedRegion);
  };

  return (
      <select onChange={handleRegionChange} > {/* Check if onSelect is defined */}
      <option value="">Filter by Region</option>
      {regions.map(region => (
        <option key={region} value={region}>{region}</option>
      ))}
    </select>    
  );
};

export default RegionSelector;