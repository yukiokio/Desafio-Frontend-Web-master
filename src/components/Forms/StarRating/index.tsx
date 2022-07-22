import React, { useState, Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IStarRatingProps {
  setStarSelected: Dispatch<SetStateAction<number>>;
  starSelected: number;
}

const StarRating: React.FC<IStarRatingProps> = ({
  starSelected,
  setStarSelected,
}) => {
  const [hoverStar, setHoverStar] = useState(0);
  return (
    <S.Wrapper>
      {[...Array(5)]
        .map((_, i) => i + 1)
        .map(idx => (
          <S.Star
            type="button"
            key={idx}
            tabIndex={0}
            onMouseEnter={() => setHoverStar(idx)}
            onMouseLeave={() => setHoverStar(0)}
            onClick={() => setStarSelected(idx)}
          >
            <S.StarIcon
              key={idx}
              colorProps={idx <= (hoverStar || starSelected) ? true : false}
            >
              &#9733;
            </S.StarIcon>
          </S.Star>
        ))}
    </S.Wrapper>
  );
};

export default StarRating;
