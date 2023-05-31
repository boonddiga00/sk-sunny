import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const ContentTextContainer = styled.p<{ $bold?: true }>`
  text-align: center;
  font-size: 22px;
  font-weight: ${({ $bold }) => ($bold ? 700 : 400)};
  color: #2d3648;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  width: 946px;
  line-height: 1.94;
  white-space: pre-line;
`;

const ContentText = ({ children, bold }: ChildrenType & { bold?: true }) => {
  return <ContentTextContainer $bold={bold}>{children}</ContentTextContainer>;
};

export default ContentText;
