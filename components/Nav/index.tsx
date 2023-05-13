"use client";

import { styled } from "styled-components";
import NavButton from "./NavButton";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 80px;
  align-items: center;
  border-bottom: 2px solid #1a202c;
`;
const NavContainer = styled.nav`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
  width: 617px;
  height: 48px;
`;

export default function Nav() {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <NavContainer>
        <NavButton href="/">ABOUT</NavButton>
        <NavButton href="/convert">파일 변환</NavButton>
        <NavButton href="/previous-test">기출 자료</NavButton>
        <NavButton href="/faq">도움말</NavButton>
        <NavButton href="help">문의하기</NavButton>
      </NavContainer>
    </HeaderContainer>
  );
}
