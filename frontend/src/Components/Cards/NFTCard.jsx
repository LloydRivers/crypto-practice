import React from "react";
import "../../Styles/nft.css";

const NFTCard = ({ nft }) => {
  const { id, image_url, name, token_id, num_sales } = nft;
  return (
    <div className="nft">
      <div className="main">
        <img className="tokenImage" src={image_url} alt="NFT" />
        <h2 style={{ color: "#fff" }}>{name}</h2>
        <p className="description">
          Number of sales:{" "}
          {num_sales === 0 ? Math.floor(Math.random() * 15) : num_sales}
        </p>
        <div className="tokenInfo">
          <div className="price">
            {/* <p>0.031 ETH</p> */}
            <p>{Math.floor(Math.random() * (1000 - 100) + 100) / 1000} ETH</p>
          </div>
          <div className="duration">
            <p>id: {token_id}</p>
          </div>
        </div>
        <button className="card-btn">buy</button>
        <hr />
      </div>
    </div>
  );
};

export default NFTCard;
