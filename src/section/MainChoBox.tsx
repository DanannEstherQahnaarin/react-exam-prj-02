import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import { Image } from "@components/Images";
import type { MainChoBoxProps } from "@interface/section-props";

export default function MainChoBox({ onDestinationClick }: MainChoBoxProps) {
  const handleDestinationClick = (id: string) => {
    if (onDestinationClick) {
      onDestinationClick(id);
    }
  };

  return (
    <Box.ItemBox>
      <MainHeader>추천여행지</MainHeader>
      <Box.GridBox count={5} size={1} column_gap={20} row_gap={20}>
        <Image
          image=""
          text=""
          height={200}
          width={200}
          onClick={() => handleDestinationClick("1")}
        />
        <Image
          image=""
          text=""
          height={200}
          width={200}
          onClick={() => handleDestinationClick("2")}
        />
        <Image
          image=""
          text=""
          height={200}
          width={200}
          onClick={() => handleDestinationClick("3")}
        />
        <Image
          image=""
          text=""
          height={200}
          width={200}
          onClick={() => handleDestinationClick("4")}
        />
        <Image
          image=""
          text=""
          height={200}
          width={200}
          onClick={() => handleDestinationClick("5")}
        />
      </Box.GridBox>
    </Box.ItemBox>
  );
}
