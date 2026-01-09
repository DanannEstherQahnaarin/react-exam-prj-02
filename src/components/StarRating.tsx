import styled from "styled-components";

interface StarRatingProps {
  rating: number;
}

const StarContainer = styled.div`
  display: inline-flex;
  gap: 2px;
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${(p) => (p.$filled ? "#ffd700" : "#e0e0e0")};
  font-size: 14px;
`;

export function StarRating({ rating }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <StarContainer>
      {stars.map((filled, index) => (
        <Star key={index} $filled={filled}>
          ★
        </Star>
      ))}
    </StarContainer>
  );
}
