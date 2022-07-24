import React from "react";
import { useState } from "react";
import { NFTPORT_API_KEY } from "../../constants";

/// mints the NFT to the Music3 Contract Collection with the ,metdata and address  provided
export const MintNFT2 = async ({ ipfsURI, userAddress }) => {
  console.log("Minting NFT with NFTPORT API ....");
  const response = await fetch(
    "https://api.nftport.xyz/v0/mints/customizable",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "4c700476-ff0d-48b5-92bc-bc39436203f3",
      },
      body: {
        chain: "polygon",
        contract_address: NFTPORT_API_KEY,
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
