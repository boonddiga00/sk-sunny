"use client";

import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 311px;
  height: 220px;
  border: 2px dashed #cbd2e0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const File = styled.div`
  width: 128px;
  height: 130px;
  border: 1px solid #2d3648;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FileName = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
  color: #2d3648;
`;

export default function FileBox({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <File>
        <FileName>{children}</FileName>
      </File>
    </Wrapper>
  );
}
