import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getData } from "utils/API/FetchNFTS/getData.js";

export const fetchNfts = createAsyncThunk("nfts/fetchNfts", getData);
export const nftsSlice = createSlice({
  name: "nfts",
  initialState: {
    nfts: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNfts.pending, (state, action) => {
      console.log("fetchNfts.pending");
      state.loading = true;
    });
    builder.addCase(fetchNfts.fulfilled, (state, action) => {
      console.log("fulfilled", action.payload);
      state.nfts = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchNfts.rejected, (state, action) => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const selectNfts = (state) => state.nfts.nfts;
export const selectLoading = (state) => state.nfts.loading;
export const selectError = (state) => state.nfts.error;

export default nftsSlice.reducer;
