import * as Box from "@components/Containers";
import { MainHeader } from "@components/Headers";
import { LodgingCard } from "@components/LodgingCard";
import type { MainLodgingProps } from "@interface/section-props";

const defaultLodgings: LodgingItem[] = [
  {
    id: "1",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "2",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "3",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "4",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "5",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "6",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "7",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
  {
    id: "8",
    image: "",
    category: "오두막",
    title: "BALIAN TREEHOUSE w beautiful pool",
    rating: 5,
    hostInfo: "185 슈퍼호스트",
  },
];

export default function MainLodging({
  lodgings = defaultLodgings,
  onLodgingClick,
}: MainLodgingProps) {
  const handleLodgingClick = (lodgingId: string) => {
    if (onLodgingClick) {
      onLodgingClick(lodgingId);
    }
  };

  return (
    <Box.ItemBox>
      <MainHeader>전세계 숙소</MainHeader>
      <Box.GridBox count={4} size={1} column_gap={20} row_gap={30}>
        {lodgings.map((lodging) => (
          <LodgingCard
            key={lodging.id}
            lodging={lodging}
            onClick={() => handleLodgingClick(lodging.id)}
          />
        ))}
      </Box.GridBox>
    </Box.ItemBox>
  );
}
