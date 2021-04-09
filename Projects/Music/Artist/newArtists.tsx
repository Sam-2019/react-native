import React from "react";
import ArtistItem from "./artiste-item";
import { data } from "./Artist";

const ArtistsNew = () => (
  <>
    {data.map((item) => (
      <ArtistItem {...item} key={item.key} />
    ))}
  </>
);

export default ArtistsNew;
