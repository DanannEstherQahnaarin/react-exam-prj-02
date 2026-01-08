import * as Box from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";
import { Image, ImageCard } from "@components/Images";
import TopHeader from "./section/TopHeader";

export default function App() {
  return (
    <>
      <header>
        <TopHeader/>
        <div className="nav_body">
          <Box.SearchBox>
            <SubHeader>특색있는 숙소와 즐길거리를 예약하세요</SubHeader>
            <SubHeader>목적지</SubHeader>
            <form action="#">
              <div>
                <input type="text" placeholder="모든 위치" />
              </div>
              <Box.GridBox count={2} size={1} column_gap={10} row_gap={5}>
                <SubHeader>체크인</SubHeader>
                <SubHeader>체크아웃</SubHeader>
              </Box.GridBox>
              <Box.GridBox count={2} size={1} column_gap={10} row_gap={5}>
                <div>
                  <input type="date" />
                </div>
                <div>
                  <input type="date" />
                </div>
              </Box.GridBox>
              <div>인원</div>
              <div>
                <select>
                  <option>인원</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <Box.ButtonBox>
                <button type="submit">검색</button>
              </Box.ButtonBox>
            </form>
          </Box.SearchBox>
        </div>
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
