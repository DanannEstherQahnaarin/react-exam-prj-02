/**
 * @fileoverview 버튼 컴포넌트 모음
 * 
 * 이 파일은 다양한 스타일의 버튼 컴포넌트를 제공합니다.
 * ColorPalette를 사용하여 일관된 색상 시스템을 제공하며,
 * Styled Components를 사용하여 스타일링합니다.
 * 
 * @component BasicButton - 기본 버튼 컴포넌트 (검색 버튼 등에 사용)
 */

import type { btnProps } from "@/interface/attr-props";
import type { ColorPalette } from "@/type/type-source";
import styled from "styled-components";

/**
 * 색상 팔레트 매핑 객체
 * ColorPalette 타입의 값에 대응하는 실제 색상 코드를 매핑합니다.
 * Airbnb 브랜드 컬러(#ff385c)를 danger/red에 적용했습니다.
 */
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

/**
 * 버튼 스타일 컴포넌트
 * 
 * ColorPalette를 사용하여 색상을 설정하고,
 * 크기, 모서리 반경을 설정할 수 있는 버튼입니다.
 * 호버, 활성, 포커스 상태의 스타일을 포함합니다.
 * 
 * @param {number} $width - 버튼 너비 (px)
 * @param {number} $height - 버튼 높이 (px)
 * @param {ColorPalette} $color - 텍스트 색상
 * @param {ColorPalette} $back_color - 배경 색상
 * @param {number} $b_radius - 모서리 반경 (px)
 */
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

/**
 * 기본 버튼 컴포넌트
 * 
 * 검색 폼 등에서 사용하는 기본 버튼입니다.
 * Airbnb 브랜드 컬러(#ff385c)를 배경색으로 사용하며,
 * 호버 효과, 포커스 스타일, 접근성 속성을 포함합니다.
 * 클릭 이벤트 콜백 함수를 Props로 받아 처리합니다.
 * 
 * @param {btnProps} props - 버튼 Props
 * @param {string} props.text - 버튼에 표시될 텍스트
 * @param {ButtonType} props.type - 버튼 타입 (button, submit, reset)
 * @param {() => void} [props.onClick] - 클릭 이벤트 핸들러 (선택사항)
 * 
 * @example
 * ```tsx
 * <BasicButton 
 *   type="submit" 
 *   text="검색" 
 *   onClick={() => console.log("검색 클릭")}
 * />
 * ```
 */
export function BasicButton({ text, type, onClick }: btnProps) {
  return (
    <Btn
      type={type}
      $back_color="danger"
      $color="white"
      $height={48}
      $width={100}
      $b_radius={8}
      aria-label={text}
      onClick={onClick}
    >
      {text}
    </Btn>
  );
}
