import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchFeed } from './feedAPI';

const initialState = {
  count: 0,
  limit: 10,
  data: [],
  status: 'idle',
};

export const fetchTopFeed = createAsyncThunk(
  'feed/fetch/top',
  async ({count, limit}) => {
    const response = await fetchFeed({count, limit});
    return response.data;
  }
);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopFeed.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTopFeed.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data.concat(action.payload);
      });
  },
});

export default feedSlice.reducer;
