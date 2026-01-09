import TopHeader from "@section/TopHeader";
import TopBody from "@section/TopBody";
import MainAroundBox from "@section/MainAroundBox";
import MainTravelGuide from "@section/MainTravelGuide";
import MainChoBox from "@section/MainChoBox";
import MainAdBox from "@section/MainAdBox";
import MainLodging from "@section/MainLodging";

export default function App() {
  return (
    <>
      <header>
        <TopHeader />
        <TopBody />
      </header>
      <main>
        <MainAroundBox />
        <MainTravelGuide />
        <MainChoBox />
        <MainAdBox />
        <MainLodging />
      </main>
    </>
  );
}
