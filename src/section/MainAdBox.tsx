import styled from "styled-components";
import * as Box from "@components/Containers";
import type { MainAdBoxProps } from "@interface/section-props";

const AdContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px 0;
  min-height: 200px;
`;

const AdSlot = styled.div<{ $clickable: boolean }>`
  background-color: #f5f5f5;
  border: 1px dashed #ddd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  color: #999;
  font-size: 14px;
  cursor: ${(p) => (p.$clickable ? "pointer" : "default")};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(p) => (p.$clickable ? "#eeeeee" : "#f5f5f5")};
  }
`;

export default function MainAdBox({ onAdClick }: MainAdBoxProps) {
  const handleAdClick = (adId: number) => {
    if (onAdClick) {
      onAdClick(adId);
    }
  };

  return (
    <Box.ItemBox>
      <AdContainer>
        <AdSlot
          $clickable={!!onAdClick}
          onClick={() => handleAdClick(1)}
        >
          광고 슬롯 1
        </AdSlot>
        <AdSlot
          $clickable={!!onAdClick}
          onClick={() => handleAdClick(2)}
        >
          광고 슬롯 2
        </AdSlot>
        <AdSlot
          $clickable={!!onAdClick}
          onClick={() => handleAdClick(3)}
        >
          광고 슬롯 3
        </AdSlot>
      </AdContainer>
    </Box.ItemBox>
  );
}
