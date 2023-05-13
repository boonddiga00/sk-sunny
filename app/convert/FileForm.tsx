"use client";

import FileBox from "@/app/convert/FileBox";
import MainButton from "@/components/Buttons/MainButton";
import SubButton from "@/components/Buttons/SubButton";
import MainSection from "@/components/Sections/MainSection";
import TitleText from "@/components/Sections/TitleText";
import { Dispatch, SetStateAction, useRef } from "react";
import { styled } from "styled-components";

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
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
  setIsFileConverting: Dispatch<SetStateAction<boolean>>;
  setIsFileConverted: Dispatch<SetStateAction<boolean>>;
}

export default function FileForm({
  file,
  setFile,
  setIsFileConverting,
  setIsFileConverted,
}: IFileForm) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileUpload = () => {
    inputRef.current?.click();
  };
  const onChangeInput = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setFile(event.currentTarget.files[0]);
    }
  };
  const onClickFileConvert = () => {
    setIsFileConverting(true);
    setTimeout(() => {
      setIsFileConverting(false);
      setIsFileConverted(true);
    }, 1500);
  };
  const onClickReUpload = () => {
    setFile(null);
  };
  return (
    <>
      <MainSection>
        <TitleText huge>파일 변환하기</TitleText>
        {file ? (
          <>
            <FileBox>{file.name}</FileBox>
            <Buttons>
              <MainButton onClick={onClickFileConvert}>
                파일 변환하기
              </MainButton>
              <SubButton onClick={onClickReUpload}>파일 재업로드</SubButton>
            </Buttons>
          </>
        ) : (
          <>
            <p>간단 소개 문구</p>
            <MainButton onClick={onFileUpload}>파일 업로드</MainButton>
          </>
        )}
      </MainSection>
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
