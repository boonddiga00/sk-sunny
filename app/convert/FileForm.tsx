"use client";

import FileBox from "@/app/convert/FileBox";
import MainButton from "@/components/Buttons/MainButton";
import SubButton from "@/components/Buttons/SubButton";
import { Dispatch, SetStateAction, useRef } from "react";
import { styled } from "styled-components";

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

interface IFileForm {
  fileName: string;
  setFileName: Dispatch<SetStateAction<string>>;
  setIsFileConverting: Dispatch<SetStateAction<boolean>>;
  setIsFileConverted: Dispatch<SetStateAction<boolean>>;
}

export default function FileForm({
  fileName,
  setFileName,
  setIsFileConverting,
  setIsFileConverted,
}: IFileForm) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileUpload = () => {
    inputRef.current?.click();
  };
  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFileName(event.currentTarget.files[0].name);
    }
  };
  const onClickFileConvert = () => {
    setIsFileConverting(true);
    setTimeout(() => {
      setIsFileConverting(false);
      setIsFileConverted(true);
    }, 1500);
  };
  return (
    <>
      <TitleSection>
        <h1>파일 변환하기</h1>
        {fileName ? (
          <>
            <FileBox>{fileName}</FileBox>
            <Buttons>
              <MainButton onClick={onClickFileConvert}>
                파일 변환하기
              </MainButton>
              <SubButton>파일 재업로드</SubButton>
            </Buttons>
          </>
        ) : (
          <>
            <p>간단 소개 문구</p>
            <MainButton onClick={onFileUpload}>파일 업로드</MainButton>
          </>
        )}
      </TitleSection>
      <input
        onChange={onChangeInput}
        ref={inputRef}
        type="file"
        style={{ display: "none" }}
        accept=".txt, .pdf"
      />
    </>
  );
}
