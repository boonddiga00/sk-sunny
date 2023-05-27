import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const MainSectionContainer = styled.section<{ $small?: true }>`
  margin-top: ${({ $small }) => ($small ? "50px" : "163px")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
`;

const MainSection = ({ children, small }: { small?: true } & ChildrenType) => {
  return <MainSectionContainer $small={small}>{children}</MainSectionContainer>;
};

export default MainSection;
