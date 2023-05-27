import { styled } from "styled-components";
import { ChildrenType } from "../Buttons/props";

const TitleTextContainer = styled.h1<{ $huge?: boolean; $small?: boolean }>`
  text-align: center;
  font-size: ${({ $huge, $small }) =>
    $huge ? "56px" : $small ? "32px" : "48px"};
  font-weight: 700;
  color: #2d3648;
  line-height: 120%;
`;

const TitleText = ({
  huge,
  small,
  children,
}: { huge?: boolean; small?: boolean } & ChildrenType) => {
  return (
    <TitleTextContainer $small={small} $huge={huge}>
      {children}
    </TitleTextContainer>
  );
};

export default TitleText;
