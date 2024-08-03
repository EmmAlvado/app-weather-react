import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCities } from '../../store/action';
import { AppDispatch, RootState } from '../../store/store';
import { useTranslation } from 'react-i18next';


const CitySelect: React.FC = () => {

  const { t } = useTranslation([]);
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
    navigate(`/${city}`);
  };

  return (
    <div className='city-select__container'>
      <select value={selectedCity} onChange={handleChange} disabled={loading}>
        <option value="">{t('selectCity')}</option>
        {cities.map((city) => (
          <option key={city.id} value={city.name}>
            {city.name}, {city.region}, {city.country}
          </option>
        ))}
      </select>
      {loading && <p>{t('loading')}</p>}
      {error && <p>{t('error', { error: error })}</p>}
    </div>
  );
};

export default CitySelect;
