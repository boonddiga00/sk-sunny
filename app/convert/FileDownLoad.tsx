"use client";

import FileBox from "@/app/convert/FileBox";
import { styled } from "styled-components";
import { Dispatch, SetStateAction } from "react";
import MainButton from "@/components/Buttons/MainButton";
import SubButton from "@/components/Buttons/SubButton";
import MainSection from "@/components/Sections/MainSection";
import TitleText from "@/components/Sections/TitleText";
import ContentText from "@/components/Sections/ContentText";

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  :last-child {
    margin-bottom: 30px;
  }
`;

interface IFileDownload {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  setIsFileConverting: Dispatch<SetStateAction<boolean>>;
  setIsFileConverted: Dispatch<SetStateAction<boolean>>;
}

export default function FileDownload({
  file,
  setFile,
  setIsFileConverting,
  setIsFileConverted,
}: IFileDownload) {
  const onClickNew = () => {
    setFile(null);
    setIsFileConverting(false);
    setIsFileConverted(false);
  };
  const onClickDownload = () => {
    if (!file) return;
    const downloadUrl = window.URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", `brf파일${file.name.slice(-4)}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode?.removeChild(link);
  };
  return (
    <MainSection>
      <TitleText huge>파일 변환 완료</TitleText>
      <ContentText>파일 점자 변환이 성공적으로 완료되었습니다.</ContentText>
      <FileBox>brf파일</FileBox>
      <ContentText>{`변환된 파일을 다운로드하기 위해 “BRF 파일 다운로드” 버튼을 선택하세요.
새 파일을 변환하고 싶다면 “새 파일 변환하기" 버튼을 선택하세요.`}</ContentText>
      <Buttons>
        <MainButton onClick={onClickDownload}>BRF 파일 다운로드</MainButton>
        <SubButton onClick={onClickNew}>새 파일 변환하기</SubButton>
      </Buttons>
    </MainSection>
  );
}
