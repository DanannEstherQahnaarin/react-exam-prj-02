import styled from "styled-components";
import { SubHeader } from "@components/Headers";

const TravelGuideContainer = styled.div<{
  $backgroundImage?: string;
}>`
  position: relative;
  width: 100%;
  min-height: 400px;
  background-image: url(${(p) => p.$backgroundImage || ""});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding: 40px;
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
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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

  &:hover {
    opacity: 0.8;
  }
`;

export default function MainTravelGuide() {
  return (
    <TravelGuideContainer $backgroundImage="">
      <Overlay />
      <ContentWrapper>
        <Title>호스트의 안내를 받아 특별한 장소로 떠나는 여행</Title>
        <SubTitle>숙소, 식사, 액티비티 포함</SubTitle>
        <LearnMoreLink href="#" onClick={(e) => e.preventDefault()}>
          자세히 보기 →
        </LearnMoreLink>
      </ContentWrapper>
    </TravelGuideContainer>
  );
}
