import TopHeader from "@section/TopHeader";
import TopBody from "@section/TopBody";
import MainAroundBox from "@section/MainAroundBox";
import MainTravelGuide from "@section/MainTravelGuide";
import MainChoBox from "@section/MainChoBox";
import MainAdBox from "@section/MainAdBox";
import MainLodging from "@section/MainLodging";
import type { SearchData } from "@interface/section-props";

export default function App() {
  // TopHeader 이벤트 핸들러
  const handleLogoClick = () => {
    console.log("로고 클릭됨");
    // 홈으로 이동 등의 로직 구현
  };

  const handleMenuClick = (menu: string) => {
    console.log(`메뉴 클릭됨: ${menu}`);
    // 메뉴별 라우팅 로직 구현
  };

  // TopBody 이벤트 핸들러
  const handleSearchSubmit = (data: SearchData) => {
    console.log("검색 데이터:", data);
    // 검색 로직 구현
  };

  // MainAroundBox 이벤트 핸들러
  const handleCardClick = (cardId: string) => {
    console.log(`카드 클릭됨: ${cardId}`);
    // 카드별 페이지 이동 로직 구현
  };

  // MainTravelGuide 이벤트 핸들러
  const handleLearnMoreClick = () => {
    console.log("자세히 보기 클릭됨");
    // 여행 가이드 상세 페이지 이동 로직 구현
  };

  // MainChoBox 이벤트 핸들러
  const handleDestinationClick = (id: string) => {
    console.log(`여행지 클릭됨: ${id}`);
    // 여행지 상세 페이지 이동 로직 구현
  };

  // MainAdBox 이벤트 핸들러
  const handleAdClick = (adId: number) => {
    console.log(`광고 클릭됨: ${adId}`);
    // 광고 링크 이동 로직 구현
  };

  // MainLodging 이벤트 핸들러
  const handleLodgingClick = (lodgingId: string) => {
    console.log(`숙소 클릭됨: ${lodgingId}`);
    // 숙소 상세 페이지 이동 로직 구현
  };

  return (
    <>
      <header>
        <TopHeader onLogoClick={handleLogoClick} onMenuClick={handleMenuClick} />
        <TopBody onSubmit={handleSearchSubmit} />
      </header>
      <main>
        <MainAroundBox onCardClick={handleCardClick} />
        <MainTravelGuide onLearnMoreClick={handleLearnMoreClick} />
        <MainChoBox onDestinationClick={handleDestinationClick} />
        <MainAdBox onAdClick={handleAdClick} />
        <MainLodging onLodgingClick={handleLodgingClick} />
      </main>
    </>
  );
}
