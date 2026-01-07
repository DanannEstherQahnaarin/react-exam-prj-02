import styled from "styled-components";
import type { ReactNode } from "react";

const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 10px;
`

const Container = styled.div`
    padding: 0px 150px;
    display: grid;
    grid-template-columns: auto;
    column-gap: 10px;
    row-gap: 5px;
`

const ButtonContainer = styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`

interface ContainerProps {
    children?: ReactNode | null;
}

export function ItemBox({ children }: ContainerProps) {
    return <Container>{children}</Container>;
}

export function ImageBox({ children }: ContainerProps) {
    return <ImageContainer>{children}</ImageContainer>;
}

export function ButtonBox({ children }: ContainerProps) {
    return <ButtonContainer>{children}</ButtonContainer>;
}