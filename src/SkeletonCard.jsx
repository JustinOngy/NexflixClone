import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCard() {
  return (
    <div style={{ paddingLeft: "10px" }}>
      <Skeleton
        baseColor="#1d1f1a"
        highlightColor="#30342c"
        width="200px"
        height="250px"
      />
    </div>
  );
}

export default SkeletonCard;
