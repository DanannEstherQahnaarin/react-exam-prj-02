import type { ButtonType } from "@/type/type-source";

export interface IconDivProps {
  img: string;
}

export interface BoxProps {
  img: string;
  text: string;
}

export interface ImageProps {
  image: string;
  text?: string;
  height: number;
  width: number;
  onClick?: () => void;
}

export interface btnProps {
    text: string;
    type: ButtonType;
  }