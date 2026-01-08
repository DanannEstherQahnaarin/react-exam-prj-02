import styled from "styled-components";
import type { ContainerProps } from "@node-props";

const MainHeaderDiv = styled.div`
  display: grid;
  color: #4b4b4b;
  font-size: 32px;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  justify-items: center;
  padding-top: 5px;
  padding-bottom: 10px;
  text-shadow: 0 2px 4px rgba(75, 75, 75, 0.2);
  letter-spacing: -0.5px;
`;

const SubHeaderDiv = styled.div`
  display: grid;
  justify-items: left;
  color: #666;
  font-size: 16px;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", sans-serif;
  margin: 0;
  line-height: 1.5;
`;

export function MainHeader({ children }: ContainerProps) {
  return <MainHeaderDiv>{children}</MainHeaderDiv>;
}

export function SubHeader({ children }: ContainerProps) {
  return <SubHeaderDiv>{children}</SubHeaderDiv>;
}
