import { createSlice } from '@reduxjs/toolkit';
import { AstronomyResponse } from '../types/types';
import { fetchAstronomy } from './action';

interface AstronomyState {
  data: AstronomyResponse | null;
  loading: boolean;
  error: string | null;
}

const initialState: AstronomyState = {
  data: null,
  loading: false,
  error: null,
};

const astronomySlice = createSlice({
  name: 'astronomy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAstronomy.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAstronomy.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAstronomy.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch astronomy data';
      });
  },
});

export default astronomySlice.reducer;
