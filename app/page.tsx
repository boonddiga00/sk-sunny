"use client";

import LinkButton from "@/components/Buttons/LinkButton";
import CustomLink from "@/components/CustomLink";
import ContentText from "@/components/Sections/ContentText";
import MainSection from "@/components/Sections/MainSection";
import TitleText from "@/components/Sections/TitleText";

export default function Home() {
  return (
    <>
      <MainSection>
        <TitleText huge>SUNNY BRAILLE</TitleText>
        <ContentText bold>
          Sunny Braille은 해바라기팀이 개발한 교육용 웹 점역 소프트웨어 입니다.
        </ContentText>
        <ContentText>
          {`Sunny Braille은 텍스트 뿐만 수식도 점역해 낼 수 있는 수학에 특화된 점역 프로그램입니다.
          해바라기 팀은 고객님이 쉽고 빠르게 원하는 교육 자료를 점역하고
          더 많은 교육 자료의 접근성을 높이려 노력하고 있습니다.`}
        </ContentText>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>파일 변환 기능</TitleText>
        <ContentText>
          {`원하는 교육 자료 파일을 Sunny Braille에 업로드해 점자로 변환해보세요.
          변환된 파일을 다운로드해 점자정보단말기에 읽힐 수 있습니다.`}
        </ContentText>
        <CustomLink href="/convert">
          <LinkButton>파일 변환하기</LinkButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>기출 자료 모음집</TitleText>
        <ContentText>{`역대 평가원 수학 기출 문제 데이터가 수록 되어있습니다.
2006년부터 최신 자료까지 모든 모의고사를 다운로드 받아볼 수 있어요.`}</ContentText>
        <CustomLink href="/previous-test">
          <LinkButton>기출 DB</LinkButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>도움말</TitleText>
        <ContentText>아직 개발 중에 있습니다.</ContentText>
        <CustomLink href="/faq">
          <LinkButton>FAQ</LinkButton>
        </CustomLink>
      </MainSection>
      <MainSection>
        <TitleText huge={false}>문의하기</TitleText>
        <ContentText>아직 개발 중에 있습니다.</ContentText>
        <CustomLink href="/help">
          <LinkButton>문의하기</LinkButton>
        </CustomLink>
      </MainSection>
    </>
  );
}
