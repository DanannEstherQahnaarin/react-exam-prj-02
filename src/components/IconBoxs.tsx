import styled from "styled-components";


interface IconDivProps {
  img: string;
}

const IconDiv = styled.div<IconDivProps>`
  background: url(${(props) => props.img});
  height: 200px;
  background-size: cover;
  display: grid;
`

interface BoxProps {
    img: string;
    title: string;
}

export function ImgBox({ img, title }: BoxProps) {
    return (
      <IconDiv img={img}>
        <label>{title}</label>
      </IconDiv>
    )
}
