import type { btnProps } from "@/interface/attr-props";
import type { ColorPalette } from "@/type/type-source";
import styled from "styled-components";

// 색상 팔레트 매핑 객체
const colorMap: Record<ColorPalette, string> = {
  primary: "#3b82f6",
  secondary: "#6b7280",
  success: "#10b981",
  danger: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
  white: "#ffffff",
  black: "#000000",
  gray: "#6b7280",
  red: "#ff0000",
};

const Btn = styled.button<{
  $width: number;
  $height: number;
  $color: ColorPalette;
  $back_color: ColorPalette;
  $b_radius: number;
}>`
  background-color: ${(p) => colorMap[p.$back_color]};
  color: ${(p) => colorMap[p.$color]};
  width: ${(p) => p.$width}px;
  height: ${(p) => p.$height}px;
  border-radius: ${(p) => p.$b_radius}px;
  border: 0;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export function BasicButton({ text, type }: btnProps) {
  return (
    <Btn
      type={type}
      $back_color="red"
      $color="white"
      $height={30}
      $width={80}
      $b_radius={15}
    >
      {text}
    </Btn>
  );
}
