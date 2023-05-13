import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const MainSectionContainer = styled.section`
  margin-top: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
  h1 {
    text-align: center;
    font-size: 56px;
    font-weight: 700;
    color: #2d3648;
  }
  p {
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    color: #2d3648;
  }
`;

const MainSection = ({ children }: ChildrenType) => {
  return <MainSectionContainer>{children}</MainSectionContainer>;
};

export default MainSection;
