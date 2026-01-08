import { BasicButton } from "@/components/Buttons";
import * as Box from "@components/Containers";
import { MainHeader, SubHeader } from "@components/Headers";

export default function TopBody(){
    return (
        <div className="nav_body">
          <Box.SearchBox>
            <MainHeader>특색있는 숙소와 즐길거리를 예약하세요</MainHeader>
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
              <Box.ButtonBox align="right">
                <BasicButton type="submit" text="검색"/>
              </Box.ButtonBox>
            </form>
          </Box.SearchBox>
        </div>
    );
}