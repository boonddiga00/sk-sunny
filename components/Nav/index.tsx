"use client";

import { styled } from "styled-components";
import NavButton from "./NavButton";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  return (
    <HeaderContainer>
      <div>Logo</div>
      <NavContainer>
        <NavButton href="/" pathname={pathname}>
          ABOUT
        </NavButton>
        <NavButton href="/convert" pathname={pathname}>
          파일 변환
        </NavButton>
        <NavButton href="/previous-test" pathname={pathname}>
          기출 자료
        </NavButton>
        <NavButton href="/faq" pathname={pathname}>
          도움말
        </NavButton>
        <NavButton href="/help" pathname={pathname}>
          문의하기
        </NavButton>
      </NavContainer>
    </HeaderContainer>
  );
}
