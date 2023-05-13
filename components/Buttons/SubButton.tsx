import { styled } from "styled-components";
import { CommonProps } from "./props";

const TEXT_COLOR = "#2D3648";
const DEFAULT_COLOR = "#EDF0F7";
const ACTIVE_COLOR = "#C6C9D0";

const Button = styled.button`
  all: unset;
  font-family: "Inter";
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  text-align: center;
  cursor: pointer;
  color: ${TEXT_COLOR};
  background-color: ${DEFAULT_COLOR};
  border-radius: 6px;
  padding: 8px 12px;
  &:hover {
    background-color: ${ACTIVE_COLOR};
  }
  &:focus {
    background-color: ${ACTIVE_COLOR};
  }
`;

const SubButton = ({ children, onClick }: CommonProps) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default SubButton;
