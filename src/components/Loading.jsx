import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const LoadingSearch = () => {
  return (
    <>
      <SkeletonTheme
        baseColor="rgb(203 213 225)"
        highlightColor="rgb(156 163 175)"
      >
        <div className="text-center mt-5">
          <p className="text-xl">
            <Skeleton width={300} height={24} />
          </p>
          <div className="my-2 flex justify-center gap-2">
            <Skeleton width={100} height={20} />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Skeleton width={100} height={80} />
        </div>
        <div className="mt-3 mb-1 flex items-center justify-center gap-2">
          <Skeleton width={60} height={20} />
        </div>
      </SkeletonTheme>
    </>
  );
};
