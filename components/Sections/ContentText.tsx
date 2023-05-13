import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const ContentTextContainer = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: #2d3648;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
`;

const ContentText = ({ children }: ChildrenType) => {
  return <ContentTextContainer>{children}</ContentTextContainer>;
};

export default ContentText;
