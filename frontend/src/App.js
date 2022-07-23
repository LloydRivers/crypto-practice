import { useEffect } from "react";

import { NFTCard } from "./Components";

import { selectNfts, fetchNfts } from "./Redux/slices/nftSlices/nftsSlice";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const nfts = useSelector(selectNfts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNfts());
    console.log(nfts);
  }, []);

  return (
    <div className="App">
      <NFTCard />
    </div>
  );
}

export default App;
