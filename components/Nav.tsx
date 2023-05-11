"use client";

import Link from "./Link";
import { styled } from "styled-components";

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

const NavButton = styled.li`
  font-family: "Inter";
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  color: #2d3648;
  cursor: pointer;
`;

export default function Nav() {
  return (
    <HeaderContainer>
      <div>Logo</div>
      <NavContainer>
        <NavButton>
          <Link href="/">ABOUT</Link>
        </NavButton>
        <NavButton>
          <Link href="/convert">파일 변환</Link>
        </NavButton>
        <NavButton>
          <Link href="/previous-test">기출 자료</Link>
        </NavButton>
        <NavButton>
          <Link href="/faq">도움말</Link>
        </NavButton>
        <NavButton>
          <Link href="/help">문의하기</Link>
        </NavButton>
      </NavContainer>
    </HeaderContainer>
  );
}
