import { styled } from "styled-components";

const MAIN_COLOR = "#2d3648";
const WHITE = "#FFFFFF";

const Button = styled.button`
  text-align: center;
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${MAIN_COLOR};
  border: 2px solid ${MAIN_COLOR};
  border-radius: 6px;
  padding: 12px 20px;
  &:hover {
    color: ${WHITE};
    background-color: ${MAIN_COLOR};
  }
  &:focus {
    color: ${WHITE};
    background-color: ${MAIN_COLOR};
  }
`;

const MainButton = ({ children }: { children: React.ReactNode }) => {
  return <Button>{children}</Button>;
};

export default MainButton;
