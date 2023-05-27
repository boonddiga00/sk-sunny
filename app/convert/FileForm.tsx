"use client";

import FileBox from "@/app/convert/FileBox";
import MainButton from "@/components/Buttons/MainButton";
import SubButton from "@/components/Buttons/SubButton";
import ContentText from "@/components/Sections/ContentText";
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
        {file ? (
          <>
            <TitleText huge>업로드된 파일 변환하기</TitleText>
            <ContentText>파일이 업로드 되었습니다</ContentText>
            <FileBox>{file.name}</FileBox>
            <ContentText>{`점자로 변환하기 위해  “점자로 변환하기” 버튼을 선택하세요.
다른 파일을 업로드 하고 싶다면 “파일 재업로드" 버튼을 선택하세요.`}</ContentText>
            <Buttons>
              <MainButton onClick={onClickFileConvert}>
                파일 변환하기
              </MainButton>
              <SubButton onClick={onClickReUpload}>파일 재업로드</SubButton>
            </Buttons>
          </>
        ) : (
          <>
            <TitleText huge>파일 변환 시작</TitleText>
            <ContentText>{`파일 변환을 시작하기 위해 변환하고자 하는 파일을
 “파일 업로드" 버튼을 눌러 선택 및 업로드 해주세요`}</ContentText>
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
