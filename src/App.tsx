import * as Box from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";
import { Image, ImageCard } from "@components/Images";
import TopHeader from "@section/TopHeader";
import TopBody from "@section/TopBody";

export default function App() {
  return (
    <>
      <header>
        <TopHeader/>
        <TopBody/>
      </header>
      <main>
        <Box.ItemBox>
          <div className="around_box">
            <MainHeader>에어비엔둘러보기</MainHeader>
            <Box.GridBox count={4} size={1} column_gap={10} row_gap={5}>
              <ImageCard image="" text="숙소 및 부티크 호텔" height={200} width={200}/>
              <ImageCard image="" text="트립" height={200} width={200}/>
              <ImageCard image="" text="어드벤처" height={200} width={200}/>
              <ImageCard image="" text="레스토랑" height={200} width={200}/>
            </Box.GridBox>
            <Image image="" text="" height={200} width={200} />
          </div>
        </Box.ItemBox>
        <Box.ItemBox>
          <div className="cho_box">
            <MainHeader>추천여행지</MainHeader>
            <Box.GridBox count={5} size={1} column_gap={10} row_gap={5}>
              <Image image="" text="" height={200} width={200} />
              <Image image="" text="" height={200} width={200} />
              <Image image="" text="" height={200} width={200} />
              <Image image="" text="" height={200} width={200} />
              <Image image="" text="" height={200} width={200} />
            </Box.GridBox>
          </div>
        </Box.ItemBox>
        <Box.ItemBox>
          <div className="ad_box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Box.ItemBox>
        <Box.ItemBox>
          <div className="home_box">
            <MainHeader>전세계 숙소</MainHeader>
            <Box.GridBox count={4} size={1} column_gap={10} row_gap={5}>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <Image image="" text="" height={200} width={200} />
                <SubHeader>오두막</SubHeader>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
            </Box.GridBox>
          </div>
        </Box.ItemBox>
      </main>
    </>
  );
}
