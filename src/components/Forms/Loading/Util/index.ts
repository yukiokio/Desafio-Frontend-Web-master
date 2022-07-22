import React, { SetStateAction } from "react";

interface FakeLoadingProps {
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  setSuccess: React.Dispatch<SetStateAction<boolean>>;
}

const FakeLoading = (
  { setLoading, setSuccess }: FakeLoadingProps,
  loadingTime: number,
  successTime: number,
) => {
  setTimeout(() => {
    setLoading(false);
  }, loadingTime);

  setTimeout(() => {
    setSuccess(true);
  }, loadingTime + 200);

  setTimeout(() => {
    setSuccess(false);
  }, successTime);
};

export default FakeLoading;
