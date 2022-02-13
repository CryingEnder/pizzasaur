import React from "react";
import {
  heroImgSmall,
  heroImgMedium,
  heroImgLarge,
  heroImgLarger,
  heroImgLargerRetina,
  heroImgSmallOld,
  heroImgMediumOld,
  heroImgLargeOld,
  heroImgLargerOld,
  heroImgLargerRetinaOld,
} from "../../utils/images";

function HeroPictureSmall(props) {
  return (
    <picture {...props}>
      <source
        type="image/webp"
        srcSet={`${heroImgSmall} 300w, ${heroImgMedium} 640w, ${heroImgLarge} 1280w`}
      />
      <source
        type="image/jpg"
        srcSet={`${heroImgSmallOld} 300w, ${heroImgMediumOld} 640w, ${heroImgLargeOld} 1280w`}
      />
      <img
        src={heroImgLargeOld}
        className="object-cover laptop:drop-shadow"
        alt="A pizza banner"
      />
    </picture>
  );
}

function HeroPictureBig(props) {
  return (
    <picture {...props}>
      <source
        type="image/webp"
        srcSet={`${heroImgLarger} 1x, ${heroImgLargerRetina} 2x`}
      />
      <source
        type="image/png"
        srcSet={`${heroImgLargerOld} 1x, ${heroImgLargerRetinaOld} 2x`}
      />
      <img
        src={heroImgLargerRetinaOld}
        className="object-cover laptop:drop-shadow"
        alt="A pizza banner"
      />
    </picture>
  );
}

export { HeroPictureSmall, HeroPictureBig };
