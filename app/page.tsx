"use client";

import MainButton from "@/components/Buttons/MainButton";
import CustomLink from "@/components/CustomLink";
import ContentText from "@/components/Sections/ContentText";
import MainSection from "@/components/Sections/MainSection";
import TitleText from "@/components/Sections/TitleText";

export default function Home() {
  return (
    <>
      <MainSection>
        <TitleText huge>PRODUCT 명칭</TitleText>
        <ContentText>간단 소개 문구 + 팀소개</ContentText>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>파일 변환 기능</TitleText>
        <ContentText>간단 소개 문구</ContentText>
        <CustomLink href="/convert">
          <MainButton>파일 변환하기</MainButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>기출 DB</TitleText>
        <ContentText>간단 소개 문구</ContentText>
        <CustomLink href="/previous-test">
          <MainButton>기출 DB</MainButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>3D 프린터기</TitleText>
        <ContentText>간단 소개 문구</ContentText>
        <MainButton>See More 3</MainButton>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>도움말</TitleText>
        <ContentText>간단 소개 문구</ContentText>
        <CustomLink href="/faq">
          <MainButton>FAQ</MainButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>문의하기</TitleText>
        <ContentText>간단 소개 문구</ContentText>
        <CustomLink href="/help">
          <MainButton>문의하기</MainButton>
        </CustomLink>
      </MainSection>
    </>
  );
}
