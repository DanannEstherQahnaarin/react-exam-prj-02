import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import { Image, ImageCard } from "@components/Images";

export default function MainAroundBox() {
  return (
    <Box.ItemBox>
      <MainHeader>에어비엔둘러보기</MainHeader>
      <Box.GridBox count={4} size={1} column_gap={10} row_gap={5}>
        <ImageCard
          image=""
          text="숙소 및 부티크 호텔"
          height={200}
          width={200}
        />
        <ImageCard image="" text="트립" height={200} width={200} />
        <ImageCard image="" text="어드벤처" height={200} width={200} />
        <ImageCard image="" text="레스토랑" height={200} width={200} />
      </Box.GridBox>
      <Image image="" text="" height={200} width={200} />
    </Box.ItemBox>
  );
}
