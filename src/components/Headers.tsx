import styled from "styled-components";
import type { ReactNode } from "react";

const MainHeaderDiv = styled.div`
  display: grid;
  color: #f17882;
  font-size: 32px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  justify-items: center;
  padding-top: 5px;
  padding-bottom: 10px;
  text-shadow: 0 2px 4px rgba(230, 57, 70, 0.2);
  letter-spacing: -0.5px;
`;

const SubHeaderDiv = styled.div`
  display: grid;
  justify-items: center;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  line-height: 1.5;
`;

interface ContainerProps {
  content: ReactNode;
}

export function MainHeader({ content }: ContainerProps) {
  return <MainHeaderDiv>{content}</MainHeaderDiv>;
}

export function SubHeader({ content }: ContainerProps) {
  return <SubHeaderDiv>{content}</SubHeaderDiv>;
}
