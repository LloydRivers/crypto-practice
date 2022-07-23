import React, { useEffect } from "react";

import {
  selectNfts,
  fetchNfts,
  selectLoading,
  selectError,
} from "../../Redux/slices/nftSlices/nftsSlice";

import { useSelector, useDispatch } from "react-redux";

import NFTCard from "Components/Cards/NFTCard";

const HomePage = () => {
  const nfts = useSelector(selectNfts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNfts());
  }, []);

  return (
    <div className=" container">
      <div className="row">
        {loading ? (
          <div>Loading...</div>
        ) : (
          nfts.map((nft) => (
            <div key={nft.id} className="col-12 col-md-6 col-lg-4">
              <NFTCard nft={nft} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
