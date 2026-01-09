import styled from "styled-components";
import { SubHeader } from "@components/Headers";
import type { MainTravelGuideProps } from "@interface/section-props";

const TravelGuideContainer = styled.div<{
  $backgroundImage?: string;
}>`
  position: relative;
  width: 100%;
  min-height: 500px;
  background-image: url(${(p) => p.$backgroundImage || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;

  @media (max-width: 768px) {
    min-height: 400px;
    padding: 40px 20px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubTitle = styled(SubHeader)`
  color: white;
  margin-bottom: 24px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const LearnMoreLink = styled.a`
  color: white;
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateX(4px);
  }

  &:active {
    opacity: 0.8;
  }
`;

export default function MainTravelGuide({ onLearnMoreClick }: MainTravelGuideProps) {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (onLearnMoreClick) {
      onLearnMoreClick();
    }
  };

  return (
    <TravelGuideContainer $backgroundImage="/background.jpg" role="region" aria-label="여행 가이드">
      <Overlay aria-hidden="true" />
      <ContentWrapper>
        <Title>호스트의 안내를 받아 특별한 장소로 떠나는 여행</Title>
        <SubTitle>숙소, 식사, 액티비티 포함</SubTitle>
        <LearnMoreLink
          href="#"
          onClick={handleLearnMoreClick}
          aria-label="여행 가이드 자세히 보기"
        >
          자세히 보기 →
        </LearnMoreLink>
      </ContentWrapper>
    </TravelGuideContainer>
  );
}
