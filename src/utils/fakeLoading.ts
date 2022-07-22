import React, { SetStateAction } from "react";

interface FakeLoadingProps {
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  setSuccess: React.Dispatch<SetStateAction<boolean>>;
  loadingTime: number;
  successTime: number;
}

const FakeLoading = (
  { setLoading, setSuccess }: FakeLoadingProps,
  loadingTime: number,
  successTime: number,
) => {
  setTimeout(() => {
    setLoading(false);
    setSuccess(true);
  }, loadingTime);
  setTimeout(() => {
    setSuccess(false);
  }, successTime);
};

export default FakeLoading;
