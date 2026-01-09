import { useState } from "react";
import styled from "styled-components";
import { BasicButton } from "@/components/Buttons";
import * as Box from "@components/Containers";
import { SubHeader } from "@components/Headers";
import type { TopBodyProps } from "@interface/section-props";

const HeroSection = styled.div<{ $backgroundImage?: string }>`
  position: relative;
  width: 100%;
  min-height: 500px;
  background-image: url(${(p) => p.$backgroundImage || "/background.jpg"});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
`;

const SearchFormContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  max-width: 850px;
  width: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1;
`;

const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #ff385c;
  }
`;

const SelectField = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #ff385c;
  }
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  display: block;
`;

export default function TopBody({ onSubmit }: TopBodyProps) {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit({
        destination,
        checkIn,
        checkOut,
        guests,
      });
    }
  };

  return (
    <HeroSection $backgroundImage="/background.jpg">
      <SearchFormContainer>
        <FormTitle>특색있는 숙소와 즐길거리를 예약하세요</FormTitle>
        <form action="#" onSubmit={handleSubmit}>
          <FormGrid>
            <div>
              <Label>목적지</Label>
              <InputField
                type="text"
                placeholder="모든 위치"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <Box.GridBox count={2} size={1} column_gap={10} row_gap={5}>
              <div>
                <Label>체크인</Label>
                <InputField
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div>
                <Label>체크아웃</Label>
                <InputField
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
            </Box.GridBox>
            <div>
              <Label>인원</Label>
              <SelectField
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
              >
                <option value={0}>인원</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </SelectField>
            </div>
          </FormGrid>
          <Box.ButtonBox align="center">
            <BasicButton type="submit" text="검색" />
          </Box.ButtonBox>
        </form>
      </SearchFormContainer>
    </HeroSection>
  );
}
