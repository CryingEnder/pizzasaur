import React from "react";
import {
  heroImgSmall,
  heroImgMedium,
  heroImgLarge,
  heroImgLarger,
  heroImgSmallOld,
  heroImgMediumOld,
  heroImgLargeOld,
  heroImgLargerOld,
} from "../../utils/images";

function HeroPicture(props) {
  return (
    <picture {...props}>
      <source
        type="image/webp"
        srcSet={`${heroImgSmall} 200w, ${heroImgMedium} 640w, ${heroImgLarge} 1024w, ${heroImgLarger} 1280w`}
      />
      <source
        type="image/png"
        srcSet={`${heroImgSmallOld} 200w, ${heroImgMediumOld} 640w, ${heroImgLargeOld} 1024w, ${heroImgLargerOld} 1280w`}
      />
      <img
        src={heroImgLargerOld}
        className="object-cover laptop:drop-shadow-lg"
        alt="A pizza banner"
      />
    </picture>
  );
}

export { HeroPicture };
