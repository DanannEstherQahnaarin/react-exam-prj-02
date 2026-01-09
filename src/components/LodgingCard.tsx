import styled from "styled-components";
import type { LodgingItem } from "@/type/lodging-data";
import { Image } from "@components/Images";
import { SubHeader } from "@components/Headers";
import { StarRating } from "@components/StarRating";

interface LodgingCardProps {
  lodging: LodgingItem;
  onClick?: () => void;
}

const CardContainer = styled.div<{ $clickable: boolean }>`
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
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

export function LodgingCard({ lodging, onClick }: LodgingCardProps) {
  return (
    <CardContainer $clickable={!!onClick} onClick={onClick}>
      <ImageContainer>
        <Image
          image={lodging.image}
          text=""
          height={200}
          width={200}
        />
      </ImageContainer>
      <SubHeader>{lodging.category}</SubHeader>
      <TitleText>{lodging.title}</TitleText>
      <RatingContainer>
        <StarRating rating={lodging.rating} />
        <HostInfo>{lodging.hostInfo}</HostInfo>
      </RatingContainer>
    </CardContainer>
  );
}
