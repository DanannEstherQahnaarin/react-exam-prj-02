import { GridBox, ItemBox, ButtonBox } from "@components/Containers";

export default function App() {
  return (
    <>
      <header>
        <nav>
          <div className="logo">logo</div>
          <GridBox count={4} size={1} column_gap={10} row_gap={5}>
            <div>m1</div>
            <div>m2</div>
            <div>m3</div>
            <div>m4</div>
          </GridBox>
        </nav>
        <div className="nav_body">
          <div className="search_box">
            <div className="search_title">검색 제목</div>
            <div className="search_subtitle">목적지</div>
            <form action="#">
              <div>
                <input type="text" placeholder="모든 위치" />
              </div>
              <GridBox count={2} size={1} column_gap={10} row_gap={5}>
                <div className="search_subtitle">체크인</div>
                <div className="search_subtitle">체크아웃</div>
              </GridBox>
              <GridBox count={2} size={1} column_gap={10} row_gap={5}>
                <div>
                  <input type="date" />
                </div>
                <div>
                  <input type="date" />
                </div>
              </GridBox>
              <div>인원</div>
              <div>
                <select>
                  <option>인원</option>
                  <option>1</option>
                  <option>2</option>
                </select>
              </div>
              <ButtonBox>
                <button type="submit">검색</button>
              </ButtonBox>
            </form>
          </div>
        </div>
      </header>
      <main>
        <ItemBox>
          <div className="around_box">
            <div>에어비엔둘러보기</div>
            <GridBox count={4} size={1} column_gap={10} row_gap={5}>
              <div>
                <div>이미지</div>
                <div>숙소 및 부티크 호텔</div>
              </div>
              <div>
                <div>이미지</div>
                <div>트립</div>
              </div>
              <div>
                <div>이미지</div>
                <div>어드벤처</div>
              </div>
              <div>
                <div>이미지</div>
                <div>레스토랑</div>
              </div>
            </GridBox>
            <div>이미지</div>
          </div>
        </ItemBox>
        <ItemBox>
          <div className="cho_box">
            <div>추천여행지</div>
            <GridBox count={5} size={1} column_gap={10} row_gap={5}>
              <div>이미지</div>
              <div>이미지</div>
              <div>이미지</div>
              <div>이미지</div>
              <div>이미지</div>
            </GridBox>
          </div>
        </ItemBox>
        <ItemBox>
          <div className="ad_box">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </ItemBox>
        <ItemBox>
          <div className="home_box">
            <div>전세계 숙소</div>
            <div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
              <div>
                <div>이미지</div>
                <div>오두막</div>
                <div>BALIAN TREEHOUSE w beautiful pool</div>
                <div>
                  <span>☆☆☆☆☆</span>
                  <span>185 슈퍼호스트트</span>
                </div>
              </div>
            </div>
          </div>
        </ItemBox>
      </main>
    </>
  );
}
