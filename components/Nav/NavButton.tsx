import { styled } from "styled-components";
import CustomLink from "../CustomLink";
import { ChildrenType } from "../Buttons/props";

const DEFAULT_COLOR = "#717D96";
const ACTIVE_COLOR = "#2D3648";

const NavButtonContainer = styled.li<{ $isNow: boolean }>`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  color: ${({ $isNow }) => ($isNow ? ACTIVE_COLOR : DEFAULT_COLOR)};
  border-bottom: ${({ $isNow }) =>
    $isNow ? `2px solid ${ACTIVE_COLOR}` : "none"};
  cursor: pointer;
`;

const NavButton = ({
  href,
  pathname,
  children,
}: { href: string; pathname: string } & ChildrenType) => {
  return (
    <NavButtonContainer $isNow={pathname === href}>
      <CustomLink href={href}>{children}</CustomLink>
    </NavButtonContainer>
  );
};

export default NavButton;
