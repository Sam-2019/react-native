import React from "react";
import ArtistItem from "./artiste-item";
import { data } from "./Artist";

const ArtistsAll = () => (
  <>
    {data.map((item) => (
      <ArtistItem {...item} key={item.key} />
    ))}
  </>
);

export default ArtistsAll;
