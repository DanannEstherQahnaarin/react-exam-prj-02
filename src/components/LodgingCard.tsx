/**
 * @fileoverview 숙소 카드 컴포넌트
 * 
 * 숙소 정보를 카드 형태로 표시하는 컴포넌트입니다.
 * 이미지, 카테고리, 제목, 평점, 호스트 정보를 포함하며,
 * 클릭 이벤트와 키보드 접근성을 지원합니다.
 * React.memo를 사용하여 성능 최적화가 적용되어 있습니다.
 * 
 * @component LodgingCard - 숙소 카드 컴포넌트
 */

import { memo } from "react";
import styled from "styled-components";
import type { LodgingItem } from "@/type/lodging-data";
import { Image } from "@components/Images";
import { SubHeader } from "@components/Headers";
import { StarRating } from "@components/StarRating";

/**
 * 숙소 카드 Props 인터페이스
 */
interface LodgingCardProps {
  lodging: LodgingItem;
  onClick?: () => void;
}

const CardContainer = styled.div<{ $clickable: boolean }>`
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: transform 0.3s ease;

  ${(p) =>
    p.$clickable &&
    `
    &:hover {
      transform: translateY(-4px);
    }
  `}
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.02);
  }
`;

const TitleText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #666;
`;

const HostInfo = styled.span`
  font-size: 12px;
  color: #666;
`;

/**
 * 숙소 카드 컴포넌트 (내부 구현)
 * 
 * 숙소의 이미지, 카테고리, 제목, 평점, 호스트 정보를 표시합니다.
 * 클릭 가능한 경우 호버 효과와 키보드 접근성을 제공합니다.
 * 
 * @param {LodgingCardProps} props - 숙소 카드 Props
 * @param {LodgingItem} props.lodging - 숙소 정보 객체
 * @param {() => void} [props.onClick] - 클릭 이벤트 핸들러 (선택사항)
 * 
 * @example
 * ```tsx
 * <LodgingCard 
 *   lodging={{
 *     id: "1",
 *     image: "/lodging.jpg",
 *     category: "오두막",
 *     title: "BALIAN TREEHOUSE",
 *     rating: 5,
 *     hostInfo: "185 슈퍼호스트"
 *   }}
 *   onClick={() => handleLodgingClick("1")}
 * />
 * ```
 */
function LodgingCardComponent({ lodging, onClick }: LodgingCardProps) {
  const handleKeyDown = onClick
    ? (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }
    : undefined;

  return (
    <CardContainer
      $clickable={!!onClick}
      onClick={onClick}
      role={onClick ? "button" : "article"}
      tabIndex={onClick ? 0 : -1}
      aria-label={`${lodging.category}: ${lodging.title}, 평점 ${lodging.rating}점, ${lodging.hostInfo}`}
      onKeyDown={handleKeyDown}
    >
      <ImageContainer aria-hidden="true">
        <Image
          image={lodging.image}
          text={lodging.title}
          height={200}
          width={200}
        />
      </ImageContainer>
      <SubHeader>{lodging.category}</SubHeader>
      <TitleText>{lodging.title}</TitleText>
      <RatingContainer aria-label={`평점 ${lodging.rating}점`}>
        <StarRating rating={lodging.rating} />
        <HostInfo>{lodging.hostInfo}</HostInfo>
      </RatingContainer>
    </CardContainer>
  );
}

/**
 * 숙소 카드 컴포넌트 (메모이제이션 적용)
 * 
 * React.memo로 래핑하여 props가 변경되지 않으면 리렌더링을 방지합니다.
 * 성능 최적화를 위한 메모이제이션 버전입니다.
 */
export const LodgingCard = memo(LodgingCardComponent);
