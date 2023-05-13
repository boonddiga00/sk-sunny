import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const TitleTextContainer = styled.h1<{ $huge: boolean }>`
  text-align: center;
  font-size: ${({ $huge }) => ($huge ? "56px" : "48px")};
  font-weight: 700;
  color: #2d3648;
  line-height: 120%;
`;

const TitleText = ({ huge, children }: { huge: boolean } & ChildrenType) => {
  return <TitleTextContainer $huge={huge}>{children}</TitleTextContainer>;
};

export default TitleText;
