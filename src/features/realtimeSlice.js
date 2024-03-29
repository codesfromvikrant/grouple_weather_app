import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  temp_unit: 'c',
  location: {},
  current: {},
  air_quality: {},
};

export const realtimeSlice = createSlice({
  name: 'realtime',
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setCurrent(state, action) {
      state.current = action.payload;
    },
    setAirQuality(state, action) {
      state.air_quality = action.payload;
    },
    setTempUnit(state, action) {
      state.temp_unit = action.payload;
    }

  },
});

export const { setLocation, setCurrent, setAirQuality, setTempUnit } = realtimeSlice.actions;

export default realtimeSlice.reducer;