import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import { Image } from "@components/Images";

export default function MainChoBox() {
  return (
    <Box.ItemBox>
      <MainHeader>추천여행지</MainHeader>
      <Box.GridBox count={5} size={1} column_gap={10} row_gap={5}>
        <Image image="" text="" height={200} width={200} />
        <Image image="" text="" height={200} width={200} />
        <Image image="" text="" height={200} width={200} />
        <Image image="" text="" height={200} width={200} />
        <Image image="" text="" height={200} width={200} />
      </Box.GridBox>
    </Box.ItemBox>
  );
}
