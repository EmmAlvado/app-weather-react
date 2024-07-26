import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppDispatch, RootState } from '../store/store';
import Toggle from '../components/atoms/toggle';
import { fetchAstronomy, fetchWeather } from '../store/action';

const Page: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const { t } = useTranslation();
  const [showWeather, setShowWeather] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  const weather = useSelector((state: RootState) => state.weather);
  const astronomy = useSelector((state: RootState) => state.astronomy);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
      dispatch(fetchAstronomy(city));
    }
  }, [dispatch, city]);

  const handleToggle = () => {
    setShowWeather(!showWeather);
  };

  if (weather.loading || astronomy.loading) {
    return <div>{t('loading')}</div>;
  }

  if (weather.error) {
    return <div>{t('error', { error: weather.error })}</div>;
  }

  if (astronomy.error) {
    return <div>{t('error', { error: astronomy.error })}</div>;
  }

  return (
    <div className='page__container'>
      <Toggle
        IconBefore={<i className="bi bi-thermometer-sun"></i>}
        IconAfter={<i className="bi bi-moon-stars-fill"></i>}
        onToggle={handleToggle}
      />
      <h1 className='page__title'>{city}</h1>
      {city ? (
        showWeather ? (
          <>
            <h2>{t('weather.title')}</h2>
            <p>{t('weather.temperature', { temp: weather.data?.current.temp_c })}</p>
            <p>{t('weather.condition', { condition: weather.data?.current.condition.text })}</p>
            <img src={weather.data?.current.condition.icon} alt="Weather icon" />
          </>
        ) : (
          <>
            <h2>{t('astronomy.title')}</h2>
            <p>{t('astronomy.sunrise', { sunrise: astronomy.data?.astronomy.astro.sunrise })}</p>
            <p>{t('astronomy.sunset', { sunset: astronomy.data?.astronomy.astro.sunset })}</p>
            <p>{t('astronomy.moonrise', { moonrise: astronomy.data?.astronomy.astro.moonrise })}</p>
            <p>{t('astronomy.moonset', { moonset: astronomy.data?.astronomy.astro.moonset })}</p>
            <p>{t('astronomy.moonPhase', { moonPhase: astronomy.data?.astronomy.astro.moon_phase })}</p>
            <p>{t('astronomy.moonIllumination', { moonIllumination: astronomy.data?.astronomy.astro.moon_illumination })}</p>
          </>
        )
      ) : (
        <p>{t('selectCity')}</p>
      )}
    </div>
  );
};

export default Page;
