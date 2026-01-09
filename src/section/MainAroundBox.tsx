import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import { ImageCard } from "@components/Images";
import type { MainAroundBoxProps } from "@interface/section-props";

export default function MainAroundBox({ onCardClick }: MainAroundBoxProps) {
  const handleCardClick = (cardId: string) => {
    if (onCardClick) {
      onCardClick(cardId);
    }
  };

  return (
    <Box.ItemBox role="region" aria-label="에어비앤비 둘러보기">
      <MainHeader>에어비엔둘러보기</MainHeader>
      <Box.GridBox count={4} size={1} column_gap={20} row_gap={20}>
        <ImageCard
          image=""
          text="숙소 및 부티크 호텔"
          height={200}
          width={200}
          onClick={() => handleCardClick("hotel")}
        />
        <ImageCard
          image=""
          text="트립"
          height={200}
          width={200}
          onClick={() => handleCardClick("trip")}
        />
        <ImageCard
          image=""
          text="어드벤처"
          height={200}
          width={200}
          onClick={() => handleCardClick("adventure")}
        />
        <ImageCard
          image=""
          text="레스토랑"
          height={200}
          width={200}
          onClick={() => handleCardClick("restaurant")}
        />
      </Box.GridBox>
    </Box.ItemBox>
  );
}
