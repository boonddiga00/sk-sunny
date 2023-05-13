"use client";

import FileBox from "@/app/convert/FileBox";
import { styled } from "styled-components";
import { Dispatch, SetStateAction } from "react";
import MainButton from "@/components/Buttons/MainButton";
import SubButton from "@/components/Buttons/SubButton";

const TitleSection = styled.section`
  margin-top: 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
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
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
  setIsFileConverting: Dispatch<SetStateAction<boolean>>;
  setIsFileConverted: Dispatch<SetStateAction<boolean>>;
}

export default function FileDownload({
  fileName,
  setFileName,
  setIsFileConverting,
  setIsFileConverted,
}: IFileDownload) {
  const brfFileName = `${fileName.slice(0, -4)}.brf`;
  const onClickNew = () => {
    setFileName("");
    setIsFileConverting(false);
    setIsFileConverted(false);
  };
  return (
    <TitleSection>
      <h1>파일 변환 완료</h1>
      <FileBox>{brfFileName}</FileBox>
      <Buttons>
        <MainButton onClick={() => {}}>BRF 파일 다운로드</MainButton>
        <SubButton onClick={onClickNew}>새 파일 변환하기</SubButton>
      </Buttons>
    </TitleSection>
  );
}
