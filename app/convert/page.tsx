"use client";

import { useState } from "react";
import { styled } from "styled-components";
import FileForm from "./FileForm";
import FileDownload from "./FileDownLoad";

const ConvertLoader = styled.div`
  width: 800px;
  height: 464px;
  background: #ffffff;
  border: 5px solid #cbd2e0;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 60px;
  h1 {
    font-family: "Inter";
    font-weight: 700;
    font-size: 24px;
  }
`;

export default function Convert() {
  const [fileName, setFileName] = useState("");
  const [isFileConverting, setIsFileConverting] = useState(false);
  const [isFileConverted, setIsFileConverted] = useState(false);
  return (
    <>
      {isFileConverting ? (
        <ConvertLoader>
          <h1>변환 중</h1>
        </ConvertLoader>
      ) : !isFileConverted ? (
        <FileForm
          fileName={fileName}
          setFileName={setFileName}
          setIsFileConverting={setIsFileConverting}
          setIsFileConverted={setIsFileConverted}
        />
      ) : (
        <FileDownload
          fileName={fileName}
          setFileName={setFileName}
          setIsFileConverting={setIsFileConverting}
          setIsFileConverted={setIsFileConverted}
        />
      )}
    </>
  );
}
