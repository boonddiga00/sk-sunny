"use client";

import MainButton from "@/components/Buttons/MainButton";
import CustomLink from "@/components/CustomLink";
import { styled } from "styled-components";

const TitleSection = styled.section`
  margin-top: 163px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;
  h1 {
    text-align: center;
    font-size: 56px;
    font-weight: 700;
    color: #2d3648;
  }
  p {
    text-align: center;
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
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  color: #2d3648;
  line-height: 120%;
`;
const Content = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: #2d3648;
  letter-spacing: -0.01em;
  font-feature-settings: "calt" off;
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
        <CustomLink href="/convert">
          <MainButton>파일 변환하기</MainButton>
        </CustomLink>
      </ContentSection>
      <ContentSection>
        <Title>기출 DB</Title>
        <Content>간단 소개 문구</Content>
        <CustomLink href="/previous-test">
          <MainButton>기출 DB</MainButton>
        </CustomLink>
      </ContentSection>
      <ContentSection>
        <Title>3D 프린터기</Title>
        <Content>간단 소개 문구</Content>
        <MainButton>See More 3</MainButton>
      </ContentSection>
      <ContentSection>
        <Title>도움말</Title>
        <Content>간단 소개 문구</Content>
        <CustomLink href="/faq">
          <MainButton>FAQ</MainButton>
        </CustomLink>
      </ContentSection>
      <ContentSection>
        <Title>문의하기</Title>
        <Content>간단 소개 문구</Content>
        <CustomLink href="/help">
          <MainButton>문의하기</MainButton>
        </CustomLink>
      </ContentSection>
    </>
  );
}
