import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCities } from '../../store/action';
import { AppDispatch, RootState } from '../../store/store';

interface CitySelectProps {
  onCityChange: (city: string) => void;
}

const CitySelect: React.FC<CitySelectProps> = ({ onCityChange }) => {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { cities, loading, error } = useSelector((state: RootState) => state.city);

  useEffect(() => {
    if (cities.length === 0) {
      dispatch(fetchCities());
    }
  }, [dispatch, cities.length]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    setSelectedCity(city);
    onCityChange(city);
    navigate(`/${city}`);
  };

  return (
    <div className='city-select__container'>
      <select value={selectedCity} onChange={handleChange} disabled={loading}>
        <option value="">Select a city</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}, {city.region}, {city.country}
          </option>
        ))}
      </select>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CitySelect;
