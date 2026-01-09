import type { btnProps } from "@/interface/attr-props";
import type { ColorPalette } from "@/type/type-source";
import styled from "styled-components";

// 색상 팔레트 매핑 객체
const colorMap: Record<ColorPalette, string> = {
  primary: "#3b82f6",
  secondary: "#6b7280",
  success: "#10b981",
  danger: "#ff385c",
  warning: "#f59e0b",
  info: "#3b82f6",
  white: "#ffffff",
  black: "#000000",
  gray: "#6b7280",
  red: "#ff385c",
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
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid ${(p) => colorMap[p.$back_color]};
    outline-offset: 2px;
  }
`;

export function BasicButton({ text, type }: btnProps) {
  return (
    <Btn
      type={type}
      $back_color="danger"
      $color="white"
      $height={48}
      $width={100}
      $b_radius={8}
    >
      {text}
    </Btn>
  );
}
