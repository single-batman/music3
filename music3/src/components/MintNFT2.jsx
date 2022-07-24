import React from "react";
import { useState } from "react";
// import { NFTPORT_API_KEY } from "../../constants";
// import 'dotenv/config'

// require('dotenv').config({ path: '../../.env' })

/// mints the NFT to the Music3 Contract Collection with the ,metdata and address  provided
export const MintNFT2 = async ({ ipfsURI, userAddress }) => {

  const nftport_key = process.env.NFTPORT_API_KEY;
  console.log("Minting NFT with NFTPORT API ....");
  const response = await fetch(
    "https://api.nftport.xyz/v0/mints/customizable",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: nftport_key,
      },
      body: {
        chain: "polygon",
        contract_address: "0xDBd95D79d3A019Cd16D02B6a386aDa8C717C6A09",
        metadata_uri: `${ipfsURI}`,
        mint_to_address: `${userAddress}`,
      },
    }
  )
    .then((response) => {
      console.log("NFT Minted successfully 🚀🚀");
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });

  return response;
};
