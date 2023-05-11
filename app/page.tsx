"use client";

import { styled } from "styled-components";

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
  h1 {
    font-size: 56px;
    font-weight: 700;
    color: #2d3648;
  }
  p {
    font-size: 22px;
    font-weight: 400;
    color: #2d3648;
  }
`;

const ContentSection = styled.section`
  margin: 131px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #2d3648;
  line-height: 120%;
`;
const Content = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #2d3648;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: #2d3648;
  border: 2px solid #2d3648;
  border-radius: 6px;
  padding: 12px 20px;
  margin-top: 30px;
`;

export default function Home() {
  return (
    <>
      <TitleSection>
        <h1>PRODUCT 명칭</h1>
        <p>간단 소개 문구 + 팀소개</p>
      </TitleSection>
      <ContentSection>
        <Title>파일 변환 기능</Title>
        <Content>간단 소개 문구</Content>
        <Button>파일 변환하기</Button>
      </ContentSection>
      <ContentSection>
        <Title>기출 DB</Title>
        <Content>간단 소개 문구</Content>
        <Button>기출 DB</Button>
      </ContentSection>
      <ContentSection>
        <Title>3D 프린터기</Title>
        <Content>간단 소개 문구</Content>
        <Button>See More 3</Button>
      </ContentSection>
      <ContentSection>
        <Title>도움말</Title>
        <Content>간단 소개 문구</Content>
        <Button>FAQ</Button>
      </ContentSection>
      <ContentSection>
        <Title>문의하기</Title>
        <Content>간단 소개 문구</Content>
        <Button>문의하기</Button>
      </ContentSection>
    </>
  );
}
