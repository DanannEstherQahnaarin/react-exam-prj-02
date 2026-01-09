/**
 * @fileoverview 별점 컴포넌트
 * 
 * 0-5점 범위의 평점을 별 아이콘으로 표시하는 컴포넌트입니다.
 * 채워진 별과 비어있는 별로 평점을 시각적으로 표현합니다.
 * React.memo를 사용하여 성능 최적화가 적용되어 있습니다.
 * 
 * @component StarRating - 별점 표시 컴포넌트
 */

import { memo } from "react";
import styled from "styled-components";

/**
 * 별점 Props 인터페이스
 */
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

/**
 * 별점 컴포넌트 (내부 구현)
 * 
 * 0-5 범위의 평점을 받아 5개의 별 중 해당 개수만큼 채워진 별로 표시합니다.
 * 예: rating이 3이면 별 3개는 채워지고, 2개는 비어있습니다.
 * 접근성을 위해 aria-label을 제공합니다.
 * 
 * @param {StarRatingProps} props - 별점 Props
 * @param {number} props.rating - 평점 (0-5 범위)
 * 
 * @example
 * ```tsx
 * <StarRating rating={5} />  // 5개의 별이 모두 채워짐
 * <StarRating rating={3} />  // 3개의 별만 채워짐
 * ```
 */
function StarRatingComponent({ rating }: StarRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <StarContainer role="img" aria-label={`평점 ${rating}점`}>
      {stars.map((filled, index) => (
        <Star key={index} $filled={filled} aria-hidden="true">
          ★
        </Star>
      ))}
    </StarContainer>
  );
}

/**
 * 별점 컴포넌트 (메모이제이션 적용)
 * 
 * React.memo로 래핑하여 rating이 변경되지 않으면 리렌더링을 방지합니다.
 * 성능 최적화를 위한 메모이제이션 버전입니다.
 */
export const StarRating = memo(StarRatingComponent);
