import type { ReactNode } from "react";
 
export interface GridProps {
    count: number;
    size: number;
    column_gap: number;
    row_gap: number;
    children?: ReactNode;
  }

  export interface ContainerProps {
    children?: ReactNode | null;
  }

  export interface PositionProps {
    position?: "relative" | "absolute" | "static";
    top?: number;
    left?: number;
    children?: ReactNode;
  }
