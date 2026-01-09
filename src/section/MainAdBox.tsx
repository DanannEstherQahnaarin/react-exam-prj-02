import styled from "styled-components";
import * as Box from "@components/Containers";

const AdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px 0;
  min-height: 150px;
`;

const AdSlot = styled.div`
  background-color: #f5f5f5;
  border: 1px dashed #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  color: #999;
  font-size: 14px;
`;

export default function MainAdBox() {
  return (
    <Box.ItemBox>
      <AdContainer>
        <AdSlot>광고 슬롯 1</AdSlot>
        <AdSlot>광고 슬롯 2</AdSlot>
        <AdSlot>광고 슬롯 3</AdSlot>
      </AdContainer>
    </Box.ItemBox>
  );
}
