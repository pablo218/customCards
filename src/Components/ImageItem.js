import React from "react";

const ImagesItem = ({ src, alt, clicked }) => {

  return (
    <figure
      onClick={clicked}    >
      <img src={src} alt={alt} className="ImagesCollection__gallery__img" />
    </figure>
  );
};

export default ImagesItem;
