import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AstronomyResponse, City, WeatherResponse } from '../types/types';
import { RootState } from './store';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (query: string) => {
    const response = await axios.get<WeatherResponse>(
      'https://api.weatherapi.com/v1/current.json',
      {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: query,
        },
      }
    );
    return response.data;
  }
);

export const fetchAstronomy = createAsyncThunk(
  'astronomy/fetchAstronomy',
  async (query: string) => {
    const response = await axios.get<AstronomyResponse>(
      'https://api.weatherapi.com/v1/astronomy.json',
      {
        params: {
          key: process.env.REACT_APP_WEATHER_API_KEY,
          q: query,
          dt: new Date().toISOString().split('T')[0],
        },
      }
    );
    return response.data;
  }
);

export const fetchCities = createAsyncThunk(
  'city/fetchCities',
  async (_, { getState }) => {
    const state = getState() as RootState;
    if (state.city.cities.length > 0) {
      return state.city.cities;
    } else {
      const response = await axios.get<City[]>(
        'https://api.weatherapi.com/v1/search.json',
        {
          params: {
            key: process.env.REACT_APP_WEATHER_API_KEY,
            q: 'France',
          },
        }
      );
      return response.data.filter(city => city.country === 'France');
    }
  }
);
