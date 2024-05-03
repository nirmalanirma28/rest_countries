// components/SearchFilter.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RegionSelector from './RegionFilter';
import { useState } from 'react';

// interface SearchCountryProps {
//   onRegionSelect: (region: string) => void;
// }

interface Country {
  name: {
    common: string;
  };
}

interface FilterCountryProps {
  onSelectCountry: (country: string) => void;
}

const SearchFilter: React.FC<FilterCountryProps> = ({ onSelectCountry }) => {
// const SearchFilter = () => {
  // const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [countryInput, setCountryInput] = useState<string>('');
  // const handleRegionSelect = (region: string) => {
  //   setSelectedRegion(region);
  //   onRegionSelect(region);
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // const searchTerm = event.target.value;
    console.log("ooooooooo")
    setCountryInput(event.target.value);
    onSelectCountry(event.target.value);
  };

  const handleKeyPress = (event: { key: any; }) => {

    if (event.key === "Enter"){
      console.log("jjjjjjjjjj")
      return handleInputChange
    }
      
     

}

  return (
      <div className="flex items-center">
        <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
                type="text"
                placeholder="Search for a country"
                className="pl-10 pr-4 py-2 rounded-l-md border-gray-300 focus:outline-none focus:border-blue-500"
                value={countryInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
            />
          
        </div>
      </div> 
  );
};

export default SearchFilter;