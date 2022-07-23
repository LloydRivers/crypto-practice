import { configureStore } from "@reduxjs/toolkit";

import nftsReducer from "Redux/slices/nftSlices/nftsSlice";

export const store = configureStore({
  reducer: {
    nfts: nftsReducer,
  },
});
