import type { LodgingItem } from "@/type/lodging-data";

export interface SearchData {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface TopHeaderProps {
  onLogoClick?: () => void;
  onMenuClick?: (menu: string) => void;
}

export interface TopBodyProps {
  onSubmit?: (data: SearchData) => void;
}

export interface MainAroundBoxProps {
  onCardClick?: (cardId: string) => void;
}

export interface MainTravelGuideProps {
  onLearnMoreClick?: () => void;
}

export interface MainChoBoxProps {
  onDestinationClick?: (id: string) => void;
}

export interface MainAdBoxProps {
  onAdClick?: (adId: number) => void;
}

export interface MainLodgingProps {
  lodgings?: LodgingItem[];
  onLodgingClick?: (lodgingId: string) => void;
}
